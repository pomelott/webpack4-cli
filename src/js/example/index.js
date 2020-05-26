console.log('example/index.js111');
console.log(123);
import Vue from 'vue';
import example from 'components/example';
new Vue({
    el: "#app",
    components: {
        example
    },
    mounted () {
        console.log('app mounted 11');
    }
});