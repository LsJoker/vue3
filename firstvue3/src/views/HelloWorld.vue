<template>
  <div class="hello">
    <ol>
      <li>ref,普通响应式，对单纯的值，ref定义的变量，改变值要.value</li>
      <pre> 
        import {ref} from 'vue';
        const msg3 = ref('你好不好')
      </pre>

      <li>reactive,对于对象的响应式</li>
      <pre> 
        import { reactive, toRefs } from 'vue';
        const state = reactive({
          num: 1,
          collapsed: false,
          selectedKeys: ['1'],
        });
        ...toRefs(state)
      </pre>

      <li>toRefs,解构返回普通</li>
      <pre> 
        import { reactive, toRefs } from 'vue';
        const state = reactive({
          num: 1,
          collapsed: false,
          selectedKeys: ['1'],
        });
        ...toRefs(state)
      </pre>
    </ol>
  </div>
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
<style lang="scss" scoped>
/* @import url('common/css/reset.css');  */
</style>
