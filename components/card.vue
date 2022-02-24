<template>
	<view>
		<view class="card-box">
			<image class="card-img" src="../static/logo.png" mode=""></image>
			<view class="card-cont">
				<view class="cont-title">
					<view class="title-left">
						野狗商店
					</view>
					<view class="title-right">
						<view class="wish">
							<image src="../static/map/mark.png" mode=""></image>
							<view class="text">
								心愿单
							</view>
						</view>
						<view class="navigation">
							<image src="../static/map/mark.png" mode=""></image>
							<view class="text">
								导航
							</view>
						</view>
					</view>
				</view>
				<view class="cont-info">
					这家书店够野
					希望书店有不一样的突破
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "card",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.card-box {
		position: fixed;
		display: flex;
		justify-content: flex-start;
		bottom: 100px;
		left: 5vw;
		width: 90vw;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0px 5px 5px 0px #b2b2b2;
		z-index: 1;

		// height: 200px;
		.card-img {
			width: 100px;
			height: 100px;
		}

		.card-cont {
			display: flex;
			padding: 10px;
			flex-direction: column;
			justify-content: space-between;

			.cont-title {
				display: flex;
				width: 100%;
				justify-content: space-between;
				align-items: center;

				.title-right {
					display: flex;
					align-items: center;
					.wish,
					.navigation {
						display: flex;
						align-items: center;

						image {
							width: 20px;
							height: 20px;
						}
					}
				}
			}
		}
	}
</style>
