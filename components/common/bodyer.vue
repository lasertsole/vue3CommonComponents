<template>
	<div class="bodyer">
		<navBar
			:paddingLeft="paddingLeft"
			:backgroundColor="backgroundColor"
			ref="navBarExport"
		>
			<slot name="navBar"></slot>
		</navBar>
		
		<scrollView class="container"
			:refresherEnabled="refresherEnabled"
			:refresherRefreshTime="refresherRefreshTime"
			:refresherThreshold="refresherThreshold"
			:refresherBackground="refresherBackground"
			:paddingContent="`10px`"
		>
			<template #default>
				<slot name="default"></slot>
			</template>
		</scrollView>
	</div>
</template>

<script setup lang="ts">
	import {ref, onMounted, defineProps} from "vue"
	import navBar from "@/components/common/navBar.vue"
	import scrollView from "@/components/common/scrollView.vue"
	
	const props = defineProps({
		paddingLeft:{type:String,required:false, default:"0px"},
		backgroundColor:{type:String, required:false, default:"transparent"},
		refresherEnabled:{type:Boolean,required:false, default:false},
		refresherRefreshTime:{type:Number, required:false, default:3000},
		refresherThreshold:{type:Number, required:false, default:100},
		refresherBackground:{type:String, required:false, default:"transparent"},
		paddingContent:{type:String, required:false, default:"10px"},
	});
	
	const navBarExport = ref<any>();//获取导航栏export出来的属性
	const navTotalHeight = ref<string>("")//导航栏总高度
	
	onMounted(()=>{
		navTotalHeight.value = navBarExport.value.navTotalHeight;//获取导航栏总高度
	})
</script>

<style lang="scss" scoped>
	.bodyer{
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		.container{
			width: 100%;
			$navPaddingTotalTop: v-bind(navTotalHeight);
			height: calc(100% - $navPaddingTotalTop);
			box-sizing: inherit;
			background-color: white;
			overflow: hidden;
		}
	}
</style>
