<template>
  <div class="detail-post">
    <header class="detail-post__header">
      <div class="detail-post__title">
        <button class="back" @click="$router.push({ path: '/' })">
          <backIcon />
        </button>
        <h2>Post Detail</h2>
      </div>
    </header>
    <card-component :cardInformation="post" style="margin-top: 15px"></card-component>
  </div>
</template>

<style lang="scss" scoped src="./detail.view.scss"></style>
<script src="./detail.view.js"></script>
