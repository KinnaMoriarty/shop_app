const install =(Vue,vm)=>{
	// 1.判断是否登录
	const isLogin=()=>{
		const token=vm.vuex_token;
		if(!token){
			// 来自哪个页面
			const currentPage=getCurrentPages().pop();
			console.log(getCurrentPages())
			// 获取页面路径和请求参数
			const {options,route}=currentPage
			const optionKeys=Object.keys(options)
			// 参数处理
			let params='';
			 if(optionKeys.length !==0){
				 params =optionKeys.reduce((pre,current)=>{
					 return `${pre}${current}=${options[current]}&`
				 },'?').slice(0,-1); 
			 }
			 
			uni.setStorageSync('back_url',route + params);
			vm.$u.toast('请登录');
			setTimeout(()=>{
				vm.$u.route({
					type:'redirect',
					url:'pages/auth/login'
				})
			},1500)
			return false
		}
		return true
	}
	
	// 2.更新用户信息
	const updateUser=async()=>{
		// 重新请求用户信息
		const userInfo=await vm.$u.api.userInfo();
		// 更新vuex_user
		vm.$u.vuex('vuex_user',userInfo);
	}
	
	
	// 🎈将工具挂载到vm实例上
	vm.$u.utils={
		isLogin,
		updateUser
	}
}

export default{
	install
}