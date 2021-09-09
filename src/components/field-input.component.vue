<template>
  <div class="input-group">
    <label :for="id">{{ label }}</label>
    <input type="text" :id="id" @input="$emit('input', $event.target.value)" />
  </div>
</template>
<style lang="scss" scoped>
  .input-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    input {
      width: 100%;
      height: 40px;
      margin-top: 4px;
      border: 1px solid #e7e7e7;
      border-radius: 8px;
      padding: 6px 12px;
      &:hover {
        border-color: #9d9d9d;
      }
      &:focus {
        border-color: #9d9d9d;
      }
    }
    label {
      font-weight: 500;
      font-size: 12px;
      padding: 0 12px;
    }
  }
</style>
<script>
  export default {
    name: 'field-input',
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
  };
</script>
