import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

import router from './router';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
