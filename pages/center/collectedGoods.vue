<template>
	<view>
		<!-- 购物车列表区域 -->
		<block>
			<view class="u-p-b-80">
				<view class="cartsList" 
				v-for="(goods, index) in collectedList" 
				:key="goods.id"
				>
				
				<view class="cartContent u-flex">
					<!-- 单件商品的视图卡片 -->
						<!-- 图片 -->
						<image class="goodsImg" :src="goods.goods.cover_url" @click="toGoodsInfo(goods.goods_id)" mode=""></image>
						<!-- 详细信息 -->
						<view class="goodsInfo u-flex u-col-top u-p-10" >
							<text class="goodsTitle" @click="toGoodsInfo(goods.goods_id)">{{goods.goods.title}}</text>
							<view class="priceNum u-flex u-row-between">
								<!-- 数量 -->
								<text class="price">￥{{goods.goods.price}}</text>
								<text class="goodsNumber">{{goods.goods.description}}</text>
							</view>
						</view>
				</view>	
				</view>	
				<!-- 如果商品为空-->
				<view v-if="collectedList.length==0" class="u-flex-1 u-p-t-40 u-p-b-80">
					<u-empty text="暂时没有收藏商品" mode="list"></u-empty>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				collectedList:[],
			}
		},
		onLoad() {
			if(!this.$u.utils.isLogin()) return	
			this.getGoodsList()
		},
		methods: {
			async getGoodsList(){
				const res=await this.$u.api.getCollects();
				this.collectedList=res.data;
			},
			// 跳转到商品详情页面
			toGoodsInfo(id){
				this.$u.route({
					type: 'redirect',
					url:`pages/goods/showInfo?id=${id}`
				})
			},
		}
	}
</script>

<style lang="scss">
.cartContent{
	background-color: rgb(250, 250, 250);
	display: flex;
	justify-content:center;
	border-radius: 4%;
	box-shadow: 0 2rpx 10rpx rgba(0,0,0,0.1);
	width: 90%;
	height:200rpx;
	margin:10rpx auto;
	.isCheck{
		margin-left: 20rpx;
	}
	.goodsImg{
		width: 50%;
		height: 90%;
	}
	.goodsInfo{
		width: 100%;
		height: 200rpx;
		flex-direction: column;
		justify-content: flex-start;
		margin-left: 20rpx;
	    .goodsTitle{
			margin-top: 10rpx;
				font-size: 27rpx;
				font-weight: 600;
		}
		.goodsNumber{
				font-size: 22rpx;
				color:#606266;
				font-weight: 500;
		}
		.priceNum{
			margin-top:50rpx;
			.price{
				margin-right: 20rpx;
				font-size: 30rpx;
				color:#ba0000;
				font-weight: 600;
				
			}
		}
	}
	
}
</style>
