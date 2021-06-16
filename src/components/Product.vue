<template>
  <v-container fluid class="pa-0" id="baseContiner">
    <div class="media-header mb-8">
      <h3>رسانه</h3>
      <v-breadcrumbs large :items="items" divider="/"></v-breadcrumbs>
    </div>

    <v-container class="pt-4 pb-3 px-0 mb-4">
      <v-row class="ma-0">
        <v-col cols="12" sm="12" lg="4" xl="4" md="4" class="py-0 px-0">
          <div class="blue1">
            <flickity
              class="carousel carousel-main mb-5"
              :options="flickityOptionsH"
            >
              <div class="carousel-cell">
                <inner-image-zoom
                  class="img-f"
                  :src="bigURL"
                  :zoomSrc="bigURL"
                />
              </div>
            </flickity>

            <flickity
              ref="flickity"
              :options="flickityOptions"
              class="carousel carousel-nav"
            >
              <div
                class="carousel-cell"
                v-for="(item, i) in product.images"
                :key="i"
              >
                <figure class="img-f" @click="bigUrl(item.url)">
                  <v-img
                    class="f-img"
                    width="100%"
                    height="100%"
                    :src="item.url"
                  >
                  </v-img>
                </figure>
              </div>
            </flickity>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          lg="8"
          xl="8"
          md="8"
          class="py-0 px-0 pr-lg-5 pr-xl-5 pr-md-5"
        >
          <div class="red1">
            <v-card class="mx-auto my-0 mb-1" width="100%" height="100%">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-card-text style="height: 130px" class="pa-10">
                <div class="my-0 subtitle-1">
                  <h1>{{ product.name }}</h1>
                </div>
                <v-row align="center" class="mx-0 my-2 mt-10">
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    dense
                    value="2.5"
                    size="35"
                  ></v-rating>
                  <span class="grey--text text--lighten-2 caption mr-2">
                    ({{ rating }})
                  </span>
                </v-row>
                <v-row class="ma-0 pa-0">
<div class="py-5 my-0 mt-1 pric14">
                  
                  {{ product.price | currency }}
                  
                </div>
                <div class="py-5 my-0 mx-7 mt-1 pric15">
                  
                {{product.discount}} تخفیف 
                  
                </div>
                </v-row>
                
                <div class="pargaph">
                  <p>
                    {{ product.description }}
                  </p>
                </div>
                <div class="pa-3"></div>
                <v-btn  color="blue" class="by-btn ma-0 rounded-pill" large  @click="addToCart">خرید</v-btn>

                <div class="card-item">
                  <ul class="items">
                    <li class="item">
                      <a >
                        <v-btn
                          class="ml-2 rounded-pill"
                          dark
                          large
                          color="pink"
                          @click=" addTointerestscart"
                        >
                          <v-icon dark> mdi-heart </v-icon>
                          افزودن به علاقه مندی ها
                        </v-btn>
                      </a>
                    </li>
                   
                  </ul>
                </div>
                <div class="pa-5 chip"></div>
                <v-row class="ma-0" align="center">
                  <h3>دسته :</h3>
                  <v-row class="ma-0 mr-4">
                    <v-chip class="text-none chip2" :ripple="false">
                      بهداشتی
                    </v-chip>
                  </v-row>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>

      <v-card elevation="0">
        <v-tabs hide-slider class="pt-5">
          <v-tab
            v-for="item in items1"
            :key="item"
            class="tab15 ml-3 rounded-pill"
            active-class="activ-tab"
            >{{ item }}</v-tab
          >

          <v-tab-item transition="scale-transition" class="mt-5 item-tab">
            <v-card-text class="pa-10">
              <h5>متن پاراگراف</h5>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است ولورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                است ولورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است ولورم ایپسوم متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                لازم است و
              </p>
            </v-card-text>
          </v-tab-item>
          <v-tab-item transition="scale-transition" class="mt-5 item-tab">
            <v-card-text class="pa-10">
              <v-card class="ma-0">
                <v-simple-table dense>
                  <template v-slot:default>
                    <tbody>
                      <tr v-for="item in desserts" :key="item.name">
                        <td
                          style="width: 50px; , border-left: 1px solid gainsbor;"
                        >
                          {{ item.name }}
                        </td>
                        <td>{{ item.calories }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-card-text>
          </v-tab-item>
           <v-tab-item transition="scale-transition" class="mt-5 item-tab">
              <v-card-text>
          <div class="font-weight-bold mr-8 mb-2">
            نظرات شما
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="(message, i) in messages"
              :key="i"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong class="ml-3">{{ message.from }}</strong> {{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
          </v-tab-item>
          <v-tab-item transition="scale-transition" class="mt-5 item-tab">
            <v-card-text class="pa-10">
              <v-form>
                <h2 class="mb-10">دیدگاه خود را با ما به اشتراک بگذارید</h2>

                <h3 class="mb-1">نام :</h3>

                <v-text-field
                  label="نام"
                  placeholder="نام خود را وارد کنید"
                  solo
                  background-color="white"
                ></v-text-field>

                <div class="pa-1"></div>
                <h3 class="mb-1">ایمیل :</h3>
                <v-text-field
                  label="ایمیل"
                  solo
                  background-color="white"
                ></v-text-field>
                <div class="pa-1"></div>
                <h3 class="mb-1">دیدگاه شما :</h3>
                <v-textarea
                  solo
                  label="دیدگاه شما"
                  v-model="title"
                  full-width
                ></v-textarea>
                <div class="pa-1"></div>
                <v-btn large color="primary" class="mr-5" type="submit"
                  >ارسال نظر</v-btn
                >
              </v-form>
            </v-card-text>
          </v-tab-item>
        </v-tabs>
      </v-card>

      <product-bar :name1="name1" class="pb-0 mb-0" />

      <product-bar />
    </v-container>
  </v-container>
</template>


<script>
import Flickity from "vue-flickity";
import InnerImageZoom from "vue-inner-image-zoom";
import ProductBar from "./Bars/ProductBar";

export default {
  components: {
    ProductBar,
    InnerImageZoom,
    Flickity,
  },

  data() {
    return {
        messages: [
        {
          from: 'مانی',
          message: `بهترین سایتی که دیدم `,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'رز بنفش',
          message: 'عالی بود , عالی ',
          time: '16:37am',
          color: 'green',
        },
        {
          from: 'مهرداد',
          message: 'خوب بود توصیه میکنم',
          time: '20:27am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'کاربر پاک شده',
          message: ' با تاریخ روز بود و کاملا تازه ممنون ',
          time: '22:47am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'ربات',
          message: ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله...   در ستون و سطرآنچنان که لازم است ولورم ایپسوم متن ساختگی با تولید',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
        
      ],
      name1:{name:"محصولات مرتبط",
               required1:true},
      rating: 4,
      flickityOptions: {
        asNavFor: ".carousel-main",
        contain: true,
        pageDots: false,
        groupCells: 3,
        prevNextButtons: false,
      },
      flickityOptionsH: {
        pageDots: false,
        prevNextButtons: false,
      },

      desserts: [
        {
          name: "وزن",
          calories: 159,
        },
        {
          name: "ابعاد",
          calories: "12*10*50 cm",
        },
        {
          name: "رنگ",
          calories: "آبی, مشکی, سفید",
        },
      ],
      tab: null,
      items1: ["توضیحات", "اطلاعات بیشتر", "نظرات","ارسال نظر"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, snulled do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      items: [
        {
          text: "صفحه اصلی",
          disabled: false,
          to: "/",
        },
        {
          text: "رسانه",
          disabled: true,
        },
      ],
      selected: ["Trevor Handsen"],

      title: "",

      product: this.$store.getters.product(this.$route.params.id),
      bigURL: "",
      imgs: [],
    };
  },
  filters: {
    currency(value) {
      return (
        new Intl.NumberFormat("fa", { maximumSignificantDigits: 3 }).format(
          value
        ) +
        " " +
        "تومن"
      );
      //new Intl.NumberFormat('fa', { style: 'currency', currency: 'IRR' }).format()
    },
  },

  watch: {
    "$route.params.id": function (id) {
      this.product = this.$store.getters.product(id);
      this.imgs = this.product.images;
      for (let i = 0; i < this.imgs.length; i++) {
        this.bigURL = this.imgs[0].url;
      }
    },
    
  },
  methods: {
    bigUrl(url) {
      this.bigURL = url;
    },
    addToCart() {
      this.$store.dispatch("addToCart", this.$route.params.id);
      alert("به سبد خرید اضافه شد")
    },
      addTointerestscart() {
      this.$store.dispatch("addTointerestscart", this.$route.params.id);
      alert("به علاقمندها اضافه شد")
    },
  },
  created() {
    this.imgs = this.product.images;
    for (let i = 0; i < this.imgs.length; i++) {
      this.bigURL = this.imgs[0].url;
    }

   
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utility/utility.scss";
@import "../../node_modules/flickity/css/flickity.css";
@import "../../node_modules/flickity/dist/flickity.css";

.blue1 {
  height: 90vh;
  .carousel {
    height: 81%;
    .carousel-cell {
      width: 100%;
      height: 100%;
      margin-right: 10px;

      border-radius: 5px;
      counter-increment: carousel-cell;
    }
  }

  .carousel-nav {
    height: 15%;
    .carousel-cell {
      height: 100%;
      width: 70px;
    }
  }

  .carousel-nav .carousel-cell:before {
    font-size: 50px;
    line-height: 80px;
  }

  .img-f {
    height: 100%;
    border: 1px solid $color-light2;
    div {
      height: 100%;
    }
    .iiz__img {
      height: 100% !important;
      width: 100% !important;
    }
  }
}

.red1 {
  height: 90vh;
  .pric14 {
    font-size: 2.1em;
    color: $color-header;
  }
  .pric15 {
    font-size: 1.6em;
    color: $color-menu;
  }
  .card-item {
    .items {
      display: flex;
      flex-direction: row;
      margin-top: 40px;
    }
  }
  .chip {
    .chip2 {
      .v-chip__content {
        font-size: 1em !important;
      }
    }
  }
}

.item-tab {
  background-color: $color-light2;
}
.tab15 {
  background-color: $color-menu;
  color: $color-light !important ;
  border: none;
  letter-spacing: 0;
  &:hover:after {
    display: none;
  }

  &:after {
    display: none;
  }
}

.activ-tab {
  border-radius: 50px;
  background-color: $color-header;

  border: none;
  letter-spacing: 0;

  &:after {
    display: none;
  }
}
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
.image-h {
  height: 450px;
  width: 100%;
}

.pc-b{
  margin: 0px;
}
</style>