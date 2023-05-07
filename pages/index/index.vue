<template>
	<bodyer
		:paddingLeft="`20px`"
		:refresherEnabled="true"
		:backgroundColor="`white`"
		:refresherBackground="`white`"
		:refresherRefreshTime="3000"
	>
		<template #navBar>
			<view>JOJO佐希照明</view>
		</template>
		
		<template #default>
			<searchBar></searchBar>
			<comCard
				profile="/static/logo.png"
			></comCard>
		</template>
	</bodyer>
</template>

<script lang="ts" setup>
	import useGlobal from "@/api/global"
	import bodyer from "@/components/common/bodyer.vue"
	import searchBar from "@/components/index/searchBar.vue"
	import comCard from "@/components/index/comCard.vue"
	
	const global:object|undefined = useGlobal();

	function searchEvent(searchContent:string):void{
		console.log(searchContent);
	}
</script>

<style lang="scss" scoped>
	@import "@/uni.scss";
	.companyCard{
		@include fixedRetangle(100%, 100px);
		background-color: aqua;
	}
</style>
