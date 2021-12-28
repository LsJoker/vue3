<template>
  <div class="hello"></div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
    name: 'HelloWorld',
    // props: {
    //     msg: String,
    // },
    components: {},
    setup() {
        //3.0生命周期
        //
        const state = reactive({
            num: 1,
            collapsed: false,
            selectedKeys: ['1'],
        });
        return {
            ...toRefs(state),
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
