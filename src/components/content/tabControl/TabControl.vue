<template>
	<div class="tab-control">
		<div class="control-item" 
			v-for="(item, index) in titles"
			:class="{active: index === currentIndex}"
			@click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabControl",
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index;
				this.$emit('tabClick', index);
			}
		}
	}
</script>

<style scoped>
	.tab-control {
		display: flex;
		justify-content: space-between;
		text-align: center;
		
		padding: 10px 0;
	}
	
	.control-item {
		flex: 1;
		
		padding-bottom: 5px;
		margin: 15px;
	}
	
	.active {
		color: hotpink;
		border-bottom: 5px solid hotpink;
	}
	
</style>
