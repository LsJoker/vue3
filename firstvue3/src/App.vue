<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <menu-com :list="list"/>
    <a-layout>
      <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
      <a-layout-content style="margin: 0 16px">
        <breadcrumb/>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vue Study ©2020 Created by
        {{ footerNameObj.footerNameObj.footerName }}
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//  <HelloWorld msg="Welcome to Your Vue.js App"/>
import { reactive, toRefs } from 'vue';
import breadcrumb from './components/breadcrumb.vue';
import menuCom from './components/menu.vue';
export default {
    name: 'App',
    components: {
        // HelloWorld
        breadcrumb,
        menuCom,
    },
    setup() {
        //3.0生命周期
        //
        const state = reactive({
            num: 1,
            footerNameObj: { footerNameObj: { footerName: 'Joker' } },
            list: [
                { key: '1', title: 'vue3.0 Study', url: '/' },
                {
                    key: '2',
                    title: '3.0 生命周期',
                    // url:"/vueLife",
                    children: [
                        {
                            key: '2.1',
                            title: 'Composition API',
                            url: '/',
                            // children: [{ key: "2.1.1", title: "", }]
                        },
                        {
                            key: '2.2',
                            title: '生命周期',
                            url: '/lifeCircle',
                            // children: [{ key: "2.1.1", title: "", }]
                        },
                    ],
                },
            ],
        });
        // setInterval(()=>{
        //   state.footerNameObj.footerNameObj.footerName++
        // },2000)
        return {
            //解构深度响应式为普通响应值，深度解构
            ...toRefs(state),
        };
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */

    pre {
        background: black;
        color: white;
        display: inline-block;
        padding-right: 50px;
        border-radius: 10px;
    }
}
</style>
