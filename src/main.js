import _ from 'lodash';
import $ from 'jquery';
window._ = _;
window.$ = $;
import axios from 'axios'; 
axios.defaults.baseURL = 'http://blogapi.test/api/';
window.axios = axios;
import Flash from './tools/Flash';
window.Flash = Flash;

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/*Autoload our vue components*/
require('./autoload.js');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
