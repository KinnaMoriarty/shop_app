<template>
	<view class="wrap">
		<view class="top">
			<view class="item">
				<view class="left">收货人</view>
				<input type="text" placeholder-class="line" placeholder="请填写收货人姓名" v-model="name"/>
			</view>
			<view class="item">
				<view class="left">手机号码</view>
				<input type="text" placeholder-class="line" placeholder="请填写收货人手机号" v-model="phone"/>
			</view>
			<view class="item" @tap="showRegionPicker">
				<view class="left">所在地区</view>
				<input disabled type="text" placeholder-class="line" placeholder="省市区县、乡镇等" v-model="wholeAddress"/>
			</view>
			<view class="item address">
				<view class="left">详细地址</view>
				<textarea type="text" placeholder-class="line" placeholder="街道、楼牌等" v-model="address" />
			</view>
		</view>
		<view class="bottom">
			<view class="default">
				<view class="left">
					<view class="set">设置默认地址</view>
					<view class="tips">提醒：每次下单会默认推荐该地址</view>
				</view>
				<view class="right"><switch color="red" @change="setDefault" /></view>
			</view>
		</view>
		<u-picker mode="region" ref="uPicker" v-model="show" @confirm="setAddress" />
		<view class="addSite" @tap="addNewAddress">
			<view class="add">
				<u-icon name="checkmark-circle" color="#ffffff" class="icon" :size="30"></u-icon>保存收货地址
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name:'',
			address:'',
			phone:'',
			province:'',
			city:'',
			county:'',
			is_default:0,
			show: false
		};
	},
	computed:{
		wholeAddress(){
			return this.province?this.province+''+this.city+''+this.county:''
		}
	},
	methods: {
		setDefault(val) {
			this.is_default=val.detail.value?1:0;
			
			
		},
		setAddress(val){
			this.province=val.province.label;
			this.city=val.city.label;
			this.county=val.area.label;
			
		},
		showRegionPicker() {
			this.show = true;
		},
		async addNewAddress(){
			const params={
				name:this.name,
				address:this.address,
				phone:this.phone,
				province:this.province,
				city:this.city,
				county:this.county,
				is_default:this.is_default
			}
			console.log(params)
			const res=await this.$u.api.addAddress(params);
			console.log(res);
			this.$u.toast("添加成功");
			setTimeout(()=>{
				this.$u.route({
					type: 'redirect',
					url:'pages/cart/order/address/address'
				})
			},1500)
		},
	}
};
</script>

<style lang="scss" scoped>
/deep/ .line {
	color: $u-light-color;
	font-size: 28rpx;
}
.wrap {
	background-color: #f2f2f2;
	.top {
		background-color: #ffffff;
		border-top: solid 2rpx $u-border-color;
		padding: 22rpx;
		.item {
			display: flex;
			font-size: 32rpx;
			line-height: 100rpx;
			align-items: center;
			border-bottom: solid 2rpx $u-border-color;
			.left {
				width: 180rpx;
			}
			input {
				text-align: left;
			}
		}
		
		.address {
			padding: 20rpx 0;
			textarea {
				// width: 100%;
				height: 150rpx;
				background-color: #f7f7f7;
				line-height: 60rpx;
				margin: 40rpx auto;
				padding: 20rpx;
			}
		}
		.site-clipboard {
			padding-right: 40rpx;
			textarea {
				// width: 100%;
				height: 150rpx;
				background-color: #f7f7f7;
				line-height: 60rpx;
				margin: 40rpx auto;
				padding: 20rpx;
			}
			.clipboard {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 26rpx;
				color: $u-tips-color;
				height: 80rpx;
				.icon {
					margin-top: 6rpx;
					margin-left: 10rpx;
				}
			}
		}
	}
	.bottom {
		margin-top: 20rpx;
		padding: 40rpx;
		padding-right: 0;
		background-color: #ffffff;
		font-size: 28rpx;
		.tag {
			display: flex;
			.left {
				width: 160rpx;
			}
			.right {
				display: flex;
				flex-wrap: wrap;
				.tags {
					width: 140rpx;
					padding: 16rpx 8rpx;
					border: solid 2rpx $u-border-color;
					text-align: center;
					border-radius: 50rpx;
					margin: 0 10rpx 20rpx;
					display: flex;
					font-size: 28rpx;
					align-items: center;
					justify-content: center;
					color: $u-content-color;
					line-height: 1;
				}
				.plus {
					//padding: 10rpx 0;
				}
			}
		}
		.default {
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: solid 2rpx $u-border-color;
			line-height: 64rpx;
			.tips {
				font-size: 24rpx;
			}
			.right {
			}
		}
	}
}
.addSite {
	display: flex;
	justify-content: space-around;
	width: 600rpx;
	line-height: 100rpx;
	position: absolute;
	bottom: 30rpx;
	left: 80rpx;
	background-color: red;
	border-radius: 60rpx;
	font-size: 30rpx;
	.add{
		display: flex;
		align-items: center;
		color: #ffffff;
		.icon{
			margin-right: 10rpx;
		}
	}
}
</style>
