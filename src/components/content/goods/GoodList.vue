<template>
	<div class="good-list" >
		<good-list-item v-for="item in showGoods" :goodItem="item"></good-list-item>
	</div>
</template>

<script>
	import GoodListItem from './GoodListItem.vue'
	
	export default {
		name: "GoodList",
		props: {
			showGoods: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components: {
			GoodListItem
		}
	}
</script>

<style scoped>
	.good-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
