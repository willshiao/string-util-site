import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import EncodeView from '../views/EncodeView.vue';
import HomeView from '../views/Homeview.vue';

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomeView },
    { path: '/encode', component: EncodeView },
    { path: '*', redirect: '/' }
  ]
});
