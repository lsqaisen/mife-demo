declare module '*.less';
declare module 'react-lifecycles-compat';
declare module 'mife/bin/api';

interface Window {
  mife_menus?: object;
  Number: any;
}

declare var window: Window;