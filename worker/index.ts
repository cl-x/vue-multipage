/*
 * @Author       : 桔子
 * @Date         : 2024-04-22 17:04:24
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-22 17:27:20
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/worker/index.ts
 */
export const fiBoNaCCi: any = (n: any) => {
  return n <= 2 ? 1 : fiBoNaCCi(n - 1) + fiBoNaCCi(n - 2)
}

self.onmessage = (event: any) => {
  const number = event.data
  console.log('接收到主线程发送的数据' + number)
  /* 调用占用时间的函数 */
  const result = fiBoNaCCi(number)
  /* 将数据发送到主线程 */
  postMessage(result)
  console.log('分线程想主线程返回数据' + result)
}
