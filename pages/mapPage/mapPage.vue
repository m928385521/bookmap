<template>

	<view>
		<uni-nav-bar :height="height" fixed="true">

			<image class="navIcon" src="../../static/map/title-icon@2x.png" mode=""></image>

			<!-- 				<view class="title">
					书店地图
				</view> -->
		</uni-nav-bar>
		<!-- <view class="navTitle">
			<view class="navCont">

				<view class="icon">
					<image src="../../static/logo.png" mode=""></image>

				</view>
				<view class="title">
					书店地图
				</view>
			</view>
		</view> -->
		<map class="map" :latitude="location.latitude" :longitude="location.longitude" show-location="true"
			:markers="mapMarkers" @markertap="markertap" scale="12"></map>


		<card @mapNavigation="mapNavigation()"></card>
	</view>
</template>

<script>
	import card from '../../components/card.vue'
	var amapFile = require('../../libs/amap-wx.130.js')
	export default {
		components: {
			card
		},
		data() {
			return {
				authorize: false,
				imgsrc: "",
				location: {
					latitude: 39.909,
					longitude: 116.39742,

				},
				mapMarkers: [{
						id: 0,
						latitude: 39.90469,
						longitude: 116.39742,
						iconPath: "/static/map/PinletMarker.png",
						width: "24px",
						height: "32px"
					},
					{
						id: 1,
						latitude: 39.90268,
						longitude: 116.39742,
						iconPath: "/static/map/PinletMarker.png",
						width: "24px",
						height: "32px"
					},
					{
						id: 2,
						latitude: 39.90067,
						longitude: 116.39742,
						iconPath: "/static/map/PinletMarker.png",
						width: "24px",
						height: "32px"
					},
					{
						id: 3,
						latitude: 39.95466,
						longitude: 116.39742,
						iconPath: "/static/map/PinletMarker.png",
						width: "24px",
						height: "32px"
					}
				],
				height: 0, // 导航栏高度
				currentPoint: 0,
			};
		},
		created() {},
		beforeMount() {
			let _this = this
			// 获取系统信息，设置自定义导航栏的高度
			uni.getSystemInfo({
				success: function(e) {
					let custom = uni.getMenuButtonBoundingClientRect();
					_this.height = custom.bottom + custom.top - (e.statusBarHeight) + 4
					console.log(123)
				}
			});
			// this.getLocation()

		},
		mounted() {
			let _this = this
			let myMapFun = new amapFile.AMapWX({
				key: '1c916177dc9705888f264163cf193c1e'
			});
			// 高德地图sdk获取地理位置，带中文位置信息
			myMapFun.getRegeo({
				success: function(data) {
					//成功回调
					console.log("高德地图成功", data)
					_this.location.latitude = data[0].latitude
					_this.location.longitude = data[0].longitude
				},
				fail: function(info) {
					//失败回调
					console.log("高德地图失败", info)
				}
			})
			this.testHttpRequest()

		},
		onShow() {
			// 自定义tabbar 设置当前tab的状态
			if (typeof this.$scope.getTabBar === 'function' &&
				this.$scope.getTabBar()) {
				this.$scope.getTabBar().setData({
					selected: 1
				})
			}

		},
		methods: {
			// 获取地理位置
			getLocation() {
				let _this = this
				if (this.authorize) {
					uni.getLocation({
						type: "gcj02",
						geocode: true,
						success(res) {
							console.log("获取的地理位置", res)
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
			// 获取用户授权
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
			// 获取用户信息
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
			},
			// 点击地图上点的点击事件
			markertap(e) {
				console.log(e.detail)
				this.mapMarkers[this.currentPoint].iconPath = "/static/map/PinletMarker.png"

				this.currentPoint = e.detail.markerId
				this.mapMarkers[this.currentPoint].iconPath = "/static/map/PinletMarkerwithDot.png"
			},
			// 测试请求数据
			testHttpRequest() {
				console.log("请求数据")
				uni.request({
					url: 'http://example.com/path/to', //仅为示例，并非真实接口地址。
					// data: {
					// 	text: 'uni.request'
					// },

					success: (res) => {
						console.log(res.data);
					},
					fail: (err) => {
						console.log("失败", err)
					}
				})
			},
			// 导航
			mapNavigation(arg) {
				let _this = this
				console.log(arg)
				uni.openLocation({
					latitude: 39.90469,
					longitude: 116.39742,
					name:"测试地址",
					success() {
						console.log("navigation success")
					},
					fail(err) {
						console.log("navigation fail",err)
					}
				})
			}
		}

	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	#button {
		width: 100px;
		height: 40px;
	}

	#image {
		width: 100px;
		height: 100px;
		border: 1px solid black;
	}


	.map {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
	}


	.navTitle {
		position: relative;
		height: 64px;
		border-top: 1px solid black;

	}

	.navIcon {
		position: absolute;
		display: flex;
		width: 80px;
		height: 33px;
		bottom: 10px;
		left: 10px;

	}
</style>
