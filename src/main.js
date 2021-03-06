import _ from 'lodash';
import $ from 'jquery';
window._ = _;
window.$ = $;
import ENV from './env';

import axios from 'axios'; 
axios.defaults.baseURL = ENV.blogApiUrl();
window.axios = axios;

import Flash from './tools/Flash';
window.Flash = Flash;

import Vue from "vue";
window.Vue = Vue;
window.Event = new Vue();

import App from "./App.vue";
import router from "./router";
import store from "./store";
require('./vue-filters.js');

/*Autoload our vue components*/
require('./autoload.js');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
