<template>
	<bodyer
		:paddingLeft="`20px`"
		:refresherEnabled="true"
		:backgroundColor="`white`"
		:refresherBackground="`white`"
		:refresherRefreshTime="3000"
	>
		<template #navBar>
			<div>JOJO佐希照明</div>
		</template>
		
		<template #default>
			<searchBar></searchBar>
			<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" :thumbnail="avatar" @click="onClick">
				<text class="uni-body">这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
			</uni-card>
		</template>
	</bodyer>
</template>

<script lang="ts" setup>
	import useGlobal from "@/api/global"
	import bodyer from "@/components/common/bodyer.vue"
	import searchBar from "@/components/index/searchBar.vue"
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
