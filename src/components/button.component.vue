<template>
  <button class="elevated-button">
    {{ buttonText }}
    <component v-if="icon" :is="icon" class="icon"></component>
  </button>
</template>
<style lang="scss" scoped>
  .elevated-button {
    background: #4f73d0;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    &:focus {
      background: #224dba;
    }

    .icon {
      margin-left: 10px;
    }
  }
</style>
<script>
  export default {
    name: 'button-component',
    props: {
      buttonText: {
        type: String,
        require: true,
      },
      icon: {
        type: Object,
        require: false,
      },
    },
    mounted() {
      console.log(this.icon);
    },
  };
</script>
