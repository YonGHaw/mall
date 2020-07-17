<template>
	<div id="home">
		<nav-bar class="nav-bar">
			<div slot="center">首页</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<recommend-view :recommends="recommends"></recommend-view>
		<feature-view></feature-view>
		<tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
		<good-list :showGoods="showGoods"></good-list>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabControl from 'components/content/tabControl/TabControl.vue'
	import GoodList from 'components/content/goods/GoodList.vue'
	
	import HomeSwiper from './childsComps/HomeSwiper.vue'
	import RecommendView from './childsComps/RecommendView.vue'
	import FeatureView from './childsComps/FeatureView.vue'
	
	import {getHomeMultidata, getHomeGoods} from "network/home.js"
	
	export default {
		name: "Home",
		components: {
			NavBar,
			TabControl,
			GoodList,
			HomeSwiper,
			RecommendView,
			FeatureView
		},
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					'pop': {page:0, list:[]},
					'new': {page:0, list: []},
					'sell': {page:0, list: []}
				},
				currentType: 'pop'
			}
		},
		created() {
			this.getHomeMultidata(),
			this.getHomeGoods('pop'),
			this.getHomeGoods('new'),
			this.getHomeGoods('sell')
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list
			}
		},
		methods: {
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list);
					this.goods[type].page += 1;
					console.log(res.data.list)
				})
			},
			
			tabClick(index) {
				switch(index) {
					case 0:
						this.currentType = 'pop';
						break;
					case 1:
						this.currentType = 'new';
						break;
					case 2:
						this.currentType = 'sell';
						break;
				}
			}
		}
	}
</script>

<style scoped>
	#home {
		height: 100vh;
		position: relative;
	}
	
	.nav-bar {
		background-color: var(--color-tint);
		color: #fff;
		font-size: 19px;
		
		position: relative;
		right: 0;
		top: 0;
		z-index: 9;
	}
</style>
