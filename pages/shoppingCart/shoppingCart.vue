<template>
	<navBar paddingLeft="20px">
		<template #default>
			<div>购物车</div>
		</template>
	</navBar>
</template>


<script lang="ts" setup>
	import navBar from "@/components/common/navBar.vue"
	import useGlobal from "@/api/global"
	const global = useGlobal();
	//console.log(global);
</script>

<style lang="scss" scoped>
	
</style>
