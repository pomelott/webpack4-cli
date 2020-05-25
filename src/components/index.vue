<template>
  <div class="index-vue">
      <img src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg" alt="">
      <div class="test-bg-img" :style="{'background-image': 'url('+ kobe +')'}">
            test bg img
      </div>
      <img :src="svgImg" alt="">
      <img :src="bigImg" alt="">
      <img :src="smallImg" alt="">
      <img :src="jpegImg" alt="">
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
            jpegImg: require('images/example/ff/ff.jpeg'),
            kobe: require('images/example/ff/kobe.jpg'),
            exampleNode: require('images/example/node.png'),
            svgImg: require('images/webpack.svg')
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
        .test-bg-img{
            width: 400px;
            height: 200px;
            background-size: cover;
        }
    }
</style>