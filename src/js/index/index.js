
import "sass/index.scss";
import Vue from 'vue';
import logo from 'components/base/logo';
new Vue({
    el: "#app",
    components: {
        logo
    },
	data: {
		img: {
            webpack: require('images/webpack.svg')
        },
        animateClass: ''
    },
    async mounted () {
        await this.$nextTick();
        
        this.animateClass = 'animate__animated animate__fadeInUp';
    }
});