<template>
  <a class="fork" href="https://github.com/pomelott/webpack4-cli">
      <img :src="fork" alt="">
  </a>
</template>
<script>
export default {
    data () {
        return {
            fork: require('images/example/fork.svg')
        }
    }
}
</script>
<style lang='scss'>
.fork{
    position: absolute;
    width: 150px;
    height: 150px;
    top: 0;
    right: 0;
}
</style>