<template>
	<div class="searchBar">
		<div class="locationFragment">
			<div class="location"><div class="image"></div></div>
			<div class="tip">查看距您最近的商铺</div>
		</div>
		<div class="searchFragment">
			<input class="search" type="text" placeholder="请输入商品名称" v-model="searchContent" @confirm="searchEvent"/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, defineEmits } from "vue"
	const emits = defineEmits(["searchEvent"]);
	
	const searchContent = ref<string>("");
	function searchEvent():void{
		emits("searchEvent", searchContent.value);
	}
</script>

<style lang="scss" scoped>
	@import "@/uni.scss";
	$searchBarHeight:25px;
	.searchBar{
		@include fixedHeight($searchBarHeight);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.locationFragment{
			display: flex;
			.location{
				@include fixedSquare($searchBarHeight - 2px);
				.image{
					@include imgFullInParent("@/static/icons/location.svg");
					cursor: pointer;
				}
			}
			.tip{
				color: #999;
				line-height: 25px;
				font-size: 12px;
			}	
		}
		.searchFragment{
			display: flex;
			.search{
				width: 100px;
				height: $searchBarHeight;
				border: 1px #999 solid;
				@include fixedCapsule(150px, 25px);
				padding: 0px 10px;
				font-size: 12px;
			}	
		}
	}
</style>