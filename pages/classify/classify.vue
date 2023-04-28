<template>
	<bodyer
		:paddingLeft="`20px`"
		:refresherEnabled="true"
		:backgroundColor="`white`"
		:refresherBackground="`white`"
		:refresherRefreshTime="3000"
	>
		<template #navBar>
			<div>分类</div>
		</template>
		
		<template #default>
			
		</template>
	</bodyer>
</template>


<script lang="ts" setup>
	import bodyer from "@/components/common/bodyer.vue"
</script>

<style lang="scss" scoped>
	
</style>
