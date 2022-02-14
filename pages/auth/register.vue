<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">注册账号</view>
			<!-- 昵称 -->
			<u-field v-model="name" label="昵称" required></u-field>
			<!-- 邮箱 -->
			<u-field v-model="email" label="邮箱" required ></u-field>
			<!-- 密码 -->	
			<u-field v-model="password" label="密码"   required></u-field>
			<!-- 确认密码 -->
			<u-field v-model="password_confirmation" label="确认密码" required :error-message="isSame" @blur="checkIsSame" @focus="isSame=false" ></u-field>
			<!-- 注册按钮 -->
			<button @click="submit" :style="[inputStyle]" class="getCaptcha">登录</button>
			<view class="alternative">
				<view class="issue" @click="returnLogin">返回登陆</view>
			</view>
		</view>
		
		
		
		
		<!-- 注册按钮 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'啊啊啊',
				email:'12asffdf@a.com',
				password:"123123",
				password_confirmation:"123123",
				isSame:false,
			}
		},
		computed:{
			inputStyle() {
				let style = {};
				if(this.$u.test.email(this.email) && this.password&&this.password==this.password_confirmation&&this.name) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['primary'];
				}
				return style;
			}
		},
		watch:{
			
		},
		methods: {
			// 1.注册
			async submit(){
				// 1.表单验证
				if(!this.$u.test.email(this.email) && this.password&&this.password==this.password_confirmation&&this.name) return;
				// 2.准备提交参数
				const params={
					name:this.name,
					email:this.email,
					password:this.password,
					password_confirmation:this.password_confirmation
				}
				// 3.请求API，执行注册
				const res=await this.$u.api.authRegister(params);
				console.log(res);
				const errors=res.errors;
				if(errors){
					this.$u.toast(errors.email[0]);
					this.name='',
					this.email='',
					this.password='',
					this.password_confirmation=''
					return
				}
				// 4.注册成功之后，重定向到登录（redirect）
				this.$u.toast('注册成功!');
				setTimeout(()=>{
					this.$u.route({
							type:'redirect',
							url:'pages/auth/login'
						})
				},1000)
				this.name='',
				this.email='',
				this.password='',
				this.password_confirmation=''
			},
		
			// 2.返回登陆界面
			returnLogin(){
				this.$u.route({
						type:'reLaunch',
						url:'pages/auth/login'
					})
			},
			
			// 3.检查两次输入密码是否一致
			checkIsSame(){
				if (this.password !== this.password_confirmation){
					this.isSame='与输入的密码不一样'
				}else{
					this.isSame=false
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
.u-border-bottom{
	margin-bottom: 40rpx !important;
}
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $u-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(236, 245, 255);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
			
			.link {
				color: $u-type-warning;
			}
		}
	}
}
</style>
