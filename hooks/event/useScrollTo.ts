/*
 * @Author       : 桔子
 * @Date         : 2024-04-07 11:09:15
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-07 13:58:28
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/hooks/event/useScrollTo.ts
 */
import { ref, unref } from 'vue'

export interface ScrollToParams {
  el: any
  to: number
  position: string
  duration?: number
  callback?: () => void
}

const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2
  if (t < 1) {
    return (c / 2) * t * t + b
  }
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}
const move = (el: any, position: string, amount: number) => {
  el[position] = amount
}

export function useScrollTo({
  el,
  position = 'scrollLeft',
  to,
  duration = 500,
  callback
}: ScrollToParams) {
  const isActiveRef = ref(false)
  const start: any = el[position]
  const change = to - start
  const increment = 20
  let currentTime = 0

  function animateScroll() {
    if (!unref(isActiveRef)) {
      return
    }
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)
    move(el, position, val)
    if (currentTime < duration && unref(isActiveRef)) {
      requestAnimationFrame(animateScroll)
    } else {
      if (callback) {
        callback()
      }
    }
  }

  function run() {
    isActiveRef.value = true
    animateScroll()
  }

  function stop() {
    isActiveRef.value = false
  }

  return { start: run, stop }
}
