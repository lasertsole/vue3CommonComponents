<template>
	<div class="bodyer">
		<navBar
			paddingLeft="20px"
			backgroundColor="white"
			ref="navBarExport"
		>
			<slot name="navBar"></slot>
		</navBar>
		<div class="container">
			<slot name="default"></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	import navBar from "@/components/common/navBar.vue"
	import {ref, onMounted} from "vue"
	
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
			padding: 10px;
			width: 100%;
			$navPaddingTotalTop: v-bind(navTotalHeight);
			height: calc(100% - $navPaddingTotalTop);
			box-sizing: inherit;
		}
	}
</style>
