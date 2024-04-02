/*
 * @Author: 南靳
 * @Date: 2024-02-26 10:07:41
 * @LastEditors: 南靳
 * @LastEditTime: 2024-02-26 10:15:26
 * @FilePath: /Silk-All-Backend/src/hooks/event/useInputValChangeClear.ts
 * @Description:
 */
import { ref } from 'vue'

const _useInputValChangeClear = (callback: () => void) => {
  const cacheVal = ref<string>('')
  const focus = (val: string) => {
    cacheVal.value = val
  }
  const blur = (val: string) => {
    if (cacheVal.value !== val) {
      callback()
    }
  }

  return { focus, blur }
}

export const useInputValChangeClear = _useInputValChangeClear
export default useInputValChangeClear
