<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image">
				<span>{{item.title}}</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RecommendView",
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommend {
		display: flex;
		width: 100%;
		justify-content: space-between;
		text-align: center;
		
		font-size: 14px;
		
		padding: 5px;
		padding-bottom: 25px;
		
		border-bottom: 10px solid #eee;
	}
	
	.recommend-item {
		flex: 1;
	}
	
	.recommend-item img {
		width: 70px;
		height: 70px;
	}
</style>
