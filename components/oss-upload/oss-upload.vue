<template>
<view class="avatar">
							<!-- 修改头像弹窗 -->
							<u-upload
							 ref="upload"
							:action="action"
							 :max-size="5*1024*1024"
							 :max-count="1"
							 :before-upload="beforeUpload"
							 :custom-btn="true"
							 :show-upload-list="false"
							 width="0"
							 height="0"
							 :form-data="formData"
							 @on-success="onSuccess"
							>
							<u-avatar slot="addBtn" :src="vuex_user.avatar_url" size="180" shape="circle" ></u-avatar>
							</u-upload>

						</view>
</template>

<script>
	let _this={};
	export default {
		name:"oss-upload",
		data() {
			return {
				action:'https://www.example.com/upload',
				formData:{},
				upFileName:''
			};
		},	
		created(){
			_this=this
		},
		methods:{
			// 上传前的钩子
			async beforeUpload(index,list){
				// 获取文件名
				const{file}=list[0];
				// #ifdef H5
				const fileName=file.name;
				// #endif
				// #ifndef H5
				const fileName=file.path;
				// #endif
				
				// 获取oss token
				const ossToken =await _this.$u.api.authOssToken();
				console.log(ossToken);
				// 设置上传域名
				_this.action=ossToken.host;
				//处理唯一文件名
				const suffix= fileName.slice(fileName.lastIndexOf('.'));
				const upFileName= _this.$u.guid(20) + suffix;
				_this.upFileName=upFileName;
				//额外的上传参数 
				_this.formData={
					'key':upFileName,//上传后的文件名
					'policy':ossToken.policy,
					'OSSAccessKeyId':ossToken.accessid,
					'success_action_status':'200',
					'signature':ossToken.signature
				}
				
				return true
			},
			// 上传成功
			async onSuccess(){
				// 
				this.$refs.upload.remove(0)
				// 请求API更新头像
				await this.$u.api.userAvatar({avatar:_this.upFileName})
				// 更新缓存用户信息
				this.$u.utils.updateUser();
				this.$u.toast('更新成功');
			},
		}
	}
</script>

<style>

</style>
