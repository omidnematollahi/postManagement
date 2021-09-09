<template>
  <div class="search-container">
    <searchIcon />
    <input
      type="text"
      class="search-container__input"
      v-model="searchText"
      placeholder="search"
      @keyup="doSearch()"
    />
  </div>
</template>
<style lang="scss" scoped>
  .search-container {
    border: 1px solid #e7e7e7;
    border-radius: 20px;
    padding: 6px 12px;
    height: 40px;
    display: flex;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      border: 1px solid #9d9d9d;
    }
    &__input {
      border: none;
      padding: 0 5px;
      &::placeholder {
        color: #9d9d9d;
      }
    }
  }
</style>
<script>
  import searchIcon from '@/assets/images/search_icon.svg';
  export default {
    name: 'searchComponent',
    components: { searchIcon },
    data() {
      return {
        searchText: '',
      };
    },
    methods: {
      doSearch() {
        console.log(this.searchText);
        this.$emit('search', this.searchText);
      },
    },
  };
</script>
