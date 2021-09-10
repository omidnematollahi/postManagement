<template>
  <div class="tags-input-component">
    <label :for="id">{{ label }}</label>
    <input
      type="text"
      :id="id"
      v-model="tagValue"
      @input="tagValueChanged"
      @keyup="addTagByEnter"
      ref="tagInput"
    />
    <span class="tags-input-component__button" ref="button" @click="addTag">
      Add <addIcon class="add-icon" />
    </span>
    <div class="tagsList">
      <div class="tagItem" v-for="(tag, index) in tagList" :key="tag"
        ><removeIcon @click="removeTag(index)" />{{ tag }}</div
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .tags-input-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    input {
      width: 100%;
      height: 40px;
      margin-top: 4px;
      border: 1px solid #e7e7e7;
      border-radius: 8px;
      padding: 6px 12px;
    }
    label {
      font-weight: 500;
      font-size: 12px;
      padding: 0 12px;
    }
    .tagsList {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      margin-top: 15px;
      gap: 10px;

      .tagItem {
        border: 1px solid #e7e7e7;
        border-radius: 24px;
        padding: 10px;
        display: flex;
        align-items: center;
        transition: all 0.3s;
        &:hover {
          border-color: #9d9d9d;
        }
        svg {
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
    &__button {
      position: absolute;
      top: 31px;
      right: 10px;
      color: #e7e7e7;
      cursor: pointer;
      &.focused {
        color: #4f73d0;
        font-weight: bold;
        svg {
          fill: #4f73d0 !important;
          path {
            fill: #4f73d0 !important;
          }
        }
      }
    }
  }
</style>
<script>
  import addIcon from '@/assets/images/plus_icon.svg';
  import removeIcon from '@/assets/images/remove_icon.svg';
  export default {
    name: 'tagsInputComponent',
    components: { addIcon, removeIcon },
    props: {
      label: {
        type: String,
        require: true,
      },
      id: {
        type: String,
        require: true,
      },
    },
    data() {
      return {
        tagValue: '',
        tagList: [],
      };
    },
    methods: {
      addTag() {
        this.tagList.push(this.tagValue);
        this.tagValue = '';
        this.$refs.button.classList.remove('focused');
        this.$refs.tagInput.focus();
        this.$emit('input', this.tagList);
      },
      addTagByEnter(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
          this.addTag();
        }
      },
      removeTag(index) {
        this.tagList.splice(index, 1);
      },
      tagValueChanged() {
        if (this.tagValue) {
          this.$refs.button.classList.add('focused');
        } else this.$refs.button.classList.remove('focused');
      },
    },
  };
</script>
