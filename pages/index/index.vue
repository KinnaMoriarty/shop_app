git<template>
	<view >
		<!-- 轮播图 -->
		<u-swiper :list="slides" class="u-skeleton-fillet" name="img_url" height="330"></u-swiper>
		<!-- 分类栏 -->
		<view class="u-text-center u-m-t-25">
			<u-tabs :list="sortList" bar-width="80" item-width="130" :current="currentSort" @change="changeSort"></u-tabs>
		</view>
		<!-- 卡片视图 -->
			<u-row gutter="16" class="u-skeleton">
				<u-col span="6" v-for="item in goods">
					<goods-card :item="item"></goods-card>	
				</u-col>
			</u-row>
			<!-- 加载时显示的骨架屏 -->
			<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
	</view>
</template>

<script>
	export default {
		data(){
			
			return {
			sortList:[
				{name:'默认'},
				{name:'销量'},
				{name:'推荐'},
				{name:'最新'}
			],
			currentSort:0,
			slides:[],
			goods:[{},{},{},{}],
			page:1,
			loading:false
			}
		},
		onLoad() {
			if(!this.$u.utils.isLogin()) return
		},
		onReachBottom(){
			// 重新请求数据，带分页
			this.page=this.page+1;
			this.getData()
		},
		methods: {
			changeSort(current){
				this.currentSort=current;
				this.goods=[];
				this.page=1;
				this.getData();
			},
			async getData(){
				this.loading=true;
				const params={
					page:this.page,
				}
				if(this.currentSort ==1) params.sales=1;
				if(this.currentSort ==2) params.recommend=1;
				if(this.currentSort==3)  params.new=1;
				const res=await this.$u.api.index(params);
				this.loading=false;
				this.slides=res.slides;
				const status=this.goods[0];
				console.log(status)
				this.goods=(status===undefined)?res.goods.data:[...res.goods.data,...this.goods];
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
