
import "sass/index.scss";
import Vue from 'vue';
import logo from 'components/base/logo';
import fork from 'components/base/fork';
new Vue({
    el: "#app",
    components: {
        logo,
        fork
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