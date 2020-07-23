<template>
  <div class="vue-demo tc" :style="{'background-image': 'url(' + img.bg + ')'}">
    <logo class="vue-img tc" :img="img.vue" animate="bounce"></logo>
    <div class="mt10">
      <img src="https://img.shields.io/badge/webpack-4.0.0+-green" alt="webpack-version">
      <img src="https://img.shields.io/badge/vue-2.0.0+-green" alt="vue-version">
    </div>
    <p class="des tc mt30">
      you can use this webpack-cli in SPA and Multi Page Application, <br>
      so the whole tools of vue-chain such as vue/vuex/vue-router can use here.
    </p>
    <div class="vue-link mt40">
        <a href="https://github.com/pomelott/webpack4-cli">CLI-Document</a>
        <a href="https://cn.vuejs.org/v2/guide//">Vue-Document</a>
        <a href="https://vuex.vuejs.org/zh/">Vuex-Document</a>
        <a href="https://router.vuejs.org/zh/">Vue-Router-Document</a>
        <a href="https://github.com/pomelott">Contact</a>
    </div>
    <fork></fork>
  </div>
</template>
<script>
import logo from './base/logo';
import fork from './base/fork';
export default {
    name: 'example',
    components: {
      logo,
      fork
    },
    data () {
      return {
        img: {
          vue: require('images/example/vue.png'),
          bg: require('images/example/bg.jpg')
        }
      }
    }
}
</script>
<style lang='scss'>
.vue-demo{
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  .vue-img img{
    display: inline-block;
    margin-top: 100px;
    width: 250px;
  }
  .des{
    font-size: 24px;
    color: #666;
  }
  .vue-link a {
    display: inline-block;
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>