<template>
	<view class="bodyer">
		<navBar class="navBar"
			:paddingLeft="paddingLeft"
			:backgroundColor="backgroundColor"
		>
			<slot name="navBar"></slot>
		</navBar>
		
		<view class="topExtend">
			<slot name="topExtend"></slot>
		</view>
		
		<scrollView class="container"
			:refresherEnabled="refresherEnabled"
			:refresherRefreshTime="refresherRefreshTime"
			:refresherThreshold="refresherThreshold"
			:refresherBackground="refresherBackground"
			:paddingContent="paddingContent"
		>
			<template #default>
				<slot name="default"></slot>
			</template>
		</scrollView>
	</view>
</template>

<script setup lang="ts">
	import {ref, onMounted, defineProps, getCurrentInstance} from "vue"
	import navBar from "@/components/common/navBar.vue"
	import scrollView from "@/components/common/scrollView.vue"
	
	const props = defineProps({
		paddingLeft:{type:String,required:false, default:"0px"},
		backgroundColor:{type:String, required:false, default:"transparent"},
		refresherEnabled:{type:Boolean,required:false, default:false},
		refresherRefreshTime:{type:Number, required:false, default:3000},
		refresherThreshold:{type:Number, required:false, default:100},
		refresherBackground:{type:String, required:false, default:"transparent"},
		paddingContent:{type:String, required:false, default:"0px"},
	});
	
	const navTotalHeight = ref<string | undefined>("");//导航栏总高度
	const topExtendHeight = ref<string | undefined>("");//顶部扩展栏高度
	const query = uni.createSelectorQuery().in(getCurrentInstance());//创建uniapp节点选择器
	
	onMounted(()=>{
		query.select('.navBar').boundingClientRect(data => {//获取导航栏总高度
			navTotalHeight.value = data?.height + "px";
		}).exec();
		query.select('.topExtend').boundingClientRect(data => {//获取顶部扩展栏高度
			topExtendHeight.value = data?.height + "px";
		}).exec();
	})
</script>

<style lang="scss" scoped>
	.bodyer{
		width: 100vw;
		height: calc(100vh - var(--window-bottom));//h5端会出现bodyer高度重叠底部导航栏问题，减去--window-bottom可以解决
		box-sizing: border-box;
		.container{
			width: 100%;
			$navPaddingTotalTop: v-bind(navTotalHeight);
			$topExtendHeight: v-bind(topExtendHeight);
			height: calc(100% - $navPaddingTotalTop - $topExtendHeight);
			box-sizing: inherit;
			background-color: white;
			overflow: hidden;
		}
	}
</style>