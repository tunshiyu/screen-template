# 大屏模板

## 概要

本项目为结合`@td-design/charts`组件库的图表模板，包括 32:9 和 16:9 版本,本版本为 16:9 ，分支 feat/bigScreen 为 32:9 版本。

## 用 babel-plugin-import 引入@td-design/charts 组件样式

需要在项目根目录下`babel.config.js`文件中加入以下配置：

```js
plugins: [
    [
      'import',
      {
        libraryName: '@td-design/charts',
        customName: (name) => {
          if (name.indexOf('create') > -1) {
            return `@td-design/charts/es/utils/${name}`;
          }
          return `@td-design/charts/es/components/${name}`;
        },
        style: true,
      },
    ],
  ],
```

## 使用主题配置功能

### 步骤一：安装环境

安装最新版 `umi-plugin-antd-theme`，

### 步骤二：基础配置

在项目 config 文件夹下新建 theme.config.json 文件，然后加入以下配置：

```json
{
  "theme": [
    {
      "theme": "dark",
      "fileName": "dark.css",
      "modifyVars": {
        "@blue-screen-bg": "#090b2c"
      }
    },
    {
      "theme": "light",
      "fileName": "light.css",
      "modifyVars": {
        "@blue-screen-bg": "#fff"
      }
    }
  ],
  // 是否压缩css
  "min": true,
  // css module
  "isModule": true,
  // 忽略 antd 的依赖
  "ignoreAntd": false,
  // 忽略 pro-layout
  "ignoreProLayout": false,
  // 使用缓存
  "cache": true,
  // 引入外库less文件
  "extraLibraries": ["@td-design/charts"]
}
```

theme 下的 modifyVars 下默认可配置 antd 的自带样式变量如：@primary-color 等。

其中 `extraLibraries` 项目加入组件库名称后可以引入其他库的样式，并且添加组件库中定义的 less 变量到 modifyVars 下，可实现对该变量的主题色自定义配置，就可以实现组件库主题样式的统一配置。

### 步骤三：项目中使用经过主题色配置的变量

在 src/styles 文件夹下 default.less 下添加该变量的默认配置。如：

```less
@blue-screen-bg: #fff;
```

在项目的样式文件`xxx.module.less`中使用该颜色变量，并从 default.less 文件中引入。`antd-pro-merge-less`会自动将该组件库中处理过的样式整合入`/theme/xxx.css`下，缓存在 node_modules/.plugin-theme 下就可以实现自定义主题色配置了。

## 响应式实践标准

  思路是通过antd的RowCol组件在不同breakPoint下的span，来调整它在当前Row中的布局。下面实践出了一套标准，可以参考模板代码和下面的标准加深理解。

| | 32-9 | 16-9 | 目地|
| -- | -- | -- | -- |
| xl(>1200) | ScreenLeft/Center/Right：8/8/8 | ScreenLeft/Center/Right:7/10/7 | 大屏状态|
| md(>=768) | ScreenLeft/Center/Right：24/24/24<br/><br/> 内部RowCol按原有布局：如第一行两列,Row1Col1/Row1Col2:12/12 | ScreenLeft/Center/Right：24/24/24<br/><br/>内部RowCol按原有布局,如左 | pad左中右叠成一列，各自内部原有布局  |
| xs(<576) | ScreenLeft/Center/Right：24/24/24<br/><br/> 内部RowCol全部叠成一列：如第一行两列,Row1Col1/Row1Col2:24/24 | ScreenLeft/Center/Right：24/24/24<br/><br/>内部RowCol全部叠成一列,如左 | 手机左中右叠成一列，各自内部也叠成一列  |

PS：<br />
1、 空间优化：当两个没有x坐标轴的图表（如单例环形图（createDonutPlot）和玫瑰图（createStackRosePlot））在同一行时，如果设置`md={12}`(即 >md(768) )会造成空间浪费，可以设置为`sm={12}`(即在 >sm(576) 时保持原有布局)。例如这两个图在同一行各占一半时，则设置`xs={24} sm={12} `。