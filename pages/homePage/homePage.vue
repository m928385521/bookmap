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
			<view class="punch " :class="{'onselect':currentTab==1}" @click="changeTab(1)">
				<image src="../../static/my/collections_bookmark_black_24dp.png" mode=""></image>
				<view class="punch-text">
					已打卡
				</view>
			</view>
			<view class="wish" :class="{'onselect':currentTab==2}" @click="changeTab(2)">
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
					<view class="punch-time">
						2022年2月20日
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 1, // 当前tab数，1：已打卡，2：心愿单

			};
		},
		onShow() {
			// 自定义tabbar设置当前的tab页码
			if (typeof this.$scope.getTabBar === 'function' &&
				this.$scope.getTabBar()) {
				this.$scope.getTabBar().setData({
					selected: 2
				})
			}
		},
		methods: {
			// 切换心愿单和已打卡
			changeTab(tab) {
				this.currentTab = tab
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
			padding: 6px 13px 11px 13px;

			border-radius: 3px;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			border-radius: 5px;
			background: #fff;

			.profile-picture {
				width: 45px;
				height: 45px;
				margin-left: 8px;
				border-radius: 50%;
			}

			.nick-name {
				font-size: 14px;
			}

			.location {
				font-size: 10px;
				color: rgb(142, 142, 147);
			}
		}

		.info-right {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			width: 59vw;
			padding: 9px 9px 12px 16px;
			margin-left: 3vw;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
					font-size: 48px;
					font-weight: 600;
					line-height: 48px;
				}

				.book-number {
					color: rgb(255, 221, 0);
				}

				.city-text,
				.book-text {
					margin: 0 6px;
					font-size: 10px;
					font-weight: 600;
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
		margin-top: 12px;
		align-items: center;

		image {
			width: 18px;
			height: 18px;

		}

		.punch,
		.wish {
			display: flex;
			padding: 4px 6px;

			align-items: center;
		}

		.punch-text,
		.wish-text {
			margin-left: 2px;
			font-size: 12px;
			font-weight: 600;
		}

		.wish {
			margin-left: 7px;
		}

		.onselect {
			background-color: rgb(255, 221, 0);
			border-radius: 12px;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		}

	}

	.book-list {
		width: 90vw;
		margin: auto;
		margin-top: 12px;

		.book-item {
			display: flex;
			// align-items: flex-start;
			border-radius: 5px;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			background-color: #fff;
			// justify-content: space-between;

			image {
				flex-shrink: 0;
				width: 61px;
				height: 61px;
			}

			.book-info {
				position: relative;
				padding: 9px 0 8px 23px;
				width: 100%;
				// margin-left: 40px;
				display: flex;
				flex-direction: column;

				.book-title {
					margin-bottom: 5px;
					font-size: 14px;
					font-weight: 500;
				}

				.book-location {
					font-size: 12px;
					font-weight: 400;
				}

				.punch-time {
					position: absolute;
					top: 11px;
					right: 14px;
					font-size: 12px;
					color: #8e8e93;
					align-self: flex-start;
				}
			}

		}
	}
</style>
