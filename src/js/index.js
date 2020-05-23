
import "../less/test.less"
import indexVue from 'components/index.vue'; 
import $ from 'jquery';
import Vue from 'vue';
let app = new Vue({
	el: "#app",
	data: {
		
			list: [
				{
					name: 'tate',
					age: 18
				},
				{
					name: 'xyra',
					age: 19
				},
				{
					name: 'poemlott',
					age: 133
				},
				{
					name: 'kobe',
					age: 1312
				}
			]
		
	},
	components: {
		indexVue
	}
})
import {a, b, Person} from "./test.js"
console.log('index.js')
console.log(a);
console.log(b);
console.log('wocaonide')
$("div").eq(0).css({
	width:"800px",
	height: "800px",
	background: "#ccc"
});
document.querySelector("div").innerHTML = "after bundle123456";