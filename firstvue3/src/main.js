import { createApp } from 'vue';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import './App.scss'

createApp(App).use(router).use(store).use(Antd).mount('#app');
