/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2020-05-28 14:30:22
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-28 14:32:49
 */

export default {
  '/comboData': {
    success: true,
    data: {
      barData: [
        { time: '2019-03', value: 350 },
        { time: '2019-04', value: 900 },
        { time: '2019-05', value: 300 },
        { time: '2019-06', value: 450 },
        { time: '2019-07', value: 470 },
      ],
      lineData: [
        { time: '2019-03', count: 800 },
        { time: '2019-04', count: 600 },
        { time: '2019-05', count: 400 },
        { time: '2019-06', count: 380 },
        { time: '2019-07', count: 220 },
      ],
    },
    code: 20000,
    message: '成功',
  },
};
