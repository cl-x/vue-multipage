/*
 * @Author       : 桔子
 * @Date         : 2023-11-22 13:18:11
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-04-07 14:02:01
 * @Description  : marketingModules
 * @FilePath     : /vue-multipage/stores/modules/common.ts
 */
import { defineStore } from 'pinia'
import { store } from '../index'

interface CommonState {
  name: any
}

export const useCommonModulesStore = defineStore('commonModules', {
  state: (): CommonState => {
    return {
      name: ''
    }
  },
  getters: {
    getName(): any {
      return this.name
    }
  },
  actions: {
    setName(name: any) {
      this.name = name
    }
  }
})

export const useAppStoreWithOut = () => {
  return useCommonModulesStore(store)
}
