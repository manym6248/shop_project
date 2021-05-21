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
            ><div class="box-category">
              <v-btn
                class="my-0"
                outlined
                color="#000"
                @click="chan()"
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
                :class="{ abslut: gaitem }"
                style="height: 100%"
                v-if="displayN"
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
            </div></v-col
          >
          <v-col
            cols="0"
            lg="9"
            md="9"
            sm="0"
            class="px-1 pr-0 py-0"
            style="height: 100%"
          >
            <ul class="items">
              <router-link
               
                v-for="item in itemsGategory"
                :key="item.id"
                :id="item.id"
                :to="item.to"
               @click.native="changetoggle(item.id)"
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
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div></v-container
  >
</template>

<script>
export default {
  data() {
    return {
   
      itemsGategory: [
        {
          to: "/",
          class1: "",
          text: "صحفه اصلی ",
          classicon: true,
          icon: "",
          id:1
        },
         {
          to: "/productpage",
          class1: "",
          text: "فروشگاه",
          classicon: false,
          icon: "",
        },
        {
          to: "/blog",
          class1: "",
          text: "  وبلاگ",
          classicon: false,
          icon: "",
        },
        {
          to: "/madia",
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
      displayN:false
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

   
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    chan() {
      this.displayN = !this.displayN;
    },
    handleResize() {
      this.w = window.innerWidth;
      if (this.w > 960) {
        this.gaitem = false;
      } else {
        this.gaitem = true;
      }
    },

    changetoggle(id){
    
      if(id === 1 && this.$router.push('/')){
        this.displayN = true;
      }
      else{
         this.displayN = false;
      }
      
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

@media #{$bp-xs} {
  .menue {
    padding: 0px 26px 0px 14px;
    .items {
      display: none;
    }
  }
}
@media #{$bp-sm} {
  .menue {
    padding: 0px 26px 0px 14px;
    .items {
      display: none;
    }
  }
}
</style>