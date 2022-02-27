<template>
	<view>
		<!-- 表单部分 -->
			<view class="form">
				<u-form :model="form" ref="uForm">
					<!-- 昵称 -->
					<u-form-item label="昵称" prop="name" required>
						<u-input v-model="form.name" />
					</u-form-item>
				</u-form>
				<u-button @click="submit">提交</u-button>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{},
				// 验证规则
				rules:{
					name:[{
						required:true,
						message:'昵称不能为空',
						trigger:['change','blur']
					}]
				}
			}
		},
		 onReady(){
			this.$refs.uForm.setRules(this.rules);
			this.form.name= this.vuex_user.name
			
		},
		methods: {
			submit(){
				this.$refs.uForm.validate(async (valid) =>{
					if(valid){
						// 更新用户信息
						await this.$u.api.userInfoUpdate(this.form);
						
						// 刷新用户信息，更新vuex_user
						this.$u.utils.updateUser();
						this.$u.toast('更新成功！');						
						
					}
				})
			},
		}
	}
</script>

<style>
.form{
	width:90%;
	margin:50rpx auto;
}
.avatar{
	margin: 0 auto;
}
</style>
