import Vue from 'vue';
import Vuex from 'vuex';
import PostsModule from '@/modules/posts/posts.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    PostsModule,
  },
});
