<template>
  <div class="ts-vue-demo tc">
      <logo :img="img.ts"></logo>
      <div class="ts-vue-title mt20">
          Vue With Typescript
      </div>
      <div class="ts-vue-subtitle">
          you can use ts in .vue and .ts files.
      </div>
      <div class="ts-vue-link mt40">
        <span class="show-pop" @click="showPop">Show Pop</span>
        <a href="https://github.com/pomelott/webpack4-cli">CLI-Document</a>
        <a href="https://www.tslang.cn/">Ts-Document</a>
        <a href="https://github.com/pomelott">Contact</a>
    </div>
    <fork></fork>
    <pop ref='pop' topic="vue-class-component Pop"></pop>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
// should specify the .vue suffix in ts runtime
import logo from 'components/vue/base/logo.vue';
import fork from 'components/vue/base/fork.vue';
import pop from './base/pop.vue';

export default Vue.extend({
    data () {
        return {
            img: {
                ts: require('images/example/ts.png')
            }
        }
    },
    components: {
        logo,
        fork,
        pop
    },

    methods: {
        showPop () {
            (this as any).$refs.pop.pop();
            console.log((this as any).$refs)
        }
    },
    mounted () {
        console.log('ts vue entrance mounted !')
    },
})
</script>
<style lang='scss'>
.ts-vue-demo{
    padding-top: 100px;
    .ts-vue-title{
        font-size: 30px;
    }
    .ts-vue-subtitle{
        font-size: 18px;
        color: #999;
    }
    .ts-vue-link a{
        display: inline-block;
        margin-left: 15px;
        margin-right: 15px;
    }
    .show-pop{
        text-decoration: underline;
        color:#16418a;
        cursor: pointer;
    }
}
</style>