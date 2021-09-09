<template>
  <div class="tag">
    <span class="tag__item" v-for="(tag, index) in tagList" :key="index">{{ tag }}</span>
  </div>
</template>
<style lang="scss" scoped>
  .tag {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    gap: 4px;
    &__item {
      border: 1px solid #e7e7e7;
      color: #9d9d9d;
      border-radius: 10px;
      height: 20px;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 50px;
      padding: 10px;
    }
  }
</style>
<script>
  export default {
    name: 'tags-component',
    props: {
      tagList: {
        type: Array,
        require: true,
      },
    },
  };
</script>
