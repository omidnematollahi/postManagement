import buttonComponent from '@/components/button.component.vue';
import fieldInputComponent from '@/components/field-input.component.vue';
import textareaComponent from '@/components/textarea.component.vue';
import tagsInputComponent from '@/components/tags-input.component.vue';
import backIcon from '@/assets/images/back_icon.svg';
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
    onClickEvent() {
      console.log(this.form.tags);
    },
  },
};
