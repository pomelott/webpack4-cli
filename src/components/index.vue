<template>
  <div class="index-vue">
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