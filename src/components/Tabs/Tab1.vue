<template>
  <v-container class="pa-0 mt-8" style="height: 100%">
    <v-card class="card-tab">
      <v-toolbar class=".v-toolbar1 pr-3" flat color="white" dark>
        <v-toolbar-title style="color: #000">دسته های فروشگاه</v-toolbar-title>
      </v-toolbar>
      <v-tabs height="100%" class="big-tab" vertical>
        <v-tab active-class="myColor">
          <v-icon left> mdi-account </v-icon>
          سکه و پول
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-lock </v-icon>
          غذا و تخمیر
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-access-point </v-icon>
          سوزن ته گرد
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-access-point </v-icon>
          سوزن ته گرد
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-access-point </v-icon>
          سوزن ته گرد
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-access-point </v-icon>
          سوزن ته گرد
        </v-tab>

        <v-tab-item>
          <v-row class="ma-0">
            <v-col cols="12" md="4" class="ma-0 pa-0" v-for="item in products"
              :key="item.id">
              <div class="product">
                <product-card :item="item" :img="item.images" />
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class="ma-0">
            <v-col cols="12" md="4" class="ma-0 pa-0"  v-for="item in products"
              :key="item.id">
              <div class="product">
                <product-card :item="item" :img="item.images" />
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class="ma-0">
            <v-col cols="12" md="4" class="ma-0 pa-0"  v-for="item in products"
              :key="item.id">
              <div class="product">
                <product-card :item="item" :img="item.images" />
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
      <v-tabs height="100%" class="mini-tab px-3" show-arrows>
        <v-tab active-class="myColor">
          <v-icon left> mdi-account </v-icon>
          سکه و پول
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-lock </v-icon>
          غذا و تخمیر
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-access-point </v-icon>
          سوزن ته گرد
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-access-point </v-icon>
          سوزن ته گرد
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-access-point </v-icon>
          سوزن ته گرد
        </v-tab>
        <v-tab active-class="myColor">
          <v-icon left> mdi-access-point </v-icon>
          سوزن ته گرد
        </v-tab>

        <v-tab-item>
          <v-row class="ma-0">
            <v-col
              cols="12"
              sm="6"
              lg="4"
              xl="4"
              md="4"
              class="ma-0 pa-0"
              v-for="item in products"
              :key="item.id"
            >
              <div class="product">
                <product-card :item="item" :img="item.images" />
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class="ma-0">
            <v-col
              cols="6"
              sm="6"
              lg="4"
              xl="4"
              md="4"
              class="ma-0 pa-0"
              v-for="item in products"
              :key="item.id"
            >
              <div class="product">
                <product-card :item="item" :img="item.images" />
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item>
          <v-row class="ma-0">
            <v-col
              cols="6"
              sm="6"
              lg="4"
              xl="4"
              md="4"
              class="ma-0 pa-0"
              v-for="item in products"
              :key="item.id"
            >
              <div class="product">
                <product-card :item="item" :img="item.images" />
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import ProductCard from "../ProductCards/ProductCard.vue";
export default {
  components: { ProductCard },
  data(){
    return{
        products : this.$store.state.products.products,
    }
  }
};
</script>

<style lang="scss"  scope>
@import "../../assets/scss/utility/utility.scss";
.card-tab {
  box-shadow: none !important;

  &:hover {
    box-shadow: none !important;
  }
  .big-tab {
    .v-tabs-slider-wrapper {
      display: none !important ;
    }
    .v-tab {
      width: 300px;
      height: 94px !important;
      justify-content: start !important;
      letter-spacing: 0 !important;
      font-size: 1.1em !important;
      padding: 24px;
      color: #000 !important;
      border: 1px solid #e6e6e6;
      border-left: none;
      border-top: none;

      &:hover {
        background-color: rgb(201, 232, 221);
      }
      &.myColor {
        background-color: rgb(201, 232, 221);
      }
    }
    .v-tabs-items {
      border: 1px solid #e6e6e6 !important;
      padding-top: 30px;
    }
    .v-item-group {
      border-top: 1px solid #e6e6e6 !important;
    }
  }
  .mini-tab {
    .v-tabs-slider-wrapper {
      display: none !important ;
    }
    .v-tab {
      width: auto;
      height: 60px !important;
      justify-content: center !important;
      letter-spacing: 0 !important;
      font-size: 1em !important;
      padding: 12px;
      color: #000 !important;

      border-left: none;
      border-top: none;

      &:hover {
        background-color: rgb(201, 232, 221);
      }
      &.myColor {
        background-color: rgb(201, 232, 221);
      }
    }
    .v-tabs-items {
      border: 1px solid #e6e6e6 !important;
      padding-top: 30px;
    }
    .v-item-group {
      border-top: 1px solid #e6e6e6 !important;
    }
  }
}

.product {
  height: 100%;
  width: 100%;
  padding: 0px 10px 30px 10px;
}

@media #{$bp-xs} {
  .big-tab {
    display: none !important;
  }
  .v-toolbar__content {
    height: 56px !important;
  }
}
@media #{$bp-sm} {
  .big-tab {
    display: none !important;
  }
  .v-toolbar1 {
    height: 56px !important;
  }
}
@media #{$bp-md} {
  .mini-tab {
    display: none !important;
  }
}
@media #{$bp-lg} {
  .mini-tab {
    display: none !important;
  }
}
@media #{$bp-xl} {
  .mini-tab {
    display: none !important;
  }
}
</style>