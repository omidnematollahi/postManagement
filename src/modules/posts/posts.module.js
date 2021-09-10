import dateFormatter from '../../utils/date-formatter';
import * as PostsHttp from './posts.http';

const DEFAULT_STATE = {
  allPosts: null,
};

export default {
  namespaced: true,

  // States
  state: JSON.parse(JSON.stringify(DEFAULT_STATE)),

  // Mutation
  mutations: {
    setState(state, payload) {
      const { name, value, key } = payload;
      if (key) {
        state[name][key] = value;
      } else {
        state[name] = value;
      }
    },

    // eslint-disable-next-line no-unused-vars
    resetState(state) {
      state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    },
  },

  // Actions
  actions: {
    async getPosts({ commit }, data) {
      return PostsHttp.getPosts(data).then((response) => {
        response.data.map((post) => {
          post.publishDate = dateFormatter(post.publishDate);
          return post;
        });
        commit('setState', {
          name: 'allPosts',
          value: response.data,
        });
        return response.data;
      });
    },
    async addPost(_, data) {
      return PostsHttp.addPost(data).then((response) => {
        console.log(response);
      });
    },
  },
};
