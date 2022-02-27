// 如果没有通过拦截器配置域名的话，可以在这里写上完整的URL(加上域名部分)
let indexUrl = '/api/index';



// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	vm.$u.api={};
	// 首页
	vm.$u.api.index = (params = {}) => vm.$u.get(indexUrl, params);
	// 认证相关
	vm.$u.api.authLogin=params=>vm.$u.post('/api/auth/login',params);// 登录
	vm.$u.api.authRegister=params=>vm.$u.post('/api/auth/register',params);// 注册
	vm.$u.api.authLogout=()=>vm.$u.post('/api/auth/logout');// 退出登录
	vm.$u.api.authOssToken=()=>vm.$u.get('/api/auth/oss/token');// 获取OOStoken
	// 用户相关
	vm.$u.api.userInfo=()=>vm.$u.get('/api/user');//用户详情
	vm.$u.api.userInfoUpdate=params=>vm.$u.put('/api/user', params);//修改用户信息
	vm.$u.api.userAvatar=params=>vm.$u.post('/api/user/avatar', params);//上传头像
	vm.$u.api.getCollects=()=>vm.$u.get('/api/collects');//获取收藏商品
	// 商品相关
	vm.$u.api.goodsInfo =id=>vm.$u.get(`/api/goods/${id}`);//商品详情
	vm.$u.api.goodsCollect =id=>vm.$u.post(`/api/collects/goods/${id}`);//收藏商品
	vm.$u.api.goodsList =(params={})=>vm.$u.get(`/api/goods`,params);//收藏商品
	
	// 购物车相关
	vm.$u.api.cartAdd =params=>vm.$u.post(`/api/carts`,params);//加入购物车
	vm.$u.api.cartList =params=>vm.$u.get(`/api/carts`);//获取购物车数量
	vm.$u.api.getCartList =params=>vm.$u.get(`/api/carts?include=goods`);//获取购物车
	vm.$u.api.delCartList=params=>vm.$u.delete(`/api/carts/${params}`);//从购物车中删除商品
	vm.$u.api.changeNum=(cart,num)=>vm.$u.put(`/api/carts/${cart}`,{num});//更改商品数量
	vm.$u.api.changeIsChecked=cart_ids => vm.$u.patch(`/api/carts/checked`,{cart_ids});//从购物车中删除商品
	
	// 订单
	vm.$u.api.getOrder =()=>vm.$u.get(`/api/orders/preview`);//获取订单预览
	vm.$u.api.getAddress =()=>vm.$u.get(`/api/address`);//获取所有地址
	vm.$u.api.addAddress =params=>vm.$u.post(`/api/address`,params);//添加地址
	vm.$u.api.setDefault =address=>vm.$u.patch(`/api/address/${address}/default`);//设置默认地址
	vm.$u.api.delAddress=address=>vm.$u.delete(`/api/address/${address}`);//删除地址
	
}
export default {
	install
}
