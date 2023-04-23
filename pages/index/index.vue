<template>
	<navBar
		paddingLeft="20px"
		backgroundColor="white"
	>
		<template #default>
			<div>JOJO佐希照明</div>
		</template>
	</navBar>
	<div class="searchBar">
		<div class="navigation"></div>
		<div class="search"></div>
	</div>
</template>


<script lang="ts" setup>
	import { onPullDownRefresh } from "@dcloudio/uni-app";
	import navBar from "@/components/common/navBar.vue"
	import useGlobal from "@/api/global"
	const global = useGlobal();
	//console.log(global);
	onPullDownRefresh(()=>{
		console.log('refresh');
		setTimeout(function () {
			uni.stopPullDownRefresh();
		}, 3000);
	})
</script>

<style lang="scss" scoped>
	
</style>
