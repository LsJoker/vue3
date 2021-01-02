<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo"/>
    <a-menu theme="dark" 
    v-model:selectedKeys="selectedKeys" 
    v-model:openKeys="openKeys"
    mode="inline">
        <template v-for="item in list" >
          <template v-if="!item.children">
            <!-- <router-link :to="item.url"> -->
              <a-menu-item :key="item.key" @click="toPath(item.url)">
                <PieChartOutlined/>
                <span>{{ item.title }}</span>
              </a-menu-item>
            <!-- </router-link> -->
          </template>
          <template v-else>
            <menu-com-item :key="item.key" :list-item="item"/>
          </template>
        </template>
      </a-menu>
  </a-layout-sider>
</template>

<script>
import { reactive, toRefs,watch } from 'vue';
import menuComItem from './menuItem.vue';
import {  useRoute,useRouter } from 'vue-router';
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
    setup(props) {
        //3.0生命周期
        //
        const route = useRoute();
        const router = useRouter();
        // console.log(route);
        // console.log(router);
        const state = reactive({
            num: 1,
            // collapsed: false,
            selectedKeys: ['1'],
            openKeys: ['2'],
            // list: [

            // ],
            // route: route,
        });

        const matchUrl = function(urlList,url){
          for (let i=0;i<urlList.length;i++) {
            if (urlList[i].url && urlList[i].url === url) {
              return [urlList[i].key,urlList[i].key.split('.')[0]]
            }
            if (urlList[i].children) {
              return matchUrl(urlList[i].children,url)
            }
          }
          
        }

        watch(()=>route.path, (newValue ) => {
          let selected=[];
          selected = matchUrl(props.list,newValue);
          console.log(selected)
          state.selectedKeys = [selected[0]];
          state.openKeys = [selected[1]];
        })

        const toPath = (url)=>{
          router.push(url)
        }

        return {
            ...toRefs(state),
            toPath
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
