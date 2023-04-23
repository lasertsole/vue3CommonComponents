<template>
	<navBar
		paddingLeft="20px"
		backgroundColor="white"
	>
		 <div>JOJO佐希照明</div>
	</navBar>
</template>


<script lang="ts" setup>
	import { onPullDownRefresh } from "@dcloudio/uni-app";
	import navBar from "@/components/navBar.vue"
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
