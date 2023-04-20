import { createPinia,Pinia } from "pinia"
import { createPersistedState } from "pinia-plugin-persistedstate"

const pinia:Pinia = createPinia();
// 状态持久化-插件配置
pinia.use(createPersistedState({
    storage: {
		getItem(key: string):string | null {
			return uni.getStorageSync(key);
		},
		setItem(key:string, value:string) {
			uni.setStorageSync(key, value);
		}
	}
}))

export default pinia