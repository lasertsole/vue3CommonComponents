<template>
	<navBar paddingLeft="20px">
		 <div>分类</div>
	</navBar>
</template>


<script lang="ts" setup>
	import navBar from "@/components/navBar.vue"
	import useGlobal from "@/api/global"
	const global = useGlobal();
	//console.log(global);
</script>

<style lang="scss" scoped>
	
</style>
