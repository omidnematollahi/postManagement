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
    async postDetail(_, id) {
      return PostsHttp.postDetail(id).then((response) => {
        response.data.publishDate = dateFormatter(response.data.publishDate);
        return response.data;
      });
    },
    async addPost(_, data) {
      return PostsHttp.addPost(data).then((response) => {
        if (response.status == 201 || response.status == 200) {
          this._vm.$toast.success('post published');
        } else this._vm.$toast.error('An error occurred! please try agian later :)');
      });
    },
  },
};
