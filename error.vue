<template>
  <div class="error-page">
    <img
      class="img-fluid"
      src="https://www.gigabyte.com/Images/Error_search.png"
      alt="error image"
    />
    <p class="error-text">
      The page you are looking for is no longer available or has been removed.
    </p>
    <div class="search-product">
      <input
        type="search"
        id="keyword"
        placeholder="產品名稱(示意用)"
        autocomplete="off"
        class="search-input"
        @input="searchProduct($event)"
      />
      <img
        class="search-icon"
        src="https://www.gigabyte.com/Images/search-128.png"
        alt="search"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const searchProduct = async function (event: Event) {
  const keyword = (event.target as HTMLInputElement).value;
  if (keyword) {
    const { data } = await useFetch("/api/getProductName", {
      method: "GET",
      query: {
        term: keyword,
      },
      server: false,
    });
  }
};
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  max-width: 600px;
  margin: 0 auto;

  .error-text {
    color: #888;
    max-width: 500px;
    margin-top: 50px;

    a {
      color: #1e5bf6;
      text-decoration: none;
    }
  }

  .search-product {
    margin-top: 35px;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .search-input {
      border: 1px solid #b3b3b3;
      border-radius: 3px;
      height: 30px;
      padding: 5px 5px 5px 5px;
      outline: 0;
      width: 70%;
    }

    .search-icon {
      vertical-align: middle;
      height: 30px;
      width: 30px;
      display: inline-block;
      border: 1px solid #b3b3b3;
      cursor: pointer;
      border-radius: 5px;
      margin: 0 13px;
    }
  }
}
</style>
