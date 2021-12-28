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

      <li>toRefs,解构返回普通响应式</li>
      <pre> 
        import { reactive, toRefs } from 'vue';
        const state = reactive({
          num: 1,
          collapsed: false,
          selectedKeys: ['1'],
        });
        ...toRefs(state)
      </pre>
      <li>setup传参：3.0取消了this，setup加入参数prop以及context,prop主要取组件外部传参，context是执行上下文，vue2.0中的this，但由于3.0的变量都在setup中，所以执行时基本不会用到以this去取变量</li>
      <pre>         
        setup(prop,context) {
          console.log(props.listItem);
        }
      </pre>

      <li>定义method在setup的return中返回，再在模板绑定函数</li>
      <pre>         
        setup(prop,context) {
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
        }
      </pre>

      <li>readonly，普通 object 对象、reactive 对象、ref 对象 返回一个只读对象</li>
      <pre>
        import { reactive, toRefs,readonly } from 'vue';         
        setup(prop,context) {
          const state = reactive({
            num: 1,
            num2:2,
            collapsed: false,
            selectedKeys: ['1'],
          });
          const a = readonly(state);
          setTimeout(()=>{
            state.num++;
            state.num2++;
          },1000)
          readonly(a)
          console.log(a.num)
          console.log(a.num2)
          return {
              ...toRefs(state),
          };
        }
      </pre>
    </ol>
  </div>
</template>

<script>
import { reactive, toRefs, readonly } from 'vue';
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
            num2: 1,
            collapsed: false,
            selectedKeys: ['1'],
        });
        const a = readonly(state);
        setTimeout(() => {
            a.num++;
            a.num2++;
            console.log(a.num);
            console.log(a.num2);
        }, 1000);

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
