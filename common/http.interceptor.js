// /common/http.interceptor.js

// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token变量
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://api.shop.eduwork.cn',
		// dataType:'json',
		// showLoading:true,
		loadingText: '努力加载中~',
		//  loadingTime: 800,
		originalData:true,
		loadingMask:true
		// ......
	});
	
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 引用token
		// 存放在vuex的token，假设使用了uView封装的vuex方式
		config.header.Authorization="Bearer "+ vm.vuex_token;
		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		// if(config.url == '/user/login') config.header.noToken = true;
		// 最后需要将config进行return
		console.log(vm);
		console.log(config);
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}
  	
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		const {statusCode,data}=res;
		if(statusCode <400) {
			return data;
		} else if(statusCode==400){
			return false;
		}else if(statusCode == 401) {
			if(data.message=="Unauthorized"){
				vm.$u.toast('密码或账号，请重新登录');
			}else{
				vm.$u.utils.isLogin();
			}
		}else if(statusCode== 422){
			return data;
		}
		 else {
			return false;
		}
	
	}
	
	// 增加patch请求
	vm.$u.patch=(url,params={},header={})=>{
		// 模拟patch请求
		const _params ={
			...params,
			_method:'PATCH'
		}
		return vm.$u.post(url,_params,header);
	}
}


export default {
	install
}