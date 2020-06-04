<template>
  <div class="pop-bg flex v-center h-center" :style="{display: showFlag}" >
    <div class="pop-inter flex v-center h-center" :class="showPopClass">
        <div class="pop-cnt">
            <div class="topic">{{topic}}</div>
            <div class="sub-title mt20 mb50" v-html="finalTitle"></div>
            <button @click="closePop">close</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Component from 'vue-class-component'
import {Component, Prop} from 'vue-property-decorator';

@Component({})
export default class Pop extends Vue {

    @Prop({
        type: String,
        required: true
    }) topic!: String

    // initial data
    title = 'this vue file was <br> written with vue-class-component';
    showPopClass: String = '';
    showFlag: string = 'none';

    // lifecycle hook
    mounted () {
        console.log('vue-class-component mounted !')
    }

    // computed
    get finalTitle () {
        return this.title + ' and TS.'
    }

    // method
    public async pop():Promise<void> {
        this.showFlag = 'flex';
        await this.$nextTick();
        this.showPopClass = 'animate__animated animate__bounceInUp'
    }

    closePop () {
        this.showFlag = 'none';
    }
}
</script>
<style lang="scss">
div.pop-bg{
    background: rgba(0,0,0, .7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: none;
    .pop-inter{
        width: 400px;
        height: 400px;
        background: #fff;
        border-radius: 10px;
        .pop-cnt{
            background: #fff;
            button{
                padding: 10px 28px;
            }
        }
        .topic{
            font-size: 26px;
        }
        .sub-title{
            font-size: 14px;
            color: #999;
        }
    }
}
</style>