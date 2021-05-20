<template>
  <v-app>
    <v-navigation-drawer disable-resize-watcher v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list dense rounded>
        <v-list-item v-for="item in itemsGategory" :key="item.text" link>
          <router-link
            :key="item.id"
            :id="item.id"
            :to="item.to"
            tag="li"
            class="item"
            active-class="active"
            ><a class="link"
              ><span></span>
              <v-icon :v-if="item.classicon === true" medium>{{
                item.icon
              }}</v-icon
              >{{ item.text }}</a
            >
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      flat
      class="pa-0"
      color="white"
      dark
      max-height="173px"
      height="173px"
    >
      <v-container fluid class="h-continer pa-0">
        <div class="header">
          <v-row class="ma-0 pa-0" style="height: 100%">
            <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0">
              <div class="heder-menu">
                <v-container class="pa-0" style="height: 100%">
                  <v-row class="ma-0 pa-0">
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                      lg="6"
                      xl="6"
                      class="py-2 px-0"
                    >
                      <ul class="items">
                        <v-app-bar-nav-icon
                          @click="drawer = !drawer"
                        ></v-app-bar-nav-icon>
                        <v-spacer class="space"></v-spacer>
                        <li class="item">
                          <a href="" class="link">
                            <v-icon> mdi-map-marker-outline </v-icon>پرداخت</a
                          >
                        </li>
                        <v-divider
                          style="border-color: rgb(80 74 74 / 59%)"
                          vertical
                        ></v-divider>

                        <li class="item">
                          <a href="" class="link">
                            <v-icon> mdi-credit-card-multiple-outline </v-icon
                            >حساب من
                          </a>
                        </li>

                        <v-divider
                          style="border-color: rgb(80 74 74 / 59%)"
                          vertical
                        ></v-divider>

                        <li class="item">
                          <a href="" class="link">
                            <v-icon> mdi-heart-outline </v-icon>علاقه مندی
                          </a>
                        </li>
                        <v-divider
                          style="border-color: rgb(80 74 74 / 59%)"
                          vertical
                        ></v-divider>

                        <router-link to="/login" class="item">
                          <a href="" class="link">
                            <v-icon> mdi-login-variant </v-icon>ورود کاربر</a
                          >
                        </router-link>
                      </ul>
                    </v-col>
                    <v-col cols="6" class="py-2 pl-0 h-n">
                      <div class="number">
                        <li class="item">
                          <a href="#" class="link">
                            <v-icon> mdi-phone-classic </v-icon>
                            تماس :
                            <span class="pt-1"> 09100000000 </span>
                          </a>
                        </li>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
              <div class="header-search">
                <v-container class="pa-0" style="height: 100%">
                  <v-row class="ma-0 pa-0 search-row">
                    <v-col
                      cols="0"
                      xl="3"
                      lg="3"
                      md="3"
                      sm="0"
                      class="px-1 pl-4 py-0 i-shop1"
                    >
                      <div class="i-shop">
                        <a href="#">
                          <v-img
                            width="100%"
                            height="100%"
                            src="./assets/img/png/go.png"
                          ></v-img>
                        </a>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      xl="7"
                      lg="7"
                      md="7"
                      class="px-1 pr-3 py-0 btv"
                    >
                      <div class="search">
                        <div class="d-search" tag="button" @click="ok()">
                          <span>تمام دسته بندی ها</span>
                          <v-icon small color="black">mdi-menu-up</v-icon>
                        </div>
                        <input
                          type="text"
                          class="s-input px-3"
                          placeholder="جستجو..."
                        />
                        <div class="s-icon">
                          <v-btn
                            class="ma-0 pa-0 rounded-circle"
                            color="#c9e8dd"
                            dark
                            max-height="100%"
                            max-width="100%"
                            min-width="100%"
                            width="100%"
                            height="100%"
                          >
                            <v-icon dark> mdi-magnify </v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      xl="2"
                      lg="2"
                      md="2"
                      sm="12"
                      class="pa-0 b-shop444"
                    >
                      <div class="b-shop">
                        <div class="mini-logo">
                          <span>shopvolly</span>
                        </div>
                        <v-spacer class="mini-space"></v-spacer>
                        <div class="bt mini-magnify mx-4">
                          <v-btn
                            class="ma-0 pa-0 rounded-circle"
                            color="#f8d4db"
                            dark
                            height="95%"
                            min-width="95%"
                            max-height="95% "
                            max-width="95% "
                            width="95%"
                          >
                            <v-icon dark> mdi-magnify </v-icon>
                          </v-btn>
                        </div>
                        <div class="bt">
                          <v-btn
                            class="ma-0 pa-0 rounded-circle"
                            color="#f8d4db"
                            dark
                            height="95%"
                            min-width="95%"
                            max-height="95% "
                            max-width="95% "
                            width="95%"
                          >
                            <v-icon dark> mdi-cart-outline </v-icon>
                          </v-btn>
                        </div>

                        <ul class="items">
                          <li class="item">
                            <a href="#" class="link">سبد من</a>
                          </li>
                          <li class="item">
                            <a href="#" class="link">0 محصول </a>
                          </li>
                        </ul>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-app-bar>
    <Menu />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer class="pa-0" color="white">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import Menu from "./views/Menu";
import Footer from "./views/Footer";

export default {
  name: "App",

  components: {
    // HelloWorld,
    Footer,

    Menu,
  },

  data: () => ({
    drawer: false,
    itemsGategory: [
      {
        to: "/",
        class1: "",
        text: "صحفه اصلی ",
        classicon: true,
        icon: "",
      },
      {
        to: "/about",
        class1: "",
        text: "  وبلاگ",
        classicon: false,
        icon: "",
      },
      {
        to: "/",
        class1: "",
        text: "رسانه",
        classicon: false,
        icon: "",
      },
      {
        to: "/",
        class1: "",
        text: "ویژگی ها",
        classicon: false,
        icon: "",
      },
      {
        to: "/",
        class1: "",
        text: "در باره ما ",
        classicon: false,
        icon: "",
      },
    ],
  }),
  methods: {
    ok() {
      alert("hiiiii");
    },
  },
};
</script>
<style lang="scss" >
@import "~vuetify/src/styles/main.sass";
@import "../src/assets/scss/utility/utility.scss";
@import "../src/assets/css/normalize.css";
@import "../node_modules/flickity/css/flickity.css";


%link {
  .link {
    color: $color-blue-gray;
    padding: 5px 8px;
    font-size: 1em;
    margin: 0px 4px 0px 8px;
    font-weight: unset;
    i {
      margin: 0px 4px;
      color: $color-blue-gray;
    }
  }
}

.v-navigation-drawer {
  .item {
    list-style: none;
    .link {
      color: $color-dark;
    }
  }
}
.v-app-bar {
  * {
    padding: 0 !important;
  }
  .v-toolbar__content {
    border-bottom: 1px solid $color-light2;
    height: 100% !important;
  }
}

.h-continer {
  height: 100%;
  .header {
    @extend %wh;
    .heder-menu {
      .v-btn--icon {
        display: none;
      }
      border-bottom: 1px solid $color-blue-gray;
      width: 100%;
      float: left;

      background-color: $color-header;
      .items {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0;
        .item {
          @extend %link;
        }
      }
      .number {
        float: left;
        .item {
          list-style: none;
          @extend %link;
        }
      }
    }

    .header-search {
      width: 100%;
      float: left;
      height: 132px;

      .search-row {
        height: 100%;
        align-items: center;
        justify-content: space-between;
      }
      .search {
        width: 98%;
        border: 2px solid $color-menu;
        border-radius: 50px;
        position: relative;
        left: 0;
        float: left;
        height: 56px;
        .d-search {
          height: 100%;
          position: absolute;
          right: 0px;
          top: 0px;
          width: 27%;
          border-left: 2px solid $color-menu;
          align-content: center;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;

          span {
            color: $color-dark;
            font-size: 1rem;
          }
          &:hover {
            cursor: pointer;
          }
          &:focus {
            i {
              transform: rotate(180deg);
            }
          }
        }
        .s-input {
          padding: 12px;
          position: absolute;
          right: 180px;
          top: 5px;
          width: 64%;
          background-color: $color-light;
          height: 80%;
          &:focus::placeholder {
            color: transparent;
          }
        }
        .s-icon {
          position: absolute;
          left: 0.2%;
          top: 1.2%;
          width: 8%;
          height: 95%;
        }
      }
      .i-shop {
        width: 100%;

        height: 52px;
      }
      .b-shop {
        .mini-logo {
          span {
            color: $color-dark;
            font-weight: bold;
            font-size: 1.7em;
          }
        }
        width: 100%;
        height: 52px;

        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .bt {
          width: 52px;
          height: 52px;

          .v-btn {
            top: 1.2%;
          }
        }
        .items {
          margin-right: 4px;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 70px;
          .item {
            padding: 5px 8px;
            .link {
              color: $color-dark;
            }
          }
        }
      }
    }
  }
}

//////////

@mixin main {
  .h-g {
    display: none !important;
  }
  //سطر بالا
  .heder-menu {
    .items {
      height: 40px;
      margin: 0px 40px;
      hr {
        display: none;
      }
      .v-btn--icon {
        display: block !important;
      }
      .item {
        display: none;
      }
    }
    .h-n {
      display: none;
    }

    .b-shop {
      margin: 0px 40px;
      .sbad1 {
        display: none !important;
      }
    }
  }

  //سطر پایین
  .header-search {
    height: 80px !important;
    .search,
    .btv,
    .i-shop {
      display: none;
    }

    .b-shop444 {
      height: 100%;
      align-items: center;
      display: flex;
      flex-direction: row;
    }
    .b-shop {
      padding: 0px 40px !important;
      .items {
        display: none !important;
      }
    }
  }
}
@mixin b-shop {
  .mini-logo,
  .mini-space,
  .mini-magnify {
    display: none;
  }

  .sbad1 {
    display: none !important;
  }
}

///media///

@media #{$bp-xs} {
  .v-app-bar {
    height: 137px !important;
  }
  .header {
    height: 127px !important;
    .v-toolbar__content {
      height: 138px !important;
    }
    @include main;
  }
}
@media #{$bp-sm} {
  .v-app-bar {
    height: 137px !important;
  }

  .header {
    @include main;
  }
}
@media #{$bp-md} {
  .heder-menu {
    .items {
      .space {
        display: none;
      }
      .item {
        .link {
          font-size: 0.9em !important;
        }
      }
    }
    .number {
      .link {
        font-size: 0.9em !important;
      }
    }
  }
  .b-shop {
    @include b-shop;
  }
}
@media #{$bp-lg} {
  .heder-menu {
    .items {
      .space {
        display: none;
      }
    }
  }
  .b-shop {
    @include b-shop;
  }
}
@media #{$bp-xl} {
  .heder-menu {
    .items {
      .space {
        display: none;
      }
    }
  }
  .b-shop {
    @include b-shop;
  }
}
</style>
