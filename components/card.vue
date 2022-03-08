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
							<image src="../static/map/add_location_alt_black_24dp.svg" mode=""></image>
							<view class="text">
								心愿单
							</view>
						</view>
						<view class="navigation">
							<image src="../static/map/add_location_alt_black_24dp.svg" mode=""></image>
							<view class="text">
								导航
							</view>
						</view>
					</view>
				</view>
				<view class="cont-info">
					这家书店够"野"
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
		bottom: 15vh;
		width: 90vw;
		margin: auto;
		left: 5vw;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		z-index: 1;

		// height: 200px;
		.card-img {
			width: 108px;
			height: 108px;
			flex-shrink: 0;
			border-radius: 5px;
		}

		.card-cont {
			display: flex;
			padding: 12px 15px 14px 12px;
			flex-direction: column;
			justify-content: space-between;

			.cont-title {
				display: flex;
				width: 100%;
				justify-content: space-between;
				align-items: center;

				.title-left {
					font-size: 14px;
					font-weight: 600;
				}

				.title-right {
					display: flex;
					align-items: center;
					font-size: 12px;
					font-weight: 400;

					.wish,
					.navigation {
						display: flex;
						align-items: center;
						margin: 0 5px;

						image {
							width: 18px;
							height: 18px;
						}
						.text{
							margin-left: 3px;
						}
					}
				}
			}

			.cont-info {
				font-size: 14px;
				font-weight: 400;
			}
		}
	}
</style>
