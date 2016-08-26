import Vue from 'vue';
import App from './App.vue';

import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';

import router from './router';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
