<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item>
        <!-- <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span><user-outlined /><span>User</span></span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span><team-outlined /><span>Team</span></span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vue Study ©2020 Created by {{footerNameObj.footerNameObj.footerName}}
      </a-layout-footer>
    </a-layout>
  </a-layout>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//  <HelloWorld msg="Welcome to Your Vue.js App"/>
import { reactive,toRefs } from 'vue';
import {PieChartOutlined,
  } from '@ant-design/icons-vue';
export default {
  name: 'App',
  components: {
    // HelloWorld
    PieChartOutlined,
  },
  setup() {
        //3.0生命周期
        //
        const state = reactive({
            num: 1,
            collapsed:false,
            footerNameObj:{footerNameObj:{footerName:"Joker"}},
            selectedKeys: ['1'],
        });
        // setInterval(()=>{
        //   state.footerNameObj.footerNameObj.footerName++
        // },2000)
        return {
          //解构深度响应式为普通响应值，深度解构
          ...toRefs(state)
        }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
