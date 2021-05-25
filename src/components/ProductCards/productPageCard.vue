<template>
  <div>
    <v-row class="ma-0">
      <v-col cols="12" sm="12" lg="4" xl="4" md="4" class="py-0 px-0">
        <div class="blue1">
          <flickity
            class="carousel carousel-main mb-5"
            :options="flickityOptionsH"
          >
            <div class="carousel-cell">
              <inner-image-zoom class="img-f" :src="bigURL" :zoomSrc="bigURL" />
            </div>
          </flickity>

          <flickity
            ref="flickity"
            :options="flickityOptions"
            class="carousel carousel-nav"
          >
            <div class="carousel-cell" v-for="(item, i) in imgs" :key="i">
              <figure class="img-f" @click="bigUrl(item.url)">
                <v-img width="100%" height="100%" :src="item.url"></v-img>
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
                <h1>ساعت دیواری</h1>
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
              <div class="py-5 my-0 mt-1 pric14">{{ 90000 | currency }}</div>
              <div class="pargaph">
                <p>
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
              </div>
              <div class="pa-3"></div>
              <v-btn class="by-btn ma-0 rounded-pill" large>خرید</v-btn>

              <div class="card-item">
                <ul class="items">
                  <li class="item">
                    <a href="#">
                      <v-btn class="ml-2 rounded-pill" dark large color="pink">
                        <v-icon dark> mdi-heart </v-icon>
                        افزودن به علاقه مندی ها
                      </v-btn>
                    </a>
                  </li>
                  <li class="item">
                    <a href="#">
                      <v-btn class="ml-2 rounded-pill" dark large color="pink">
                        <v-icon dark> mdi-eye-outline </v-icon>
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
  </div>
</template>

<script>
import Flickity from "vue-flickity";
import InnerImageZoom from "vue-inner-image-zoom";

export default {
  components: {
    InnerImageZoom,
    Flickity,
  },
  data() {
    return {
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
      bigURL: "",
      imgs: [
        {
          url: require("../../assets/بهداشتی/شامپو/sustainable-bottle-2-1024x768.jpg"),
        },
        { url: require("../../assets/بهداشتی/شامپو/DSC_0261-3-682x1024.jpg") },
        {
          url: require("../../assets/بهداشتی/صابون/soap-and-beauty-elements-keaghd-dawara-3415_L.jpg"),
        },
        { url: require("../../assets/بهداشتی/صابون/wp2007995.jpg") },
        { url: require("../../assets/بهداشتی/صابون/wp2008050.jpg") },
      ],
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
  methods: {
    bigUrl(url) {
      this.bigURL = url;
    },
  },
  created() {
    for (let i = 0; i < this.imgs.length; i++) {
      this.bigURL = this.imgs[0].url;
    }
  },
};
</script>


<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";
@import "../../../node_modules/flickity/css/flickity.css";

.blue1 {
  height: 90vh;
  .carousel {
    height: 81%;
    .carousel-cell {
      width: 100%;
      height: 100%;
      margin-right: 10px;
      background: #8c8;
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
</style>