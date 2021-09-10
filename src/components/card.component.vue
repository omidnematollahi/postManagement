<template>
  <div class="card">
    <div class="card__content">
      <img class="card__image" v-lazy="cardInformation.image" />
      <h2 class="card__title">Title</h2>
      <p class="card__text">{{ cardInformation.text }}</p>
      <tags-component :tag-list="cardInformation.tags"></tags-component>
    </div>
    <div class="card__footer">
      <div class="card__user">
        <img class="card__avatar" :src="cardInformation.user.avatar" :alt="cardInformation.user.avatar" />
        <div class="card__user-info">
          <h6>{{ cardInformation.user.firstName }} {{ cardInformation.user.lastName }}</h6>
          <span>{{ cardInformation.publishDate }}</span>
        </div>
      </div>
      <div class="card__likes">
        <span class="card__likes-count">{{ cardInformation.likes }}</span>
        <heatIcon />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .card {
    $self: &;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #e7e7e7;
    border-radius: 4px;
    padding: 12px;

    &__content {
      #{ $self }__image {
        width: 100%;
      }
      #{ $self }__title {
        margin-top: 10px;
      }
      #{ $self }__text {
        color: #9d9d9d;
        font-size: 14px;
        margin-top: 10px;
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      #{ $self }__user {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        #{ $self }__avatar {
          border-radius: 50%;
          width: 28px;
          height: 28px;
          margin-right: 10px;
        }
        &-info {
          display: flex;
          flex-direction: column;

          > h6 {
            font-size: 11px;
            font-weight: 700;
          }
          > span {
            font-size: 10px;
          }
        }
      }
      #{ $self }__likes {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        &-count {
          font-size: 11px;
          margin-right: 6px;
        }
      }
    }
  }
</style>
<script>
  import heatIcon from '@/assets/images/heart_icon.svg';
  import tagsComponent from '@/components/tags.component.vue';

  export default {
    name: 'cardComponent',
    components: { heatIcon, tagsComponent },
    props: {
      cardInformation: {
        type: Object,
        require: true,
      },
    },
  };
</script>
