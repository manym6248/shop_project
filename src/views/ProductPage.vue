<template>
  <v-container fluid class="pa-0">
    <div class="media-header mb-8">
      <h3>فروشگاه</h3>
      <v-breadcrumbs large :items="items" divider="/"></v-breadcrumbs>
    </div>

    <v-container class="pa-0">
      <v-row class="ma-0 pa-0">
        <v-col cols="12" md="3" class="px-0 pl-4 py-0 blue11">
          <div class="blue1">
            <v-system-bar
              max="100px"
              height="48px"
              class="banner rounded-lg pa-3"
              color="rgb(183 219 206)"
            >
              <h3>دسته محصولات</h3>
            </v-system-bar>

            <v-col cols="12" md="12" class="pa-0 pt-4" style="height: 100%"
              ><div class="hon">
                <v-card
                  height="400"
                  width="100%"
                  class="mx-0 my-0 rounded"
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
            <div class="py-3" />
            <v-system-bar
              elevation="0"
              max="100px"
              height="48px"
              class="banner rounded-lg pa-3"
              color="rgb(183 219 206)"
            >
              <h3>فیلتر بر اساس قیمت</h3>
            </v-system-bar>

            <v-card class="mx-auto mt-4 mb-0" max-width="344">
              <v-range-slider
                color="blue"
                :thumb-color="ex3.color"
                :track-color="ex2.color"
                v-model="range"
                :min="ex2.min"
                :max="ex2.max"
                thumb-label="always"
                hide-details
                class="align-center pt-12 px-4 pb-2"
              >
              </v-range-slider>
              <v-row class="ma-0 pa-4" justify="center">
                <span class="ml-1">قیمت :</span>
                <span>{{ range[0] }} تومن - {{ range[1] }} تومن</span>
              </v-row>
              <v-row class="ma-0 pa-4" justify="center">
                <v-btn medium color="blue">اعمال فیلتر</v-btn>
              </v-row>
            </v-card>
            <div class="py-3" />
            <v-system-bar
              elevation="0"
              max="100px"
              height="48px"
              class="banner rounded-lg pa-3"
              color="rgb(183 219 206)"
            >
              <h3>فیلتر بر اساس رنگ</h3>
            </v-system-bar>

            <v-card class="mx-auto mt-4 mb-0" max-width="344">
              <ul class="Size-filter-items">
                <li class="item"><a href="#" class="link">آبی (10) </a></li>
                <li class="item mt-1"><a href="#" class="link">سبز (2) </a></li>
                <li class="item1 mt-1">
                  <a href="#" class="link">نارنجی (8) </a>
                </li>
              </ul>
            </v-card>
            <div class="py-3" />
            <v-system-bar
              elevation="0"
              max="100px"
              height="48px"
              class="banner rounded-lg pa-3"
              color="rgb(183 219 206)"
            >
              <h3>فیلتر بر اساس اندازه</h3>
            </v-system-bar>

            <v-card class="mx-auto mt-4 mb-0" max-width="344">
              <ul class="Size-filter-items">
                <li class="item"><a href="#" class="link">کوچک (3) </a></li>
                <li class="item mt-1">
                  <a href="#" class="link">متوسط (3) </a>
                </li>
                <li class="item1 mt-1">
                  <a href="#" class="link">بزرگ (3) </a>
                </li>
              </ul>
            </v-card>
            <div class="py-3" />

            <v-system-bar
              elevation="0"
              max="100px"
              height="48px"
              class="banner rounded-lg pa-3"
              color="rgb(183 219 206)"
            >
              <h3>بر چسب محصولات</h3>
            </v-system-bar>
            <v-card class="mx-auto mt-4 mb-0" max-width="344">
              <div class="pa-4">
                <v-chip-group active-class="primary--text" column>
                  <v-chip v-for="tag in tags" :key="tag">
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-card>
            <div class="py-10" />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="9"
          class="px-xl-0 pr-xl-3 px-lg-0 pr-lg-3 py-0 pa-5"
        >
          <div class="red1">
            <v-system-bar
              elevation="0"
              max="100px"
              height="48px"
              class="banner rounded-lg pa-3"
              color="rgb(183 219 206)"
            >
              <h3 class="mr-3">محصولات</h3>
           
            </v-system-bar>
            <v-row class="ma-0 my-3">
              <v-col
                v-for="item in products"
                :key="item.id"
                cols="12"
                sm="6"
                md="6"
                lg="4"
                xl="4"
                class="pa-1 py-2"
              >
                <ProductCard :item="item" :img="item.images" />
              </v-col>
            </v-row>
            <div class="text-center">
              <v-pagination class="mb-10 mt-5"
                v-model="page"
                :length="4"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
              ></v-pagination>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import ProductCard from "../components/ProductCards/ProductCard";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: this.$store.state.products.products,
      page: 1,
      ex2: { min: 0, max: 90, color: "gray " },
      ex3: { color: "blue" },

      range: [70, 0],
      tags: [
        "Work",
        "Home Improvement",
        "Vacation",
        "Food",
        "Drawers",
        "Shopping",
        "Art",
        "Tech",
        "Creative Writing",
      ],

      items: [
        {
          text: "صفحه اصلی",
          disabled: false,
          to: "/",
        },
        {
          text: "فروشگاه",
          disabled: true,
        },
      ],
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

.blue1 {
  height: auto;
  width: 100%;

  .banner {
    display: flex;
    align-items: center;
    h3 {
      font-size: 1.2em;
      font-weight: 300;
      color: $color-dark;
    }
  }
  .hon {
    z-index: 600;
    height: 100%;
    width: 100%;
    top: 41px;
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
  .Size-filter-items {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0px;
    .link {
      color: $color-dark;
      display: inline-block;
      width: 100%;
    }
    .item {
      padding: 10px 16px;
      border-bottom: 1px solid $color-light2;
    }
    .item1 {
      padding: 10px 16px;
    }
  }
}
.red1 {
  height: 100%;
}



@media #{$bp-xs} {
.blue11{display: none;}
}
@media #{$bp-sm} {

 .blue11{display: none;}
}
</style>