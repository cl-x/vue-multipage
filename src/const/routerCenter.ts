/*
 * @Author       : 桔子
 * @Date         : 2024-04-03 15:34:26
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-03 16:39:23
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/const/routerCenter.ts
 */
const url_domain = `${window.location.protocol}//${window.location.host}`;

/**
 * 页面路由
 */
export const PAGE_ROOT = {
  DETAIL: "/detail/index.html#/",
  PAGEONE: "/pageOne/index.html#/",
  PAGETWO: "/pageTwo/index.html#/",
};

/**
 * 页面路由 基础
 */
export const PAGE_URL = {
  // detail页面的
  DETAIL_HOME: `${url_domain}${PAGE_ROOT.DETAIL}home`, //详情首页

  // pageOne页面的
  PAGEONE_ENTER: `${url_domain}${PAGE_ROOT.PAGEONE}enter`, //pageOne入口

  // pageTwo页面的
  PAGETWO_HOME: `${url_domain}${PAGE_ROOT.PAGETWO}home`, //pageTwo首页
};
