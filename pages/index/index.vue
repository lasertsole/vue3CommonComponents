<template>
	<bodyer
		:paddingLeft="`20px`"
		:refresherEnabled="true"
		:backgroundColor="`white`"
		:refresherBackground="`white`"
		:refresherRefreshTime="3000"
		:paddingContent="`10px`"
	>
		<template #navBar>
			<view>JOJO佐希照明</view>
		</template>
		
		<template #topExtend>
			<view class="searchBarContainer">
				<searchBar></searchBar>
			</view>
		</template>
		
		<template #default>
			<comCard
				profile="/static/logo.png"
				comName="佐希照明"
				comAdress="广东省惠州市惠城区"
				consultPhone="13360893390"
			></comCard>
			
			<uni-swiper-dot :info="info" :current="current" field="content" mode="dot" @clickItem="clickItem" :dots-styles="dotsStyles">
				<swiper class="swiper-box" @change="change" :current="current">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view class="swiper-item">
							{{item.content}}
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</template>
		
	</bodyer>
</template>

<script lang="ts" setup>
	import useGlobal from "@/api/global"
	import bodyer from "@/components/common/bodyer.vue"
	import searchBar from "@/components/index/searchBar.vue"
	import comCard from "@/components/index/comCard.vue"
	import { ref } from "vue"
	
	const global:object|undefined = useGlobal();

	/*********************搜索事件*********************/
	function searchEvent(searchContent:string):void{
		console.log(searchContent);
	};
	
	/*********************轮播图配置*********************/
	const info = ref<{content:string}[]>([//每页内容
		{
			content: '内容 A'
		},
		{
			content: '内容 B'
		},
		{
			content: '内容 C'
		},
	]);
		
	const current = ref<number>(0);//当前页数
	function change(e):void {//换页时更新指示器样式
		current.value = e.detail.current;
	};

	function clickItem(index):void{
		current.value = index;
	};
	
	const dotsStyles = ref({//指示器样式修改
		backgroundColor: 'rgba(0, 0, 0, .3)',
		border: '1px rgba(0, 0, 0, .3) solid',
		color: '#fff',
		selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
		selectedBorder: '1px rgba(0, 0, 0, .9) solid'
	});
</script>

<style lang="scss" scoped>
	@import "@/uni.scss";
	.searchBarContainer{
		padding: 10px 10px 0px 10px;
	}
	.companyCard{
		@include fixedRetangle(100%, 100px);
		background-color: aqua;
	}
	
	.swiper-box {
		height: 200px;
	}
</style>
