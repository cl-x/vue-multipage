/*
 * @Author       : 桔子
 * @Date         : 2023-11-22 13:18:11
 * @LastEditors  : 桔子
 * @LastEditTime : 2024-03-27 20:25:10
 * @Description  : marketingModules
 * @FilePath     : /vue-multipage/src/stores/modules/common.ts
 */
import { defineStore } from 'pinia'
import { store } from '../index'

interface CommonState {
  name: ''
}

export const useCommonModulesStore = defineStore('commonModules', {
  state: (): CommonState => {
    return {
      name: ''
    }
  },
  getters: {
    getName() {
      return this.name
    }
  },
  actions: {
    setName(name: any) {
      
      this.name = name
      console.log(this.name, '---name')
    }
  }
})

export const useAppStoreWithOut = () => {
  return useCommonModulesStore(store)
}
