<template>
  <a-sub-menu :key="listItem.key" v-bind="$attrs">
    <template #title>
      <span>
        <MailOutlined/>
        <span>{{ listItem.title }}</span>
      </span>
    </template>
    <template v-for="item in listItem.children" :key="item.key">
      <template v-if="!item.children">
        <router-link :to="item.url">
        <a-menu-item :key="item.key">
          <PieChartOutlined/>
          <span @click="propLit">{{ item.title }}</span>
        </a-menu-item>
        </router-link>
      </template>
      <template v-else>
        <menu-com-item :list-item="item" :key="item.key"/>
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import { reactive, toRefs } from 'vue';
// import { useRoute, useRouter } from 'vue-router';
import {
    // MenuFoldOutlined,
    // MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    // DesktopOutlined,
    // InboxOutlined,
    // AppstoreOutlined,
} from '@ant-design/icons-vue';
export default {
    name: 'menuComItem',
    props: {
        listItem: { type: Array, default: () => [] },
    },
    components: { PieChartOutlined,MailOutlined },
    setup(props) {
        //3.0生命周期
        //
        // const route = useRoute();
        // const router = useRouter();
        // console.log(route);
        console.log(props.listItem);
        const state = reactive({
            num: 1,
            collapsed: false,
            selectedKeys: ['1'],
            list: [
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
            // route: route,
        });
        setInterval(()=>{
          state.num++;
        },1000)
        const propLit = ()=>{
          console.log(state.num)
        }
        return {
            ...toRefs(state),
            propLit
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
