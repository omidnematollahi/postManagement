import { mapActions, mapState } from 'vuex';
import cardComponent from '@/components/card.component.vue';
import searchComponent from '@/components/search.component.vue';
import buttonComponent from '@/components/button.component.vue';
import addIcon from '@/assets/images/add_icon.svg';

export default {
  name: 'posts',
  components: { cardComponent, searchComponent, buttonComponent, addIcon },
  computed: {
    ...mapState({
      allPosts: (state) => state.PostsModule.allPosts,
    }),
  },
  data() {
    return {
      posts: [],
      limit: 10,
      lastIndex: 0,
      addIcon: addIcon,
    };
  },
  mounted() {
    this.getNextPosts();
  },

  methods: {
    ...mapActions({
      getPosts: 'PostsModule/getPosts',
    }),
    async getNextPosts() {
      if (!this.posts.length) {
        const data = {
          _expand: 'user',
        };
        this.posts = await this.getPosts(data);
        this.posts = this.posts.slice(0, this.limit);
      }
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.posts.push(...this.allPosts.slice(this.lastIndex, this.lastIndex + this.limit));
          this.lastIndex += this.limit - 1;
          console.log(this.lastIndex);
        }
      };
    },
    async search(searchText) {
      this.posts = await this.getPosts({
        _expand: 'user',
        q: searchText,
      });
      this.posts = this.posts.slice(0, this.limit);
    },
    onClickEvent() {
      this.$router.push({ path: '/newPost' });
    },
  },
};
