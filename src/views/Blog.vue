<template>
  <v-container fluid class="pa-0 ">
    <div class="media-header mb-8">
      <h3>وبلاگ</h3>
      <v-breadcrumbs large  :items="items"
      divider="/"></v-breadcrumbs>
    </div>

    <v-container class="pt-4 pb-3 px-0 mb-4">
      
    </v-container>
  </v-container>
    
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "صفحه اصلی",
          disabled: false,
          to: "/",
        },
        {
          text: "وبلاگ",
          disabled: true,
          
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utility/utility.scss";
.media-header {
  width: 100%;
  height: 122px;
  background-color: $color-gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  h3 {
    font-size: 34px;
    font-weight: 400;
    text-align: center;
    line-height: 40px;
    padding: 5px 0;
  }
}
</style>