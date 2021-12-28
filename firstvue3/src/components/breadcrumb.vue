<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item v-for="(item,index) of route.matched" :key="index" style="padding:5px">
      <router-link :to="item.path" style="font-size:18px">{{item.meta.title}}</router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
    name: 'breadcrumb',
    // props: {
    //     msg: String,
    // },
    components: {},
    setup() {
        //3.0生命周期
        //
        const route = useRoute();
        const router = useRouter();
        console.log(route);
        console.log(router);
        const state = reactive({
            num: 1,
            collapsed: false,
            selectedKeys: ['1'],
            route: route,
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
