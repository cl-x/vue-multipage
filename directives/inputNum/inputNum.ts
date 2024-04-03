/*
 * @Author       : 桔子
 * @Date         : 2024-02-29 09:06:11
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 19:34:57
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/src/directives/inputNum/inputNum.ts
 */

import type { App, Directive, DirectiveBinding } from 'vue'
import { InputNum } from '@/types/common'
import { floor } from 'lodash-es'

function serNum(el: any, binding: DirectiveBinding) {
  // 获取 input 输入框
  const input = (el: any) => (el instanceof HTMLInputElement ? el : el.querySelector('input'))

  const vm = input(el)

  if (!vm) return

  let content

  // 设置输入框的值,触发input事件,改变v-model绑定的值
  const setVal = (val: any) => {
    vm.value = val
    vm.dispatchEvent(new Event('input'))
  }

  const { limitNum, minValue, isMinFlag, maxValue, isMaxFlag } = (binding as any).value as InputNum // 初始化设置

  const n = new RegExp('^\\D*(\\d*(?:\\.\\d{0,' + limitNum + '})?).*$', 'g')
  // 最多输入两位小数
  el.addEventListener('input', function () {
    content = vm.value.replace(n, '$1')
    setVal(content)
  })

  el.addEventListener('focusout', function () {
    content = floor(vm.value, limitNum)
    if (isMinFlag && +content < +minValue) {
      content = minValue
    }
    if (isMaxFlag && +content > +maxValue) {
      content = maxValue
    }
    setVal(content)
  })
}

const mounted = (el: Element, binding: DirectiveBinding<any>) => {
  serNum(el, binding)
}

const unmounted = (el: Element) => {
  // 解除绑定的时候去除事件
  el.removeEventListener('input', () => {}, true)
  el.removeEventListener('focusout', () => {}, true)
}

const inputNumDirective: Directive = {
  mounted,
  unmounted
}

export const setupInputNumDirective = (app: App<Element>) => {
  app.directive('inputNum', inputNumDirective)
}

export default inputNumDirective
