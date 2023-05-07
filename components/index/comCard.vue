<template>
	<view class="com_card">
		<view class="left">
			<view class="profile" :style="`background-image: url(${profile});`">
			</view>
		</view>
		<view class="right">
			<view class="info"></view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { defineProps } from "vue"
	const props = defineProps({
		profile:{type:String, required:true},
	});
	
	console.log(props.profile)
</script>

<style lang="scss" scoped>
	.com_card{
		$com_cardHeight: 80px;
		@include fixedRoundedRectangle(100%, $com_cardHeight, 7px);
		margin-top: 8px;
		align-items: center;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		
		.left{
			@include fixedRetangle(60px, $com_cardHeight);
			display: flex;
			align-items: center;
			justify-content: center;
			align-items: center;
			
			.profile{
				@include fixedCircle(50px);
				background-size: 100%;
				border: .5px solid lightgray;
			}
		}
		
		.right{
			flex-basis: 100%;
			height: $com_cardHeight;
			background-color: red;
			.info{
				
			}
		}
	}
</style>