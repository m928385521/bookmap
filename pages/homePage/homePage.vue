<template>
	<view>
		<view class="user-info">
			<view class="info-left">
				<image class="profile-picture" src="../../static/logo.png" mode=""></image>
				<view class="nick-name">
					Raicy
				</view>
				<view class="location">
					杭州，浙江，中国
				</view>
			</view>
			<view class="info-right">
				<view class="text-info">
					使用书店地图，我已经去过
				</view>
				<view class="info-down">

					<view class="city-number">
						9
					</view>
					<view class="city-text">
						个城市
					</view>
					<view class="book-number">
						12
					</view>
					<view class="book-text">
						家书店
					</view>
					<image class="setting" src="../../static/my/settings_black_24dp.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="tab-bar">
			<view class="punch onselect">
				<image src="../../static/my/collections_bookmark_black_24dp.png" mode=""></image>
				<view class="punch-text">
					已打卡
				</view>
			</view>
			<view class="wish">
				<image src="../../static/map/add_location_alt_black_24dp.png" mode=""></image>
				<view class="wish-text">
					心愿单
				</view>
			</view>
		</view>
		<view class="book-list">
			<view class="book-item">
				<image src="../../static/logo.png" mode=""></image>
				<view class="book-info">
					<view class="book-title">
						野狗书店
					</view>
					<view class="book-location">
						杭州，浙江
					</view>
				</view>
				<view class="punch-time">
					2022年2月20日
				</view>
			</view>
		</view>
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
	page {
		background: rgb(243, 243, 243);
	}

	.user-info {
		display: flex;
		width: 90vw;
		margin: auto;
		margin-top: 2vw;

		.info-left {
			width: 28vw;
			padding: 2vw 3vw;

			border-radius: 3px;
			box-shadow: 0px 5px 5px 0px #b2b2b2;
			border-radius: 5px;
			background: #fff;

			.profile-picture {
				width: 40px;
				height: 40px;
				margin-left: 2vw;
				border-radius: 50%;
			}

			.location {
				font-size: 10px;
			}
		}

		.info-right {
			position: relative;
			width: 59vw;
			padding: 2vw 3vw;
			margin-left: 3vw;
			box-shadow: 0px 5px 5px 0px #b2b2b2;
			border-radius: 5px;
			background: #fff;

			.text-info {
				font-size: 10px;
			}

			.info-down {
				display: flex;
				align-items: baseline;
				margin-top: 10px;

				.city-number,
				.book-number {
					display: inline-block;
					font-size: 42px;
					font-weight: bold;
				}

				.book-number {
					color: rgb(255, 221, 0);
				}

				.city-text,
				.book-text {
					margin: 0 6px;
					font-size: 10px;
				}

				.setting {
					position: absolute;
					top: 10px;
					right: 10px;
					width: 18px;
					height: 18px;
				}
			}
		}

	}

	.tab-bar {
		display: flex;
		width: 90vw;
		margin: auto;
		margin-top: 2vw;
		align-items: center;

		image {
			width: 18px;
			height: 18px;

		}

		.punch,
		.wish {
			display: flex;
			padding: 3px 6px;

			align-items: center;
		}

		.punch-text,
		.wish-text {
			margin-left: 2px;
			font-size: 12px;
		}

		.wish {
			margin-left: 15px;
		}

		.onselect {
			background-color: rgb(255, 221, 0);
			border-radius: 12px;
			box-shadow: 0px 5px 5px 0px #b2b2b2;

		}

	}

	.book-list {
		width: 90vw;
		margin: auto;
		margin-top: 2vw;

		.book-item {
			display: flex;
			padding: 2vw 3vw;
			align-items: flex-start;
			border-radius: 5px;
			box-shadow: 0px 5px 5px 0px #b2b2b2;
			background-color: #fff;
			justify-content: space-between;

			image {
				width: 35px;
				height: 35px;
			}

			.book-info {
				width: 30vw;
				// margin-left: 40px;
				display: flex;
				flex-direction: column;

				.book-title {
					margin-bottom: 5px;
					font-size: 12px;
					font-weight: bold;
				}

				.book-location {
					font-size: 10px;
				}
			}

			.punch-time {
				font-size: 10px;
				align-self: flex-start;
			}
		}
	}
</style>
