import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from '../views/HelloWorld.vue';
import lifeCircle from '../views/lifeCircle.vue';
const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld,
		meta: {
			title: '3.0生命周期',
		},
	},
	{
		path: '/lifeCircle',
		name: 'lifeCircle',
		component: lifeCircle,
		meta: {
			title: '3.0生命周期',
		},
	},
];

const router = createRouter({
	history: createWebHashHistory(), //createWebHashHistory() history路由，hash为hash路由
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	if (to.path === '/') {
		console.log(to.path);
		next();
		//  next({ path: '/' })
	} else {
		next();
	}
});

export default router;
