import buttonComponent from '@/components/button.component.vue';
import fieldInputComponent from '@/components/field-input.component.vue';
import textareaComponent from '@/components/textarea.component.vue';
import tagsInputComponent from '@/components/tags-input.component.vue';
import backIcon from '@/assets/images/back_icon.svg';
import { mapActions } from 'vuex';
export default {
  name: 'add',
  components: {
    backIcon,
    buttonComponent,
    fieldInputComponent,
    textareaComponent,
    tagsInputComponent,
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
        tags: [],
      },
    };
  },
  methods: {
    ...mapActions({
      addPost: 'PostsModule/addPost',
    }),
    onClickEvent() {
      this.addPost(this.form);
    },
  },
};
