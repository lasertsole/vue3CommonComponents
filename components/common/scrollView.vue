<template>
	<scroll-view
		class="scrollView"
		scroll-y="true"
		:refresher-triggered="triggered"
		:refresher-enabled="refresherEnabledController"
		:refresher-threshold="refresherThreshold"
		:refresher-background="refresherBackground"
		@refresherpulling="onPulling"
		@refresherrefresh="onRefresh"
		@refresherrestore="onRestore"
		@refresherabort="onAbort">
		
		<view class="slotContainer">
			<slot name="default"></slot>
		</view>
		
	</scroll-view>
</template>

<script lang="ts" setup>
	import {ref, defineProps, onMounted} from "vue"
	
	const props = defineProps({
		refresherEnabled:{type:Boolean, required: false, default:false},
		refresherThreshold:{type:Number, required: false, default:100},
		refresherBackground:{type:String, required:false, default:"transparent"},
		refresherPullingCall:{type:Function, required:false, default:function(){}},
		refresherRereshCall:{type:Function, required:false, default:function(){}},
		refresherRefreshTime:{type:Number, required: false, default:3000},
		refresherRestoreCall:{type:Function, required:false, default:function(){}},
		refresherAbortCall:{type:Function, required:false, default:function(){}},
		paddingContent:{type:String, required:false, default:"0px"},
	});
	const triggered = ref<boolean>(false);
	
	/*拉动触发事件*/
	function onPulling():void{
		props.refresherPullingCall();
	};
	
	/*拉动到底触发事件*/
	function onRefresh():void{
		triggered.value = true;
		
		props.refresherRereshCall();
		
		setTimeout(function(){
			triggered.value = false;
		},props.refresherRefreshTime)
	};
	
	/*拉动回顶触发事件*/
	function onRestore():void{
		props.refresherRestoreCall();
	};
	
	/*拉动中断触发事件*/
	function onAbort():void{
		props.refresherAbortCall();
	};
	
	/*控制是否启用下拉刷新*/
	const refresherEnabledController = ref<boolean>(false);
	onMounted(()=>{
		refresherEnabledController.value = props.refresherEnabled;
	});
</script>

<style lang="scss" scoped>
	.scrollView{
		width: 100%;
		height: 100%;
	}
	
	.slotContainer{
		padding: v-bind(paddingContent);
	}
</style>