<template>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pa-0 ">
<div class="heder-menu">
                <v-container class="pa-0" style="height: 100%">
                  <v-row class="ma-0 pa-0 px-10">
                    <v-col
                      cols="12"
                      sm="12"
                      md="6"
                      lg="6"
                      xl="6"
                      class="py-2 px-0"
                    >
                      <ul class="items">
                        <!-- <v-app-bar-nav-icon
                          @click="drawer = !drawer"
                        ></v-app-bar-nav-icon> -->
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
      </v-col>
</template>

<script>
   export default {


 

  data: () => ({
    username: "",

    // drawer: false,
    // itemsGategory: [
    //   {
    //     to: "/",
    //     class1: "",
    //     text: "صحفه اصلی ",
    //     classicon: true,
    //     icon: "",
    //   },
    //   {
    //     to: "/about",
    //     class1: "",
    //     text: "  وبلاگ",
    //     classicon: false,
    //     icon: "",
    //   },
    //   {
    //     to: "/",
    //     class1: "",
    //     text: "رسانه",
    //     classicon: false,
    //     icon: "",
    //   },
    //   {
    //     to: "/",
    //     class1: "",
    //     text: "ویژگی ها",
    //     classicon: false,
    //     icon: "",
    //   },
    //   {
    //     to: "/",
    //     class1: "",
    //     text: "در باره ما ",
    //     classicon: false,
    //     icon: "",
    //   },
    // ],
  }),
  computed: {
   
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    me() {
      return this.$store.getters.me;
    },
  },
  methods: {
   
    
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
@import "../../src/assets/scss/utility/utility.scss";
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

</style>