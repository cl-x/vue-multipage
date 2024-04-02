/*
 * @Author       : 桔子
 * @Date         : 2024-03-27 17:52:39
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 18:59:54
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/utils/commonTool.ts
 */

/**
 * @Description: 地址栏参数转成对象
 * @return {*}
 */
export const getUrlData = () => {
  let url: any = window.location.href.split('?')[1] || '' //url中?之后的部分
  const dataObj: any = {}
  if (url?.indexOf('&') > -1) {
    url = url.split('&') // url中去掉&全部变成“a=b” “c=d” “e=f”的模式
    for (let i = 0; i < url.length; i++) {
      const arr = url[i].split('=')
      dataObj[arr[0]] = arr[1]
    }
  } else {
    url = url.split('=')
    dataObj[url[0]] = url[1]
  }
  return dataObj
}

/**
 * @Description: 默认重定向路由
 * @param {any} push
 * @return {*}
 */
export const pageRedirect = async (push: any) => {
  const params_data = getUrlData()
  if (params_data?.path) {
    push({ path: params_data.path })
  }
}
