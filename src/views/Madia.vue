<template>
  <v-container fluid class="pa-0 ">
    <div class="media-header mb-8">
      <h3>رسانه</h3>
      <v-breadcrumbs large  :items="items"
      divider="/"></v-breadcrumbs>
    </div>

    <v-container class="pt-4 pb-3 px-0 mb-4">
         <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="4"
              class="pa-1"
            >
              <v-img
                src="../assets/بهداشتی/شامپو/DSC_0261-3-682x1024.jpg"
                lazy-src=""
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
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
          text: "رسانه",
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