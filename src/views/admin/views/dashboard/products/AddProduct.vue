<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    
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
            <div class="carousel-cell" >
              <figure class="img-f1" >
                 <v-btn height="100%" width="100%" class="ma-0 "  color="blue" @click="onPickFile">
                    <v-icon>mdi-camera-plus-outline</v-icon> </v-btn
                  >

                  <input
                    type="file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"
                  />
             
              </figure>
            </div>
            <div class="carousel-cell" v-for="(item, i) in imgs" :key="i">
              <figure class="img-f" @click="bigUrl(item.url)">
               
                <v-img width="100%" height="100%" :src="item.url">
                    <v-btn right x-small class="red mr-0 rounded-0" @click="remove(i)"><v-icon>mdi-window-close</v-icon></v-btn>
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
                <h1> {{ product.name }}</h1>
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
              <div class="py-5 my-0 mt-1 pric14">{{ product.price  | currency }}</div>
              <div class="pargaph">
                <p>{{ product.description }}
                </p>
              </div>
              

          
           
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
    <v-row justify="center">
      <v-col cols="12" md="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">ایجاد محصول</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="6" class="mt-5">
                  <v-text-field
                    label="نام محصول"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="6"  class="mt-5" >
                  <v-text-field
                    label=" قیمت  (عدد بدون واحد وارد شود واحد تومن می باشد)"
                    v-model="product.price"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label=" دسته بندی محصول"
                    required
                    v-model="product.categgory"
                  ></v-text-field>
                </v-col>

                 

                <v-col cols="6">
                  <v-text-field
                    label="  برند محصول"
                    required
                    v-model="product.brand"
                  ></v-text-field>
                </v-col>
               
                <v-col cols="12">
                  <v-textarea
                  
                  
                    class="purple-input pa-10"
                    label="  توصیف محصول"
                    v-model="product.description"
                  />
                </v-col>
                <v-col cols="12">
                  <v-btn large class="ma-7" color="blue" @click="onPickFile">
                    افزودن عکس</v-btn
                  >

                  <input
                    type="file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field label=" کلمات کلیدی" required></v-text-field>
                </v-col>
                <v-col cols="12" class="my-10">
                  <v-btn x-large color="green" @click="add()">ثبت</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <base-material-card class="v-card-profile">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">پیش نمایش</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>
          <div class="image">
            <v-img
              :src="product.imageUrl"
              width="200px"
              height="200px"
              max-height="200px"
            ></v-img>
          </div>
          <v-card-text class="text-center">
            <p class="display-2 font-weight-light mb-3 black--text">
              {{ product.name }}
            </p>
            <p class="display-2 font-weight-light mb-3 black--text">
              {{ product.price }}
            </p>
            <p class="display-2 font-weight-light mb-3 black--text">
              {{ product.brand }}
            </p>
            <p class="display-2 font-weight-light mb-3 black--text">
              {{ product.categgory }}
            </p>
            <p class="font-weight-light grey--text">
              {{ product.description }}
            </p>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Flickity from "vue-flickity";
import InnerImageZoom from "vue-inner-image-zoom";

//import axios from 'axios'
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
          url: require("../../../../../assets/بهداشتی/شامپو/sustainable-bottle-2-1024x768.jpg"),
        },
        {
          url: require("../../../../../assets/بهداشتی/شامپو/DSC_0261-3-682x1024.jpg"),
        },
        {
          url: require("../../../../../assets/بهداشتی/صابون/soap-and-beauty-elements-keaghd-dawara-3415_L.jpg"),
        },
        { url: require("../../../../../assets/بهداشتی/صابون/wp2007995.jpg") },
        { url: require("../../../../../assets/بهداشتی/صابون/wp2008050.jpg") },
      ],
      product: {
        imageUrl: null,
        image: null,
        name: "",
        price: "",
        description: "",
        brand: "",
        categgory: "",
      },
    };
  },
  methods: {

    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("hidsdas");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.product.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.product.image = files[0];
    },
    //////
    remove(id){
      for (let i = 0; i < this.imgs.length; i++) {
    //  this.imgs.remove(this.imgs[id])
    if(id === i){
     
       let remove = this.imgs.splice(i, 1);
       this.image = remove;
    }
       
      }
    },

    ////////////
    add() {
      var pr = {
        imageUrl: this.product.imageUrl,
        name: this.product.name,
        price: this.product.price,
        description: this.product.description,
        brand: this.product.brand,
        categgory: this.product.categgory,
      };

      this.$http.post("/.json", pr).then(() => alert("با موفقیت اضافه شد"));
    },

     bigUrl(url) {
      this.bigURL = url;
    },
  },

  created() {
    for (let i = 0; i < this.imgs.length; i++) {
      this.bigURL = this.imgs[0].url;
    }
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

 
  
};
</script>
<style lang="scss" >
.image {
  margin: 20px;
  height: 200px;
  width: 200px;
  border: 1px solid grey;
}

@import "../../../../../assets/scss/utility/utility.scss";
@import "../../../../../../node_modules/flickity/css/flickity.css";

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
  .img-f1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
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



//////
.carousel {
  background: #FAFAFA;
  margin-bottom: 40px;
}

.carousel-cell {
  width: 100%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  border-radius: 5px;
  counter-increment: carousel-cell;
}



</style>

