<template>

	<view>
		<view class="statusBar">

		</view>
		<view class="navTitle">
			<view class="navCont">

				<view class="icon">
					<image src="../../static/logo.png" mode=""></image>

				</view>
				<view class="title">
					书店地图
				</view>
			</view>
		</view>
		<map style="width: 100%;height: 100vh;" :latitude="location.latitude" :longitude="location.longitude"
			show-location="true" :markers="mapMarkers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				authorize: false,
				imgsrc: "",
				location: {
					latitude: 39.909,
					longitude: 116.39742,

				},
				mapMarkers: [{
						id: 1,
						latitude: 39.90469,
						longitude: 116.39742,
						iconPath: "/static/logo.png"
					},
					{
						id: 2,
						latitude: 39.90268,
						longitude: 116.39742,
						iconPath: "/static/logo.png"
					},
					{
						id: 3,
						latitude: 39.90067,
						longitude: 116.39742,
						iconPath: "/static/logo.png"
					},
					{
						id: 4,
						latitude: 39.95466,
						longitude: 116.39742,
						iconPath: "/static/logo.png"
					}
				]
			};
		},
		created() {
			// if(!this.authorize){
			// 	let _this = this
			// 	_this.getAuthorize()
			// }
		},
		mounted() {},
		onShow() {
			if (typeof this.$scope.getTabBar === 'function' &&
				this.$scope.getTabBar()) {
				this.$scope.getTabBar().setData({
					selected: 1
				})
			}
		},
		methods: {
			getLocation() {
				let _this = this
				if (this.authorize) {
					uni.getLocation({
						type: "gcj02",
						success(res) {
							console.log(res)
							_this.location.latitude = res.latitude
							_this.location.longitude = res.longitude
						},
						fail() {
							console.log("获取地理位置失败")
						}
					})
				} else {
					this.getAuthorize()
				}

			},
			getAuthorize() {
				let _this = this
				uni.authorize({
					scope: 'scope.userLocation',
					success() {
						console.log("授权成功")
						_this.authorize = true
						_this.getLocation()
					},
					fail(err) {
						console.log("授权失败", err)
						_this.authorize = false
					}
				})
			},
			getUserInfo() {
				let _this = this
				uni.getUserProfile({
					desc: "需要你的信息",
					lang: "zh-CN",
					success(res) {
						console.log("获取用户信息成功", res)
						_this.imgsrc = res.userInfo.avatarUrl
					},
					fail(err) {
						console.log("获取用户信息失败", err)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	#button {
		width: 100px;
		height: 40px;
	}

	#image {
		width: 100px;
		height: 100px;
		border: 1px solid black;
	}

	.statusBar {
		height: var(--status-bar-height);
	}

	.navTitle {
		position: relative;
		height: 35px;

		.navCont {
			position: absolute;
			display: flex;
			justify-content: center;
			bottom: 0;
			left: 10px;

			.icon {
				width: 24px;
				height: 24px;
				image{
					width: 100%;
					height: 100%;
				}
			}

			.title {}

		}
	}
</style>
