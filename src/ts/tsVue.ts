import Vue from 'vue';
import tsVueEntrance from 'components/tsVueEntrance.vue';
import testTs from 'ts/test.ts';
new Vue({
    el: '#app',
    mounted () {
        console.log('ts file mounted !')
        testTs('test ts module succeed!');
    }
})

new tsVueEntrance().$mount('#app');