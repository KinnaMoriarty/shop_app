const install =(Vue,vm)=>{
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
	
	// 将工具挂载到vm实例上
	vm.$u.utils={
		isLogin
	}
}

export default{
	install
}