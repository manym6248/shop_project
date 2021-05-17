<template>
  <v-container class="pa-0">
    <div class="title-pb2 pr-4">
      <v-row class="ma-0">
        <h1>برترین های امروز</h1>
      </v-row>
    </div>
    <div class="bigcard-2">
      <v-container class="pa-0" style="height: 100%">
        <v-row class="ma-0 pa-0" style="height: 100%">
          <v-col cols="12" md="4" class="pa-0 pr-1" style="height: 100%"
            ><div class="long pa-7">
              <product-card /></div
          ></v-col>

          <v-col cols="12" md="4" class="pa-0" style="height: 100%"
            ><div class="medium">
              <v-col cols="12" md="12" class="pa-0 border" style="height: 50%">
                <horizontal-product-card />
              </v-col>

              <v-col cols="12" md="12" class="pa-0 border" style="height: 50%">
                <horizontal-product-card />
              </v-col>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="pa-0 pl-1" style="height: 100%"
            ><div class="min">
              <v-col
                cols="12"
                md="12"
                class="pa-0 border"
                style="height: 33.333333%"
              >
                <horizontal-product-card />
              </v-col>

              <v-col
                cols="12"
                md="12"
                class="pa-0 border"
                style="height: 33.333333%"
              >
                <horizontal-product-card />
              </v-col>
              <v-col cols="12" md="12" class="pa-0" style="height: 33.333333%">
                <horizontal-product-card />
              </v-col></div
          ></v-col>
        </v-row>
      </v-container>
    </div>
    <v-card class="card-tab2 px-3">
      <v-tabs height="100%" class="mini-tab">
        <v-tab active-class="myColor"> برترین های امروز </v-tab>

        <v-tab-item>
          <v-row class="ma-0">
            <v-col
              cols="12"
              sm="6"
              lg="4"
              xl="4"
              md="4"
              class="ma-0 pa-0"
              v-for="n in 6"
              :key="n"
            >
              <div class="product">
                <product-card />
              </div>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import HorizontalProductCard from "./HorizontalProductCard.vue";
import ProductCard from "./ProductCard";

export default {
  components: { ProductCard, HorizontalProductCard },
};
</script>

<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";


.title-pb2 {
  padding: 30px 0px 10px 0px;
  h1 {
    font-size: 1.2em;
  }
}
.bigcard-2 {
  margin-bottom: 30px;
  height: 668px;
  width: 100%;

  .border {
    border-bottom: 1px solid #e6e6e6;
  }
  .long {
    @extend %wh;
    border: 1px solid #e6e6e6;

    .v-card {
      box-shadow: none;
      &:hover {
        box-shadow: none !important;
      }
    }
  }
  .medium {
    @extend %wh;
    border-top: 1px solid #e6e6e6;
  }
  .min {
    @extend %wh;
    border: 1px solid #e6e6e6;
  }
}

.card-tab2 {
  box-shadow: none !important;

  &:hover {
    box-shadow: none !important;
  }
  .v-tabs-bar {
    display: none;
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
  @extend %wh;
  padding: 0px 10px 30px 10px;
}

@media #{$bp-xs} {
  .bigcard-2 {
    display: none !important;
  }
  .v-toolbar__content {
    height: 56px !important;
  }
}
@media #{$bp-sm} {
  .bigcard-2 {
    display: none !important;
  }
  .v-toolbar1 {
    height: 56px !important;
  }
}
</style>