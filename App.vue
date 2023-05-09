<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.hideTabBar();//隐藏tabbar，用于自定义tabbar
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni.scss";
	.body{
		@include fullInParent;
		padding: 10px;
		height: 100vh;
	}
</style>
