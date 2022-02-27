<template>
	<view>
		<!-- 头像名称区域 -->
		<view class="u-flex  u-p-t-30 u-p-l-30 u-p-r-20 u-p-b-30 u-row-center header">
			<!-- 头像 -->
			<view class="avatar">
				<!-- <u-avatar :src="vuex_user.avatar_url" size="200" shape="circle" ></u-avatar> -->
				<oss-upload></oss-upload>
			</view>
			<!-- 名称 -->
			<view class="name">
				<view class="nameTitle">{{vuex_user.name}}</view>
				<view class="u-font-15 u-tips-color">{{vuex_user.email}}</view>
			</view>
		</view>
		<!-- 个人信息模块 -->
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="个人信息" @click="toBaseInfo"></u-cell-item>
			</u-cell-group>
		</view>
		<!-- 相关功能 -->
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="rmb-circle" title="订单"></u-cell-item>
				<u-cell-item icon="star" title="收藏商品" @click="toCollected"></u-cell-item>
				<u-cell-item icon="map" title="收货地址" @click="toAddress"></u-cell-item>
			</u-cell-group>
		</view>
		<!-- 退出登录 -->
		<view class="u-m-t-40">
			<u-button class="unLogin" type="error" :plain="false" shape="circle" @click="logout">退出登录</u-button>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'https://uviewui.com/common/logo.png',
				show:true
			}
		},
		onLoad() {
			if(!this.$u.utils.isLogin()) return	
		},
		methods: {
			toBaseInfo(){
				this.$u.route({
					url:"pages/center/baseinfo"
				})
			},
			async logout(){
				// 请求API,退出登录
				await this.$u.api.authLogout();
				// 清除缓存的token和用户信息
				this.$u.vuex('vuex_token',null);
				this.$u.vuex('vuex_user',{});
				this.$u.toast('退出成功');
				// 跳转到首页
				setTimeout(()=>{
					this.$u.route({
						type:'reLaunch',
						url:'pages/index/index'
					})
				},1000);
			},
			toAddress(){
				this.$u.route({
					type: 'redirect',
					url:'pages/cart/order/address/address'
				})
			},
			toCollected(){
				this.$u.route({
					type: 'redirect',
					url:'pages/center/collectedGoods'
				})
			},
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.header{
	flex-direction: column;
	height:450rpx;
	.avatar{
		width:98px;
		height:100px
	}
	.name{
		text-align: center;
		.nameTitle{
			font-size:50rpx;
			font-weight: 600;
		}
	}
}
.unLogin{
	width:80%;
}
.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>
