/*
 * @Author       : 桔子
 * @Date         : 2024-03-27 19:30:33
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 19:31:11
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/types/common.d.ts
 */

  /**
   * @Description: inputNum指令
   * @return {*}
   */
  export interface InputNum {
    limitNum?: number
    minValue?: any
    isMinFlag?: boolean
    maxValue?: any
    isMaxFlag?: boolean
  }