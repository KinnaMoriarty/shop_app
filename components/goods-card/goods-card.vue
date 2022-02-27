<template>
	<navigator class="goods-item" :url="'/pages/goods/showInfo?id='+item.id">
			<u-image class="u-skeleton-fillet" width="100%" height="300rpx" :src="item.cover_url"></u-image>
			<view class="goods-title u-line-1 u-skeleton-rect">{{item.title?item.title:'商品名称'}}</view>
			<view class="u-flex u-row-between">
				<view class="goods-price u-skeleton-rect">￥{{item.price}}</view>
				<view class="goods-sale u-skeleton-rect">销量:{{item.sales}}</view>
			</view>
	</navigator>
						
</template>

<script>
	export default {
		name:"goods-card",
		props:{
			item:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.goods-item{
		padding:30rpx;
		margin-top:30rpx;
		box-shadow: 0 12rpx 20rpx rgba(0,0,0,0.1);
		.goods-title{
			margin:20rpx 0 5rpx 0;
			font-weight: 600;
			font-size: 32rpx;
			width:100%;
		}
		.goods-price{
			color:red;
			width:30%
		}
		.goods-sale{
			color: #888;
			width:30%
		}
	}
</style>
