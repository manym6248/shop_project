<template>
  <v-container fluid class="pa-0 menue-c" style="height: 72px">
    <div class="menue">
      <v-container class="pa-0" style="height: 100%">
        <v-row class="ma-0 pa-0" style="height: 100%">
          <v-col
            cols="12"
            md="3"
            lg="3"
            xl="3"
            sm="12"
            class="px-1 pl-4 py-0"
            style="height: 100%"
            ><div class="box-category" v-if="btntoggle">
              <v-btn
                class="my-0"
                outlined
                color="#000"
                @click="toggleN"
                height="100%"
                width="100%"
              >
                <v-icon class="ml-2">mdi-menu</v-icon>
                تمام دسته ها
              </v-btn>

              <v-col
                cols="12"
                md="12"
                class="hrd"
                style="height: 100%"
                v-if="count"
                ><div class="hon">
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
            </div>
            <div class="box-category-2" v-if="btntoggle2">
              <v-btn
                class="my-0"
                outlined
                color="#000"
                @click="toggleN"
                height="100%"
                width="100%"
              >
                <v-icon class="ml-2">mdi-menu</v-icon>
                تمام دسته ها
              </v-btn>

              <v-col
                cols="12"
                md="12"
                class="hrd"
                style="height: 100%"
                v-if="count"
              >
                <div class="hon">
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
                </div>
              </v-col>
            </div>
          </v-col>
          <v-col
            cols="0"
            lg="9"
            md="9"
            sm="0"
            class="px-1 pr-0 py-0 mainmanue12"
            style="height: 100%"
          >
            <ul class="items">
              <router-link
                v-for="item in itemsGategory"
                :key="item.id"
                :id="item.id"
                :to="item.to"
                @click.native="changetoggle()"
                tag="li"
                class="item"
                active-class="active1"
                exact=""
                ><a class="link"
                  ><span></span>
                  <v-icon :v-if="item.classicon === true" medium>{{
                    item.icon
                  }}</v-icon
                  >{{ item.text }}</a
                >
                <v-card class="mx-auto pa-5 main-items-card" v-if="item.cart">
                  <ul class="items2">
                    <div
                      class="pl-3"
                      v-for="(item2, i) in categories"
                      :key="i"
                      v-show="item2.parent_id === 0"
                    >
                      <h4 v-if="item2.parent_id === 0">{{ item2.name }}</h4>
                      <ul class="items3 mt-3">
                        <router-link
                          v-for="(item3, i) in subcategories"
                          :key="i"
                          :to="{
                            name: 'ProductPage',
                            params: { id: item3.name },
                          }"
                          tag="li"
                          class="itemm"
                          active-class="active1"
                          v-show="item2.id === item3.parent_id"
                        >
                          <v-icon
                            v-if="item2.id === item3.parent_id"
                            class="ml-0 mt-0"
                            color="red"
                            >mdi-chevron-left</v-icon
                          >
                          <a
                            v-if="item2.id === item3.parent_id"
                            class="linkk px-3 py-1 pr-0"
                          >
                            {{ item3.name }}
                          </a>
                        </router-link>
                      </ul>
                    </div>
                  </ul>
                </v-card>
              </router-link>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div></v-container
  >
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      btntoggle: true,
      btntoggle2: true,

      itemsGategory: [
        {
          to: "/",
          class1: "",
          text: "صحفه اصلی ",
          classicon: true,
          icon: "",
          id: 1,
        },
        {
          to: "/productpage",
          class1: "",
          text: "فروشگاه",
          classicon: false,
          icon: "",
          id: 2,
          cart: true,
          category: [
            {
              name: "نوشیدنی",
              subcategory: [{ name: "گرم" }, { name: "سرد" }],
            },
            { name: "شیرینی", subcategory: [{ name: "تر" }, { name: "خشک" }] },
            {
              name: "بستنی",
              subcategory: [
                { name: "بستنی میوه ای" },
                { name: "بستنی شکلاتی" },
                { name: "بستنی ویژه" },
              ],
            },
          ],
        },
        {
          to: "/blog",
          class1: "",
          text: "  وبلاگ",
          classicon: false,
          icon: "",
          id: 3,
        },
        {
          to: "/madia",
          class1: "",
          text: "رسانه",
          classicon: false,
          icon: "",
          id: 4,
        },
        {
          to: "/admin",
          class1: "",
          text: "ویژگی ها",
          classicon: false,
          icon: "",
          id: 6,
        },
        {
          to: "/user",
          class1: "",
          text: "در باره ما ",
          classicon: false,
          icon: "",
          id: 7,
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
      w: 0,
      displayN: null,
    };
  },
  watch: {
    $route() {
      if (this.$route.path === "/") {
        this.btntoggle = false;
        this.btntoggle2 = true;
      } else {
        this.btntoggle = true;
        this.btntoggle2 = false;
      }
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    ...mapMutations(["toggleN"]),

    changetoggle() {
      this.displayN = false;
    },
  },
  computed: {
    count() {
      return this.$store.state.displayN;
    },
    categories() {
      return this.$store.state.category.categories;
    },

    categories1() {
      return this.$store.getters.categories1;
    },
    subcategories() {
      return this.$store.getters.subcategories;
    },
  },

  beforeCreate() {
    this.$store.dispatch("fetchcategory");

    console.log(this.subcategory);
  },

  created() {
    if (this.$route.path === "/") {
      this.btntoggle = false;
    } else {
      this.btntoggle = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utility/utility.scss";
.menue {
  width: 100%;
  height: 100%;
  background-color: $color-menu;
  position: relative;
  .v-btn {
    letter-spacing: 0;
    justify-content: right;
    color: $color-dark;
    font-size: 1em;
    background: $color-light;
  }
  .box-category {
    height: 100%;
    align-self: center;
    padding: 12px 0px;
  }
  .box-category-2 {
    display: none;
    height: 100%;
    align-self: center;
    padding: 12px 0px;
  }

  .items {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;

    .item {
      display: inline-block;

      .link {
        padding: 20px 24px;
        color: $color-dark;
        font-size: 1em;
      }

      .main-items-card {
        right: 0;
        display: none;
        position: absolute;
        top: 40px;
        width: 100%;
        z-index: 20000;
        height: 300px;
        .items2 {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .items3 {
          display: flex;
          flex-direction: column;
          .itemm {
            display: flex;
            flex-direction: row;
            .linkk {
              color: $color-dark;
            }
          }
        }
      }

      &:hover {
        .link {
          color: brown;
        }
        .main-items-card {
          display: block;
        }
      }
    }
  }
}
.abslut {
  display: none;
  position: relative;
}
.hrd {
  position: relative;
}

.hon {
  position: absolute;
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

.mainmanue12 {
  .items {
    .item {
      transition: 0.5s;
      &.active1 {
        .link {
          border-bottom: 2px solid;
        }
      }
      &:hover {
        transition: 0.5s;
        .link {
          border-bottom: 2px solid;
        }
      }
    }
  }
}

@media #{$bp-xs} {
  .menue {
    padding: 0px 26px 0px 14px;
    .items {
      display: none;
    }
  }
  .box-category-2 {
    display: block !important;
  }
}
@media #{$bp-sm} {
  .menue {
    padding: 0px 26px 0px 14px;
    .items {
      display: none;
    }
  }
  .box-category-2 {
    display: block !important;
  }
}
</style>