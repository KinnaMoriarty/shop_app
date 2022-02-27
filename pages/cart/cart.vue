<template>
	<view>
		<!-- 购物车列表区域 -->
		<block>
			<view class="u-p-b-80">
				<view class="cartsList" 
				v-for="(cart, cartsList) in cartsList" 
				:key="cart.id"
				>
				
				<view class="cartContent u-flex">
					<!-- 复选框 -->
						<view class="isCheck">
						<u-checkbox v-model="cart.is_checked?true:false" 
						:name="cart.id" @change="isCheck"
						size="40" shape="circle"></u-checkbox>
						</view>
					<!-- 单件商品的视图卡片 -->
						<!-- 图片 -->
						<image class="goodsImg" :src="cart.goods.cover_url" @click="toGoodsInfo(cart.goods_id)" mode=""></image>
						<!-- 详细信息 -->
						<view class="goodsInfo u-flex u-col-top u-p-10" >
							<text class="goodsTitle" @click="toGoodsInfo(cart.goods_id)">{{cart.goods.title}}</text>
							<text class="description" @click="toGoodsInfo(cart.goods_id)" >{{cart.goods.description}}</text>
							<text class="stock"  >库存：{{cart.goods.stock}}</text>
							<view class="priceNum u-flex u-row-between">
								<!-- 数量 -->
								<text class="price">￥{{cart.goods.price}}</text>
								<u-number-box v-model="cart.num" 
								:min="1" :max="cart.goods.stock" 
								:index="cart.id"
								@change="changeNum(cart.id,cart.num)"></u-number-box>
								<!-- 删除键 -->
								<u-icon  name="trash" color="#ba0000" size="36" @click="deleteGoods(cart.id)"></u-icon>
							</view>
						</view>
				</view>	
				</view>	
				<!-- 如果商品为空-->
				<view v-if="cartsList.length==0" class="u-flex-1 u-p-t-40 u-p-b-80">
					<u-empty text="购物车为空" mode="list"></u-empty>
				</view>
			</view>
		</block>
	
	<!-- 底部 -->
	<view class="footer  u-flex u-p-15">
		<!-- 全选框 -->
		<view class="u-flex-6">
			<u-checkbox v-model="isAllChecked" size="40" shape="circle">全选</u-checkbox>
		</view>
		<!-- 价格区域 -->
		<view class="u-flex u-flex-6 u-row-right">
			<view>
			<text>合计:</text>
			<text class="totalPrice">￥{{totalPrice}}</text>
			</view>
			<u-button type="error"  :ripple="true" shape="circle" class="u-margin-left-20" @click="toOrder" >去结算</u-button>
		</view>
	</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cartsList:[],
			}
		},
		onLoad() {
			if(!this.$u.utils.isLogin()) return
			this.getCartList();
		},
		computed:{
			isAllChecked:{
				get(){
					return this.cartsList.every((goods)=>{
						return goods.is_checked
					})
				},
				set(newValue){
					this.changAllIschecked(newValue);
				}
			},
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
			// 获取购物车列表
			async getCartList(){
				const res=await this.$u.api.getCartList();
				this.cartsList=res.data;
			},
			// 跳转到商品详情页面
			toGoodsInfo(id){
				this.$u.route({
					type: 'redirect',
					url:`pages/goods/showInfo?id=${id}`
				})
			},
			// 删除商品
			async deleteGoods(id){
				await this.$u.api.delCartList(id);
				this.$u.toast("移出购物车成功")
				this.getCartList();
			},
			// 改变商品数量
			async changeNum(cart,num){
				let Number=String(num);
				const res=await this.$u.api.changeNum(cart,Number);
				this.getCartList();
			},
			// 更改是否选择（单个）
			async isCheck(e){
				let checkedList=[];
				const{value,name}=e;//此时的value是修改了的值
				this.cartsList.forEach((goods)=>{
					if (goods.is_checked){
						checkedList.push(goods.id)
					}
				})
				if(!value){//当前是选择，要变成不选择
				checkedList.splice(checkedList.indexOf(name),1);//将当前选择的id从选择数组中切割
				}else{//从未选择变成选择
					checkedList.push(name);
				}
				await this.$u.api.changeIsChecked(checkedList);
				this.getCartList();
			},
			// 变成全选or全不选
			async changAllIschecked(value){
				let checkedList=[];
				if(value){//全选的情况
					this.cartsList.forEach((goods)=>{
						checkedList.push(goods.id);
					})
				}
				console.log(checkedList);
				await this.$u.api.changeIsChecked(checkedList);
				this.getCartList();
			},
			// 去结算页面
			toOrder(){
				this.$u.route({
					type: 'redirect',
					url:'pages/cart/order/order'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.cartCard {
		background-color: rgb(250, 250, 250);
	
	}
.cartContent{
	background-color: rgb(250, 250, 250);
	display: flex;
	justify-content:center;
	border-radius: 4%;
	box-shadow: 0 12rpx 20rpx rgba(0,0,0,0.1);
	width: 85%;
	height:230rpx;
	margin:20rpx auto;
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
		.description{
				font-size: 22rpx;
				color:#606266;
				font-weight: 500;
		}
		.stock{
			margin-right: 20rpx;
			font-size: 22rpx;
			color:#606266;
			font-weight: 500;
		}
		.priceNum{
			margin-top:35rpx;
			.price{
				margin-right: 20rpx;
				font-size: 30rpx;
				color:#ba0000;
				font-weight: 600;
				
			}
		}
	}
	
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
			bottom: 95rpx;
		}

		/*#endif*/
		/*#ifdef MP-WEIXIN*/
		.footer {
			bottom: 0;
			z-index: 99999;
		}

		/*#endif*/
</style>
