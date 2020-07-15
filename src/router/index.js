// 1. 导入
import Vue from "vue"
import VueRouter from "vue-router"

// 2.安装
Vue.use(VueRouter)

const Home = () => import('views/home/Home');
const Cart = () => import('views/cart/Cart');
const Category = () => import('views/category/Category');
const Profile = () => import('views/profile/Profile')

const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/profile',
		component: Profile
	}
]
// 3.使用
const router = new VueRouter({
	routes,
	mode: "history"
})

// 4.导出
export default router