declare module '*.css';
declare module '*.less';
declare module '*.png';

declare module 'antd-dayjs-webpack-plugin';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;
