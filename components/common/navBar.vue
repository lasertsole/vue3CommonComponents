<template>
	<view class="navBar">
		<slot name="default"></slot>
	</view>
	<view class="navBarPlaceholder">
		<slot></slot>
	</view>
</template>

<script lang="ts" setup>
	import { ref, defineProps, computed, defineExpose } from "vue";
	const props = defineProps({
		paddingTop:{type: String, default: "0px", required: false},
		paddingRight:{type: String, default: "0px", required: false},
		paddingBottom:{type: String, default: "0px", required: false},
		paddingLeft:{type:String, default: "0px", required: false},
		backgroundColor:{type:String, default: "transparent", required: false},
		textColor:{type:String, default: "black", required: false}
	});
	
	/****************以下是类型定义****************/
	type menuButtonConfigType = {//定义wx.getMenuButtonBoundingClientRect()的返回类型
		bottom: number,
		height: number,
		left: number,
		right: number,
		top: number,
		width: number,
	}
	/****************以上是类型定义****************/
	
	/****************以下是样式计算****************/
	const menuButtonConfig:menuButtonConfigType | null = wx.getMenuButtonBoundingClientRect();//获取菜单胶囊样式信息
	
	const navBarMarginTop = ref<string>(menuButtonConfig.top+"px");//得到导航栏距离页面顶端距离
	const navBarHeight = ref<string>(menuButtonConfig.height+"px")//获取菜单胶囊
	
	const paddingTotalTop = computed(()=>{//计算出padding-top
		return parseInt(navBarMarginTop.value) + parseInt(props.paddingTop) + "px";
	})
	
	const navTotalHeight = computed(()=>{//计算出导航栏总高度
		return parseInt(paddingTotalTop.value) + parseInt(navBarHeight.value) +"px";
	})
	/****************以上是样式计算****************/
	
	/****************以下是样式导出****************/
	defineExpose({
		navTotalHeight,//导出navBar导航栏总高度
	});
	/****************以上是样式导出****************/
</script>

<style lang="scss" scoped>
	.navBar,.navBarPlaceholder{
		background-color: v-bind(backgroundColor);
		color: v-bind(textColor);
		padding-top: v-bind(paddingTotalTop);
		padding-right: v-bind(paddingRight);
		padding-bottom: v-bind(paddingBottom);
		padding-left: v-bind(paddingLeft);
		min-height: v-bind(navBarHeight);
		max-height: v-bind(navBarHeight);
	}
	.navBar{
		display: flex;
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		justify-content: flex-start;
		align-items: center;
	}
	.navBarPlaceholder{
		opacity: 0;
		display: block;
		pointer-events:none;
	}
</style>