<template>
  <div>
    <div class="carsul-1">
      <v-container class="pa-0" style="height: 100%">
        <v-row class="ma-0 pa-0" style="height: 100%">
          <v-col cols="12" md="3" class="px-1 pl-4 py-0 delet">
            
              <v-col
                cols="12"
                md="12"
                class="hrd1"
               
                style="height: 100%"
                
                ><div class="hon1">
                  <v-card
                    height="400"
                    width="100%"
                    class="mx-0 mt-0 rounded"
                    elevation="2"
                  >
                    <v-navigation-drawer permanent width="100%">
                      <v-list dense nav class="pa-0 rounded-0">
                        <v-list-item
                          v-for="item in items2"
                          :key="item.text"
                          link
                          class="pa-0 px-3 ma-0 rounded-0"
                        >
                          <router-link
                            :id="item.id"
                            :to="item.to"
                            tag="li"
                            class="item"
                            active-class="active"
                            ><a class="link"
                              ><span></span>
                              <v-icon small class="ml-2"
                                >mdi-{{ item.icon }}</v-icon
                              >{{ item.text }}</a
                            >
                          </router-link>
                        </v-list-item>
                      </v-list>
                    </v-navigation-drawer>
                  </v-card>
                </div></v-col
              >
          </v-col>
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
              interval="9000"
            >
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                transition="slide-x-transition"
              >
               
       <div class="hon ">
           
               <div class="gallery-text">
                <a href="#">
                  <h1>   تخفیف های ویژه + </h1>
                  <h2 class="mr-12">به ازای هر خرید 20 درصد تخفیف</h2>
                </a>
              </div>
              <v-img height="100%" class="rounded " min-height="100%" max-height="100%" :src="item.src"></v-img>
           
            </div>
     
              
              
              
              
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- <product-category-bar /> -->
    <three-img-card />
    <product-bar />
    
    <!-- <two-img-card /> -->
    <big-products-card class="big" />
    <three-img-card />
    <tab-1 />
    <maglat-bar />
    <logo />
  </div>
</template>

<script>
// import TwoImgCard from "./ImgCards/TwoImgCard";
import ProductBar from "./Bars/ProductBar";
//import ProductCategoryBar from "./Bars/ProductCategoryBar";
import BigProductsCard from "./ProductCards/BigProductsCard.vue";
import Logo from "./Bars/logo.vue";
import MaglatBar from "./Bars/MaglatBar.vue";
import ThreeImgCard from "./ImgCards/ThreeImgCard.vue";
import Tab1 from "./Tabs/Tab1.vue";

import { mapState } from "vuex";


export default {
  components: {
    
    // TwoImgCard,
    ProductBar,
    // ProductCategoryBar,
    BigProductsCard,
    Logo,
    MaglatBar,
    ThreeImgCard,
    Tab1,
    
  },
  name: "HelloWorld",

  data() {
    return {
       items2: [
        {
          to: "/",
          class1: "",
          text: "دکور خانه  ",
          classicon: true,
          icon: "arrow-left",
        },
        {
          to: "/",
          class1: "",
          text: "  ساعت",
          classicon: false,
          icon: "arrow-left",
        },
        {
          to: "/",
          class1: "",
          text: "سکه و پول",
          classicon: false,
          icon: "arrow-left",
        },
        {
          to: "/",
          class1: "",
          text: " سوزن",
          classicon: false,
          icon: "arrow-left",
        },
        {
          to: "/",
          class1: "",
          text: " سوزن ته گرد",
          classicon: false,
          icon: "arrow-left",
        },
        {
          to: "/",
          class1: "",
          text: " غذا و تخمیر",
          classicon: false,
          icon: "arrow-left",
        },
        {
          to: "/",
          class1: "",
          text: " قیچی",
          classicon: false,
          icon: "arrow-left",
        },
        {
          to: "/",
          class1: "",
          text: " دسته ببشتر",
          classicon: false,
          icon: "arrow-left",
        },
      ],
      toggle: false,

      items: [
        {
          src: require("../assets/img/svg/img/colorful-fruit-juice-wallpaper-2560x1080_14.jpg"),
        },
        {
          src: require("../assets/img/dev/بستنی/240317.jpg"),
        },
        {
          src: require("../assets/img/dev/کیک/pexels-photo-433527.jpeg"),
        },
        {
          src:  require("../assets/img/svg/img/ca61003f3cfeb8a1b0ac742cf47f7b08.jpg"),
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

.hrd1 {
  display: block;
  position: relative;
}
.hon1 {
  position: absolute;
  z-index: 600;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0;

  .v-card {
    .v-navigation-drawer {
      background-color: $color-menu;
      list-style: none;
      .v-list-item {
        border-bottom: 1px solid $color-menu;
        font-size: 1em;
        .item {
          .link {
            color: $color-dark;
          }
        }
      }
    }
  }
  .v-list-item {
    &:before {
      border-radius: 0px !important;
    }
  }
}
.carsul-1 {
  padding-top: 30px;
  height: 430px;
  position: relative;

  
 
}
.v-carousel{
 .hon {
    height: 100%;
    width: 100%;
    position: relative;
    .gallery-text {
      left: 0;
      margin: 0 auto;
      padding: 20px;
      opacity: 1;
      position: absolute;
      right: 10%;
      text-align: right;
      top: 20%;
      transform: translate3d(0px, -38%, 0px);
      visibility: initial;

      width: 100%;
      z-index: 3;
      color: white;

      h1 {
        font-size: 2em;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 18px;
        text-transform: uppercase;
        margin-bottom: 20px;
        transform: translate(0, -10px);
        opacity: 1;
        color: white;
        
      }
      h2 {
        display: block;
        font-size: 1.4em;
        margin-bottom: 0;
        padding-bottom: 0;
        color: #a8a8a8;
        opacity: 1;
        background-color: brown;
        padding: 5px 10px;
      }
    }

    .v-image {
      filter: brightness(0.5) !important;
      filter: blur(0px);
    }

    h1 {
      animation: fade-in3 1.5s ease-out forwards;
    }
    h2 {
      animation: fade-in4 1.25s ease-out forwards;
    }
  }
    }
      @keyframes fade-in3 {
        from {
          transform: translatex(100px);
          opacity: 0;
        }
        to {
          transform: translatex(0);
          opacity: 1;
        }

}
      @keyframes fade-in4 {
        from {
          transform: translatex(-100px);
          opacity: 0;
        }
        to {
          transform: translatex(0);
          opacity: 1;
        }

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