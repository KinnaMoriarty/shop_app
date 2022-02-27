<template>
	<view>
		<!-- 地址区域 -->
		<view class="item" v-for="(res,index) in address" :key="res.index">
			<block v-if="address.length!=0">
				<view class="top">
					<view class="name">{{res.name}}</view>
					<view class="phone">{{res.phone}}</view>
				</view>
				<view class="bottom">
					{{res.province}}{{res.city}}{{res.county}}{{res.address}}
					<u-icon name="arrow-right" :size="20" class="u-margin-bottom-50" color="#999999" @click="toAddress"></u-icon>
				</view>
			</block>
			<block v-if="address.length==0">
				<view class="bottom">
				<text class="u-margin-left-50">请选择收货地址</text>
				<u-icon name="arrow-right" :size="20" class="u-margin-bottom-50" color="#999999" @click="toAddress"></u-icon>
				</view>
				
			</block>
		</view>
		<!-- 购物车列表区域 -->
		<block>
			<view class="u-p-b-80">
				<view class="cartsList" 
				v-for="(cart, cartsList) in cartsList" 
				:key="cart.id"
				>
				
				<view class="cartContent u-flex">
					<!-- 单件商品的视图卡片 -->
						<!-- 图片 -->
						<image class="goodsImg" :src="cart.goods.cover_url" mode=""></image>
						<!-- 详细信息 -->
						<view class="goodsInfo u-flex u-col-top u-p-10" >
							<text class="goodsTitle" @click="toGoodsInfo(cart.goods_id)">{{cart.goods.title}}</text>
							<view class="priceNum u-flex u-row-between">
								<!-- 数量 -->
								<text class="price">￥{{cart.goods.price}}</text>
								<text class="goodsNumber">x{{cart.num}}</text>
							</view>
						</view>
				</view>	
				</view>	
				<!-- 如果商品为空-->
				<view v-if="cartsList.length==0" class="u-flex-1 u-p-t-40 u-p-b-80">
					<u-empty text="暂时没有选择商品" mode="list"></u-empty>
				</view>
			</view>
		</block>
	
	<!-- 底部 -->
	<view class="footer  u-flex u-p-15">
		<!-- 价格区域 -->
		<view class="u-flex u-flex-6 u-row-right u-margin-left-50">
			<view>
			<text>合计:</text>
			<text class="totalPrice">￥{{totalPrice}}</text>
			</view>
			<u-button class="btn" type="error"  :ripple="true" shape="circle" >下单</u-button>
		</view>
	</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cartsList:[],
				address:[]
			}
		},
		onLoad() {
			if(!this.$u.utils.isLogin()) return
			this.getOrderList();
		},
		computed:{
			totalPrice(){
				return this.cartsList.filter((goods)=>{//留下选中的商品
					if(goods.is_checked){
						return true
					}
				}).reduce((prePrice,current)=>{
					return Number(prePrice)+Number(current.goods.price)*(current.num)
				},0)
			}
		},
		methods: {
			// 获取订单信息
			async getOrderList(){
				const res=await this.$u.api.getOrder();
				this.address=res.address;
				this.address=this.address.filter((address)=>{
					if(address.is_default==1){
						return true
					}
				})
				this.cartsList=res.carts;
				console.log(this.address)
			},
			// 去地址选择页面
			toAddress(){
				this.$u.route({
					type: 'redirect',
					url:'pages/cart/order/address/address'
				})
			}
		
		}
	}
</script>

<style lang="scss" scoped>
.item {
		padding: 30rpx 20rpx;
		border:0px solid #82848A;
		box-shadow: 0 3rpx 5rpx rgba(0,0,0,0.1);
		.top {
			display: flex;
			font-weight: bold;
			font-size: 34rpx;
			.phone {
				font-weight:500;
				font-size: 30rpx;
				margin-left: 10rpx;
			}
			.tag {
				display: flex;
				font-weight: normal;
				align-items: center;
				text {
					display: block;
					width: 60rpx;
					height: 34rpx;
					line-height: 34rpx;
					color: #ffffff;
					font-size: 20rpx;
					border-radius: 6rpx;
					text-align: center;
					margin-left: 30rpx;
					background-color:rgb(49, 145, 253);
				}

			}
		}
		.bottom {
			display: flex;
			margin-top: 20rpx;
			font-size: 28rpx;
			justify-content: space-between;
			color: #999999;
		}
}

.cartCard {
		background-color: rgb(250, 250, 250);
	
	}
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
.btn{
	
	margin-right: 20rpx;
}
.footer{
	position: fixed;
	left: 0;
	right: 0;
	background-color: #fff;
}
.totalPrice{
	font-size: 30rpx;
	color:#ba0000;
	font-weight: 600;
}

	/*#ifdef H5*/
		.footer {
			bottom: 0rpx;
		}

		/*#endif*/
		/*#ifdef MP-WEIXIN*/
		.footer {
			bottom: 0;
			z-index: 99999;
		}

		/*#endif*/
</style>
