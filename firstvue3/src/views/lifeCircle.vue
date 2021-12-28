<template>
  <div class="hello">
    <ul>
      <li>
        <h3>vue2.x生命周期回顾</h3>
        <ol>
          <li>
            <code>beforeCreate</code>，在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
          </li>
          <li>
            <code>created</code>，在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前尚不可用。
          </li>
          <li>
            <code>beforeMount</code>，在挂载开始之前被调用：相关的 render 函数首次被调用。
          </li>
          <li>
            <code>mounted</code>，实例被挂载后调用，这时
            <code>el</code> 被新创建的
            <code>vm.$el</code> 替换了。 如果根实例挂载到了一个文档内的元素上，当mounted被调用时
            <code :class="id">vm.$el</code> 也在文档内。
          </li>
          <li>
            <code>beforeUpdate</code>，数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
          </li>
          <li>
            <code>updated</code>，由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
          </li>
          <li>
            <code>activated</code>，被 keep-alive 缓存的组件激活时调用。
          </li>
          <li>
            <code>deactivated</code>，被 keep-alive 缓存的组件停用时调用。
          </li>
          <li>
            <code>beforeDestroy</code>，实例销毁之前调用。在这一步，实例仍然完全可用。
          </li>
          <li>
            <code>destroyed</code>，实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。
          </li>
          <li>
            <code>errorCaptured</code>，当捕获一个来自子孙组件的错误时被调用。
          </li>
        </ol>
      </li>
      <li>
        <h3>vue3.0生命周期使用</h3>
        <ol>
          <li>
            3.0与2.0生命周期对比：
            <br>beforeCreate -> setup()
            <br>created -> setup()
            <br>beforeMount -> onBeforeMount
            <br>mounted -> onMounted
            <br>beforeUpdate -> onBeforeUpdate
            <br>updated -> onUpdated
            <br>beforeDestroy -> onBeforeUnmount
            <br>destroyed -> onUnmounted
            <br>errorCaptured -> onErrorCaptured
            <br>
          </li>
          <br>执行顺序：
          <code>
            <br>1. setup
            2. beforeCreate
            <br>3. data
            <br>4. created
            <br>5. onBeforeMount
            <br>6. beforeMount
            <br>7. onRenderTracked
            <br>8. onMounted
            <br>9. mounted
            <br>10. onRenderTriggered
            <br>11. onBeforeUpdate
            <br>12. beforeUpdate
            <br>13. onRenderTracked
            <br>14. onUpdated
            <br>15. updated
            <br>16. onRenderTriggered
            <br>17. onBeforeUpdate
            <br>18.beforeUpdate
            <br>19.onRenderTracked
            <br>20.onUpdated
            <br>21.updated
            <br>
          </code>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
import {
    reactive,
    ref,
    toRefs,
    readonly,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onRenderTracked,
    onRenderTriggered,
} from 'vue';
export default {
    name: 'lifeCircle',
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
        console.log('setup');
        const id = ref(1);
        setTimeout(() => {
            id.value = 2;
        }, 2000);
        setTimeout(() => {
            a.num++;
            a.num2++;
            console.log(a.num);
            console.log(a.num2);
        }, 1000);

        //code **
        onBeforeMount(() => {
            console.log('onBeforeMount');
        });
        onMounted(() => {
            console.log('onMounted');
        });
        onBeforeUpdate(() => {
            console.log('onBeforeUpdate');
        });
        onUpdated(() => {
            console.log('onUpdated');
        });
        onBeforeUnmount(() => {
            console.log('onBeforeUnmount');
        });
        onUnmounted(() => {
            console.log('onUnmounted');
        });
        onRenderTracked(() => {
            console.log('onRenderTracked');
        });
        onRenderTriggered(() => {
            console.log('onRenderTriggered');
        });
        //code end

        return {
            id,
            ...toRefs(state),
        };
    },
    data() {
        console.log('data');
        return {
            name: 'lilei',
        };
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
        setTimeout(() => {
            this.id = 3;
        }, 4000);
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* @import url('common/css/reset.css');  */
code {
    background: #000;
    color: white;
    padding: 2px;
    border-radius: 5px;
}
</style>
