<template>
	<view>
		<view class="item" v-for="(res, index) in siteList" :key="res.id">
			<u-swipe-action :show="siteList[index].show" :index="index" 
			@click="click"
			@open="open"
			:options="options"
			>
			<view class="top" @click="setDefault(res.id)">
				<view class="name">{{ res.name }}</view>
				<view class="phone">{{ res.phone }}</view>
				<view class="tag">
					<text v-if="res.is_default==1" class="red">默认</text>
				</view>
			</view>
			<view class="bottom">
				{{res.province}}{{res.city}}{{res.county}}{{res.address}}
			</view>
		</u-swipe-action>
		</view>
		
		<view class="addSite" @tap="toAddAddress">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			siteList: [],
			options: [
			{
			text: '默认',
			style: {
				backgroundColor: '#007aff'
				}
			},
			{
			text: '删除',
			style: {
				backgroundColor: '#dd524d'
				}
			}
			],
		};
	},
	onLoad() {
		this.getData();
	},
	methods: {
		async getData() {
			const res= await this.$u.api.getAddress();
			
			this.siteList=res.data;
			for(let i=0;i<this.siteList.length;i++){
				this.siteList[i].show=false;
			}
			console.log(this.siteList);
			
		},
		toAddAddress(){
			uni.navigateTo({
			    url: '/pages/cart/order/address/addAddress'
			});
		},
		async setDefault(id){
			const res=await this.$u.api.setDefault(id);
			console.log(id);
			this.getData();
			// setTimeout(()=>{
			// 	this.$u.route({
			// 		type: 'redirect',
			// 		url:'pages/cart/order/order'
			// 	})
			// },1500)
		},
		async deteleAddress(id){
			const res=await this.$u.api.delAddress(id);
			console.log(res);
			this.getData();
		},
		click(index, index1) {
			console.log(index,index1);
			if(index1 == 1) {
				// 删除操作
				this.deteleAddress(this.siteList[index].id);
				this.$u.toast(`删除成功`);
			} else {
				// 默认操作
				this.setDefault(this.siteList[index].id);
				this.siteList[index].show=false;
				this.$u.toast(`已将地址设置为默认地址`);
			}
		},
		open(index) {
			
			this.siteList[index].show = true;
			console.log(index)
			this.siteList.map((val, idx) => {
			if(index!= idx) this.siteList[idx].show = false;
			console.log(idx,this.siteList[idx].show)
			})
			
		  },
		}
	
}
</script>

<style lang="scss" scoped>
.item {
	padding: 40rpx 20rpx;
	box-shadow: 0 3rpx 3rpx rgba(0,0,0,0.1);
	.top {
		display: flex;
		font-weight: bold;
		font-size: 30rpx;
		.phone {
			margin-left: 60rpx;
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
					.red{
						background-color:red
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

