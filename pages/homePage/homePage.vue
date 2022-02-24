<template>
	<view>
		这是首页
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		onShow() {
			if (typeof this.$scope.getTabBar === 'function' &&
				this.$scope.getTabBar()) {
				this.$scope.getTabBar().setData({
					selected: 2
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
