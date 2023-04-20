import App from '@/App'
import { createSSRApp } from 'vue'

/******************以下是自定义引入******************/
//引入pinia临时存储和持久化存储
import pinia from '@/api/stores'
import { useMainStore, useSecondaryStore } from "@/api/stores/main.ts"

//引入事件总线mitt
import mitt from 'mitt'

//引入axios
import axios from 'axios'
/******************以上是自定义引入******************/

export function createApp() {
	
  const app = createSSRApp(App);
/******************以下是自定义配置******************/
  
  /******配置pinia******/
  app.use(pinia);//使用pinia
  /*持久性pinia*/
  const mainStore = useMainStore();//获取持久性存储对象
  app.config.globalProperties.mainStore = mainStore;//将存储对象全局化
  /*临时性pinia*/
  const secondaryStore = useSecondaryStore();//获取持久化存储对象
  app.config.globalProperties.secondaryStore = secondaryStore;//将存储对象全局化
  
  /******配置mitt******/
  /*事件总线全局化*/
  app.config.globalProperties.Bus = mitt();
  
  /******配置axios******/
  /*axios请求拦截器*/
  axios.interceptors.request.use((config)=>{
  	// if(mainStore.token){
  	// 	config.headers['token'] = mainStore.token;
  	// }
  	return config;
  });
  
  /*axios响应拦截器*/
  axios.interceptors.response.use((res)=>{
  	return res;
  });
  
/******************以上是自定义配置******************/
  
  return {app}
}