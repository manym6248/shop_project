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

                        <v-menu
                          bottom
                          left
                          offset-y
                          origin="top right"
                          transition="scale-transition"
                          v-if="loggedIn"
                        >
                          <template v-slot:activator="{ attrs, on }">
                            <li class="userme" v-bind="attrs" v-on="on">
                              <v-icon>mdi-account</v-icon>
                              <a class="ma-0 font-weight-regular" min-width="0">
                                {{ me.name }}
                              </a>
                            </li>
                          </template>

                          <v-list :tile="false" nav color="pa-0">
                            <div>
                              <v-list-item
                                active-class="axtive-888"
                                to="/user"
                                tag="li"
                                class="item py-0 mx-0 font-weight-medium"
                              >
                                <a class="link"
                                  ><span></span>

                                  داشبورد</a
                                >
                              </v-list-item>
                              <v-list-item
                                active-class="axtive-888"
                                to=""
                                tag="li"
                                class="item py-0 mx-0 font-weight-medium"
                              >
                                <a class="link"
                                  ><span></span>

                                  ویرایش حساب کاربری</a
                                >
                              </v-list-item>
                              <v-list-item
                                active-class="axtive-888"
                                to=""
                                tag="li"
                                class="item py-0 mx-0 font-weight-medium"
                              >
                                <a class="link"
                                  ><span></span>

                                  فاکتور</a
                                >
                              </v-list-item>
                              <v-list-item
                                @click.native="logout()"
                                tag="li"
                                class="item py-0 pb-1 mx-0 font-weight-medium"
                              >
                                <a class="link"> خروج </a>
                              </v-list-item>
                            </div>
                          </v-list>
                        </v-menu>

                        <router-link
                          v-if="loggedIn && me.role === 'admin'"
                          to="admin"
                          class="item"
                        >
                          <a href="" class="link">
                            <v-icon class="mr-2"> mdi-hexagon-multiple </v-icon
                            >پنل ادمین
                          </a>
                        </router-link>
                        <router-link v-if="!loggedIn" to="/login" class="item">
                          <a href="" class="link">
                            <v-icon class="mr-2"> mdi-login-variant </v-icon
                            >ورود
                          </a>
                        </router-link>
                      </ul>
                    </v-col>
                    <v-col cols="6" class="py-2 pl-0 h-n">
                      <div class="number">
                        <li class="item">
                          <a href="#" class="link">
                            <span class="pt-1"> 09100000000 </span>
                            :
                            <v-icon
                              class="ma-0"
                              style="transform: rotate(24deg)"
                            >
                              mdi-phone
                            </v-icon>
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
                            @click="gotocart()"
                          >
                           
                            <v-badge color="red" >
                              <template v-slot:badge>
                                <span>{{ cartCount }}</span>
                              </template>

                              <v-icon dark> mdi-cart-outline </v-icon>
                            </v-badge>
                          </v-btn>
                        </div>

                        <ul class="items" style="
    justify-content: center;
">

                          <router-link tag="li" class="item" to="cart">
                            <a class="link">سبد من</a>
                            
                          </router-link>
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
    username: "",

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
  computed: {
    cartCount() {
      return this.$store.getters.cartItems.length;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    me() {
      return this.$store.getters.me;
    },
  },
  methods: {
    ok() {
      alert("hiiiii");
    },
    gotocart() {
      this.$router.push("cart");
    },
    logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push({ name: "Home" });
      });
    },
  },

  created() {
    if (this.loggedIn) {
      this.$store.dispatch("me").then(() => {
        // console.log("This would be printed after dispatch!!")
      });
    }
  },
};
</script>
<style lang="scss" >
@import "~vuetify/src/styles/main.sass";
@import "../src/assets/scss/utility/utility.scss";
@import "../src/assets/css/normalize.css";
@import "../node_modules/flickity/css/flickity.css";

.v-badge__wrapper {
  span {
    inset: auto calc(100% - 10px) calc(100% - 10px) auto;
    padding: 5px 6px !important;
  }
}

.userme {
  * {
    color: $color-dark !important;
  }

  &:hover {
    * {
      color: $color-menu !important;
    }
  }
}

.v-menu__content {
  list-style: none;
  font-size: 1em;

  .item {
    .link {
      color: $color-dark;
      font-size: 0.9em;
    }
    &:hover {
      background-color: $color-menu;
    }

    &.axtive-888 {
      background-color: white;

      color: $color-header;
    }
  }
}

.gallery:after {
  content: "flickity";
  display: none; /* hide :after */
}

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
