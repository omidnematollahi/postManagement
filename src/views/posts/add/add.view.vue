<template>
  <div class="new-post">
    <header class="new-post__header">
      <div class="new-post__title">
        <button class="back" @click="$router.push({ path: '/' })">
          <backIcon />
        </button>
        <h2>New Post</h2>
      </div>
      <div class="new-post__button">
        <button-component buttonText="publish post" :onClickEvent="onClickEvent"></button-component>
      </div>
    </header>
    <form class="new-post__form">
      <field-input-component v-model="form.title" label="Title"></field-input-component>
      <textarea-component v-model="form.description" label="Description"></textarea-component>
      <tags-input-component v-model="form.tags" label="Tags"></tags-input-component>
    </form>
  </div>
</template>

<style lang="scss" scoped src="./add.view.scss"></style>
<script src="./add.view.js"></script>
