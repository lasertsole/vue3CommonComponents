<template>
	<view class="navBar">
		<slot name="default"></slot>
	</view>
	<view class="navBarPlaceholder">
		<slot></slot>
	</view>
</template>

<script lang="ts" setup>
	import { ref, defineProps } from "vue";
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
	
	const menuButtonConfig:menuButtonConfigType | null = wx.getMenuButtonBoundingClientRect();//获取菜单胶囊样式信息
	
	const navBarMarginTop = ref<string>(menuButtonConfig.top+"px");//得到导航栏距离页面顶端距离
	const navBarHeight = ref<string>(menuButtonConfig.height+"px")//获取菜单胶囊
</script>

<style lang="scss" scoped>
	.navBar,.navBarPlaceholder{
		background-color: v-bind(backgroundColor);
		color: v-bind(textColor);
		$paddingTempTop: v-bind(paddingTop);
		$marginTempTop: v-bind(navBarMarginTop);
		padding-top: calc($paddingTempTop + $marginTempTop);
		padding-right: v-bind(paddingRight);
		padding-bottom: v-bind(paddingBottom);
		padding-left: v-bind(paddingLeft);
		min-height: v-bind(navBarHeight);
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