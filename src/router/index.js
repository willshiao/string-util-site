import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import {EncodeView, HomeView, HashView} from '../views';
// import  from '../views/Homeview.vue';

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomeView },
    { path: '/encode', component: EncodeView },
    { path: '/hash', component: HashView },
    { path: '*', redirect: '/' }
  ]
});
