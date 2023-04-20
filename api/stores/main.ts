import { defineStore } from "pinia";

/**********持久性存储用户信息**********/
type StateType = {
	user?: undefined | string
}

export const useMainStore = defineStore('global', {
  persist: {
    key: 'pinia',
    paths: ['user']
  },
  state: (): StateType => ({
    user: undefined,
  }),
  actions: {
    setData<T extends keyof StateType> ({ key, value }: { key: T, value: any }) {
      this[key] = value;
    }
  }
});
/*使用方法
*console.log(store.user)// 取值
*store.setData({ key: 'user', value:{ id: 0, name: 'oil '} })// 赋值
*/

/**********临时性存储用户信息**********/
export const useSecondaryStore = defineStore('global', {
  state: (): StateType => ({
    user: undefined,
  }),
  actions: {
	setData<T extends keyof StateType> ({ key, value }: { key: T, value: any }) {
		this[key] = value;
	}
  }
});
/*使用方法
*console.log(store.user)// 取值
*store.setData({ key: 'user', value:{ id: 0, name: 'oil '} })// 赋值
*/