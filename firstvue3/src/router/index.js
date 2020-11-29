import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  }
];

const router = createRouter({
  history: createWebHashHistory(),//createWebHashHistory() history路由，hash为hash路由
  routes,
});

router.beforeEach((to, from, next) => {
   if(to.path === '/') {
     console.log(to.path)
     next()
    //  next({ path: '/' })
   } else {
      next()
   }
})

export default router;