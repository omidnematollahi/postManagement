import backIcon from '@/assets/images/back_icon.svg';
import cardComponent from '@/components/card.component.vue';
import { mapActions } from 'vuex';
export default {
  name: 'post-detail',
  components: { backIcon, cardComponent },
  data() {
    return {
      id: '',
      post: {},
    };
  },
  async mounted() {
    this.id = this.$route.query.id;
    this.post = await this.getPostDetail(this.id);
  },
  methods: {
    ...mapActions({
      getPostDetail: 'PostsModule/postDetail',
    }),
  },
};
