import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import EncodeView from '../views/EncodeView.vue';


export default new Router({
  mode: 'history',
  routes: [
    { path: '/encode', component: EncodeView },
    { path: '*', redirect: '/encode' }
  ]
});
