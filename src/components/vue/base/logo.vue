<template>
  <div class="logo-img">
      <img :src="img" :class="[styleClass]" v-bind="attr" alt="">
  </div>
</template>
<script>
export default {
    props: {
        img: {
            type: String,
            require: true
        },
        animate: {
            type: String,
            default: 'fadeInUp'
        },
        attr: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            styleClass: ''
        }
    },
    async mounted () {
        await this.$nextTick();
        this.styleClass = `animate__animated animate__${this.animate}`
    }
}
</script>
<style lang='scss'>

</style>