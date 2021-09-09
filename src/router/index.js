import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "post list" */ '../views/posts/list/posts.view.vue'),
  },
  {
    path: '/detail',
    name: 'PostDetail',
    component: () => import(/* webpackChunkName: "post list" */ '../views/posts/detail/detail.view.vue'),
  },
  {
    path: '/newPost',
    name: 'newPost',
    component: () => import(/* webpackChunkName: "post list" */ '../views/posts/add/add.view.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
