<template>
<!--#ifdef APP-PLUS-->
	<view class="leaveStatusBar"></view>
<!--#endif-->
<!--#ifdef MP-WEIXIN-->
	<view class="navBar">
		<slot name="default"></slot>
	</view>
	<view class="navBarPlaceholder">
		<slot></slot>
	</view>
<!--#endif-->
</template>

<script lang="ts" setup>
// #ifdef MP-WEIXIN
	import { ref, defineProps, computed } from "vue";
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
	const navBarMarginRight = ref<string>(menuButtonConfig.left+"px");//得到导航栏距离页面右边距离
	
	
	const paddingTotalTop = computed(()=>{//计算出padding-top
		return parseInt(navBarMarginTop.value) + parseInt(props.paddingTop) + "px";
	})
	/****************以上是样式计算****************/
// #endif
</script>

<style lang="scss" scoped>
/*#ifdef APP-PLUS*/
	.leaveStatusBar{
		height: var(--status-bar-height);
	}
/*#endif*/

/*#ifdef MP-WEIXIN*/
	.navBar,.navBarPlaceholder{
		box-sizing: border-box;
		background-color: v-bind(backgroundColor);
		color: v-bind(textColor);
		$paddingTotalTop: v-bind(paddingTotalTop);
		padding-top: $paddingTotalTop;
		$navHeight: v-bind(navBarHeight);
		min-height: calc($navHeight + $paddingTotalTop);
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
		z-index: 1;
		$navBarMarginRight: v-bind(navBarMarginRight);
		padding-right: calc(100% - $navBarMarginRight);
		padding-bottom: v-bind(paddingBottom);
		padding-left: v-bind(paddingLeft);
	}
	.navBarPlaceholder{
		opacity: 0;
		display: block;
		pointer-events:none;
		position: relative;
		z-index: 0;
	}
/*#endif*/
</style>