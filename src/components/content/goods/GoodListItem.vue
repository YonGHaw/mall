<template>
	<div class="good-item">
		<img :src="goodItem.show.img">
		<div class="goods-info">					
			<p>{{goodItem.title}}</p>
			<span class="price">{{goodItem.price}}</span>
			<span class="collect">{{goodItem.collect}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "GoodListItem",
		props: {
			goodItem: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.good-item {
		padding-bottom: 40px;
		position: relative;
		width: 45%;
	}
	
	.good-item img {
		width: 100%;
		border-radius: 5px;
	}
	
	.goods-info {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}
	
	.goods-info p {
		/* 单行文本溢出显示省略号 写法 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
	}
	
	.price {
		color: hotpink;
		margin-right: 20px;
	}
	
	.goods-info .collect {
		position: relative;
	}
	
	.goods-info .collect::before {
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url("~assets/img/common/collect.jpg") 0 0/14px 14px;
	}
</style>
