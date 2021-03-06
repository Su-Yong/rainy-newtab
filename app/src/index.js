import "typeface-notosans-kor";
import "typeface-roboto";
import "typeface-titillium-web";
import "@mdi/font/css/materialdesignicons.css";

import FileSystem from "./FileSystem";

import NewTab from "../pages/NewTab.vue";
import Vue from "vue";
import VueAsyncComputed from "vue-async-computed";

Vue.use(VueAsyncComputed);

new Vue({
	el: '#app',
	render(h) {
		return h(NewTab);
	}
});
