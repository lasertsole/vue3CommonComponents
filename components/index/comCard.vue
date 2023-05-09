<template>
	<view class="com_card">
		<view class="left">
			<view class="profile" :style="`background-image: url(${profile});`">
			</view>
		</view>
		<view class="right">
			<view class="info">
				<view class="comName">{{comName}}</view>
				<view class="comAdress">{{comAdress}}</view>
				<view class="comConsult">
					<view class="consultType">
						<view class="waiter"></view>
						<label>客服</label>
					</view>
					
					<view class="consultPhone">
						<view class="phone"></view>
						<label>{{consultPhone}}</label>
						<label class="phoneButton">拨打</label>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { defineProps } from "vue"
	const props = defineProps({
		profile:{type:String, required:true},
		comName:{type:String, required:true},
		comAdress:{type:String, required:true},
		consultPhone:{type:String, required:true},
	});
</script>

<style lang="scss" scoped>
	@import "@/uni.scss";
	.com_card{
		$com_cardHeight: 100px;
		@include fixedRoundedRectangle(100%, $com_cardHeight, 7px);
		align-items: center;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		box-shadow: 0px 0px 10px 2px lightgray;
		
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
			box-sizing: border-box;
			padding: 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			
			.info{
				.comName{
					font-weight: bold;
					margin-bottom: 5px;
				}
				.comAdress{
					font-size: 12px;
					font-weight: lighter;
				}
				.comConsult{
					display: flex;
					font-size: 12px;
					font-weight: lighter;
					margin-top: 5px;
					
					label{
						margin-left: 5px;
					}
					
					.consultType{
						display: flex;
						align-items: center;
						
						.waiter{
							@include fixedCircleImg(20px, "/static/icons/waiter.svg");
						}
					}
					.consultPhone{
						display: flex;
						align-items: center;
						margin-left: 20px;
						
						.phone{
							@include fixedCircleImg(20px, "/static/icons/phone.svg");
						}
						
						.phoneButton{
							color: lightgreen;
							font-weight: bold;
							border: 1.5px solid lightgreen;
							padding: 0px 3px;
							border-radius: 4px;
						}
					}
				}
			}
		}
	}
</style>