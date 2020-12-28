<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo"/>
    <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['2']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <template v-for="item in list" :key="item.key">
          <template v-if="!item.children">
            <router-link :to="item.url">
              <a-menu-item :key="item.key">
                <PieChartOutlined/>
                <span>{{ item.title }}</span>
              </a-menu-item>
            </router-link>
          </template>
          <template v-else>
            <menu-com-item :list-item="item"/>
          </template>
        </template>
      </a-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { reactive, toRefs } from 'vue';
import menuComItem from './menuItem.vue';
// import { useRoute, useRouter } from 'vue-router';
import { PieChartOutlined } from '@ant-design/icons-vue';
export default {
    name: 'menuCom',
    props: {
        list: {
            type: Array,
            default: () => [
                {
                    key: '1',
                    title: 'Option 1',
                },
                {
                    key: '2',
                    title: 'Navigation 2',
                    children: [
                        {
                            key: '2.1',
                            title: 'Navigation 3',
                            children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
                        },
                    ],
                },
            ],
        },
    },
    //  PieChartOutlined,
    components: { menuComItem, PieChartOutlined },
    setup() {
        //3.0生命周期
        //
        // const route = useRoute();
        // const router = useRouter();
        // console.log(route);
        // console.log(router);
        const state = reactive({
            num: 1,
            collapsed: false,
            selectedKeys: ['2'],
            // list: [

            // ],
            // route: route,
        });
        return {
            ...toRefs(state),
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
