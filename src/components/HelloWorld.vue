<template>
  <div>
    <div class="carsul-1">
      <v-container class="pa-0" style="height: 100%">
        <v-row class="ma-0 pa-0" style="height: 100%">
          <v-col cols="12" md="3" class="px-1 pl-4 py-0 delet"></v-col>
          <v-col
            cols="12"
            md="9"
            class="carousel-col px-xl-1 pr-xl-3 px-lg-1 pr-lg-3 py-0 pa-0"
            style="height: 100%"
          >
            <v-carousel
              hide-delimiters
              cycle
              height="100%"
              class="rounded xs-rrounded-0"
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <product-category-bar />
    <product-bar />
    <two-img-card />
    <big-products-card class="big" />
    <three-img-card />
    <tab-1 />
    <maglat-bar />
    <logo />
  </div>
</template>

<script>
import TwoImgCard from "./ImgCards/TwoImgCard";
import ProductBar from "./Bars/ProductBar";
import ProductCategoryBar from "./Bars/ProductCategoryBar";
import BigProductsCard from "./ProductCards/BigProductsCard.vue";
import Logo from "./Bars/logo.vue";
import MaglatBar from "./Bars/MaglatBar.vue";
import ThreeImgCard from "./ImgCards/ThreeImgCard.vue";
import Tab1 from "./Tabs/Tab1.vue";
import { mapState } from "vuex";

export default {
  components: {
    TwoImgCard,
    ProductBar,
    ProductCategoryBar,
    BigProductsCard,
    Logo,
    MaglatBar,
    ThreeImgCard,
    Tab1,
  },
  name: "HelloWorld",

  data() {
    return {
      toggle: false,

      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },

  computeds: {
    ...mapState(["gaitem"]),
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/utility/utility.scss";
.carsul-1 {
  padding-top: 30px;
  height: 430px;
  position: relative;
 
}

@media #{$bp-xs} {
  .carsul-1 {
    padding-top: 0px;
  }

  .delet {
    display: none;
  }
  .carousel-col {
    .v-carousel {
      border-radius: 0px !important ;
    }
  }
}

@media #{$bp-sm} {
  .carsul-1 {
    padding-top: 0px;
  }

  .delet {
    display: none;
  }

  .carousel-col {
    .v-carousel {
      border-radius: 0px !important ;
    }
  }
}

@media #{$bp-md} {
}
@media #{$bp-lg} {
}
@media #{$bp-xl} {
}
</style>