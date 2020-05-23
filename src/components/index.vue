<template>
  <div class="index-vue">
      <img :src="bigImg" alt="">
      <img :src="smallImg" alt="">
      <img :src="exampleNode" alt="">
      <div v-for="(item, index) in list" class="list-item">
          <h2>{{item.name}}</h2>
          <h4>{{item.age}}</h4>
      </div>
  </div>
</template>
<script>
export default {
    props: {
        list: Array
    },
    data () {
        return {
            bigImg: require('images/node.jpg'),
            smallImg: require('images/edit.png'),
            exampleNode: require('images/example/node.png')
        }
    }
}
</script>
<style lang='scss'>
    .index-vue{
        // background: #ff9087;
        .list-item{
            border: 1px solid #333;
            margin-bottom: 20px;
            background: blue;
        }
    }
</style>