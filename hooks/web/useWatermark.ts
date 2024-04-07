/*
 * @Author       : 桔子
 * @Date         : 2024-04-07 11:09:15
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-07 13:59:42
 * @Description  : 头部注释配置模板
 * @FilePath     : /vue-multipage/hooks/web/useWatermark.ts
 */
const domSymbol = Symbol('watermark-dom')

export function useWatermark(
  op = 0.15,
  appendEl: HTMLElement | null = document.body
) {
  let func: any = () => {}
  const id = domSymbol.toString()
  const clear = () => {
    const domId = document.getElementById(id)
    if (domId) {
      const el = appendEl
      el && el.removeChild(domId)
    }
    window.removeEventListener('resize', func)
  }
  const createWatermark = (str: string) => {
    clear()

    const can = document.createElement('canvas')
    can.width = 300
    can.height = 240

    const cans = can.getContext('2d')
    if (cans) {
      cans.rotate((-20 * Math.PI) / 120)
      cans.font = '15px Vedana'
      cans.fillStyle = `rgba(0, 0, 0, ${op})`
      cans.textAlign = 'left'
      cans.textBaseline = 'middle'
      cans.fillText(str, can.width / 20, can.height)
    }

    const div = document.createElement('div')
    div.id = id
    div.style.pointerEvents = 'none'
    div.style.top = '0px'
    div.style.left = '0px'
    div.style.position = 'absolute'
    div.style.zIndex = '100000000'
    div.style.width = document.documentElement.clientWidth + 'px'
    div.style.height = document.documentElement.clientHeight + 'px'
    div.style.background =
      'url(' + can.toDataURL('image/png') + ') left top repeat'
    const el = appendEl
    el && el.appendChild(div)
    return id
  }

  function setWatermark(str: string) {
    createWatermark(str)
    func = () => {
      createWatermark(str)
    }
    window.addEventListener('resize', func)
  }

  return { setWatermark, clear }
}
