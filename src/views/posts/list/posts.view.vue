<template>
  <div class="post-list">
    <div class="post-list__header">
      <search-component @search="search"></search-component>
      <button-component
        :icon="addIcon"
        buttonText="Add new post"
        :onClickEvent="onClickEvent"
      ></button-component>
    </div>
    <div class="post-list__content">
      <card-component
        v-for="(post, index) in posts"
        :key="index"
        :cardInformation="post"
        @click.native="goToDetail(post.id)"
      ></card-component>
    </div>
  </div>
</template>

<style lang="scss" src="./posts.view.scss" scoped></style>
<script src="./posts.view.js"></script>
