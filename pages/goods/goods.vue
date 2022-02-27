<template>
	<view class="u-wrap">
		<!-- 搜索框 -->
		<view class="u-search-box">
				<u-search placeholder="请输入商品名称" v-model="keyword" @custom="searchGoods" @clear="clearSearch"></u-search>
		</view>
		<!-- 筛选栏 -->
		<view class="u-text-center u-m-t-25">
			<u-tabs :list="sortList" bar-width="80" item-width="130" :current="currentSort" @change="changeSort"></u-tabs>
		</view>
		<view class="u-menu-wrap">
			<!-- 左侧菜单 -->
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop">
				<block v-for="(item,index) in categories" :key="index">
					<view v-for="(child,c) in item.children" :key="c" class="u-tab-item" :class="[current== child.id ? 'u-tab-item-active' : '']"
					 :data-current="child.id" @tap.stop="swichMenu(child.id)">
						<text class="u-line-1">{{child.name}}</text>
					</view>
				</block>
				
			</scroll-view>
			
			<!-- 商品展示区域 -->
			<block >
				<scroll-view scroll-y class="right-box" @scrolltolower="scrollEvent">
					<view class="page-view">
						<view class="class-item">
							<view class="item-container">
								<navigator class="thumb-box" 
								v-for="(goods, goodsIndex) in goodsList" 
								:key="goods.id"
								:url="'/pages/goods/showInfo?id='+ goods.id">
									<image class="item-menu-image" :src="goods.cover_url" mode=""></image>
									<view class="item-menu-name">{{goods.title}}</view>
								</navigator>
								<!-- 如果商品为空-->
								<view v-if="goodsList.length==0" class="u-flex-1 u-p-t-40 u-p-b-80">
									<u-empty text="暂无相关商品" mode="list"></u-empty>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</block>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				categories:[],
				goodsList:[],
				page:1,
				keyword:'',
				scrollTop: 0, //tab标题的滚动条位置
				current: null, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				keyword:'',
				isLastPage:false,
				currentSort:0,
				sortList:[
					{name:'销量'},
					{name:'推荐'},
					{name:'价格'},
					{name:'评论'}
				],
			}
		},
		computed: {
			
		},
		onLoad(){
			
			this.getData()
		},
		methods: {
			async getData(){
				const params={
					page:this.page,
					title:this.keyword
				}
				// 判断是否有分类id
				if(this.current) params.category_id=this.current;
				// 判断是否有排序
				if(this.currentSort){
					if(this.currentSort ==0) params.sales=1;
					if(this.currentSort ==1) params.recommend=1;
					if(this.currentSort ==2) params.price=1;
					if(this.currentSort==3)  params.comments_count=1;
				}
				const res=await this.$u.api.goodsList(params);
				this.categories=res.categories;
				this.goodsList=[...this.goodsList,...res.goods.data];
				this.isLastPage=res.goods.next_page_url?false:true;
				console.log(this.goodsList)
			},
			getImg() {
				return Math.floor(Math.random() * 35);
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				if(index == this.current) return ;
				this.current = index;
				console.log(index);
				this.page=1;
				this.goodsList=[];
				this.getData()
				// ui效果
				// 如果为0，意味着尚未初始化
				if(this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({size: true},res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if(!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return ;
						}
						this[dataVal] = res.height;
					}).exec();
				})
			},
			// 搜索商品
			searchGoods(){
				this.page=1;
				this.goodsList=[];
				this.getData();
			
			},
			// 清除搜索商品
			clearSearch(){
				this.page=1;
				this.keyword=''
				this.getData();
				
			},
			// 加载更多商品
			scrollEvent(){
				if(this.isLastPage) return
				this.page=this.page+1;
				this.getData();
			},
			// 变换排序
			changeSort(current){
				console.log(current)
				this.currentSort=current;
				this.goodsList=[];
				this.page=1;
				this.getData();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		background: #f6f6f6;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}
	
	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #fff;
	}
	
	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}

	.u-tab-view {
		height: 100%;
	}
	
	.right-box {
		background-color: rgb(250, 250, 250);
	}
	
	.page-view {
		padding: 16rpx;
	}
	
	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}
	
	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}
	
	.item-menu-name {
		font-weight: normal;
		font-size: 24rpx;
		color: $u-main-color;
	}
	
	.item-container {
		display: flex;
		flex-wrap: wrap;
	}
	
	.thumb-box {
		width: 45%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 20rpx 10rpx 30rpx 10rpx;
	}
	
	.item-menu-image {
	
		width: 170rpx;
		height: 170rpx;
	}
</style>
