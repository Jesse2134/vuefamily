import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/layout/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      icon: '',
      children: [],
    },
  ],
});
