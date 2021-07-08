<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    <v-row class="ma-12 ma-xl-0 ma-lg-0 ma-md-0">
      <v-col cols="12" sm="12" lg="4" xl="4" md="4" class="py-0 px-0">
        <div class="blue1">
          <div
            id="my-strictly-unique-vue-upload-multiple-image"
            style="display: flex; justify-content: center; height: 100%"
          >
            <!-- <vue-upload-multiple-image
              @upload-success="uploadImageSuccess"
              @before-remove="beforeRemove"
              @edit-image="editImage"
              :data-images="images"
              idUpload="myIdUpload"
              editUpload="myIdEdit"
            ></vue-upload-multiple-image> -->
          </div>
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
              <div class="py-5 my-0 mt-1 pric14">
                {{ product.price | currency }}
              </div>
              <div class="pargaph">
                <p>{{ product.description }}</p>
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

          <v-form  @submit.prevent="SubmitForm" enctype="multipart/form-data">
            <v-container class="py-0">
              <v-row>
                 <v-col cols="4" md="4" lg="3" xl="3"
                      ><v-avatar size="128" color="indigo" alt="عکس پروفایل">
                        
                        <v-icon dark x-large v-if="span1"> mdi-account-circle </v-icon>

                        <v-btn
                          width="100%"
                          height="32%"
                          class="ma-0 pa-0 img-btn"
                          color="#999999b8"
                          @click="onPickFile"
                          style="position: absolute; bottom: -1px"
                        >
                          <v-icon dark>mdi-camera-plus-outline</v-icon></v-btn
                        >
                        <img :src="imageUrl" v-if="span2" />
                      </v-avatar>
                    </v-col>
                <input
                    type="file"
                    style="display: none"
                    ref="fileInput"
                    accept="image/*"
                    @change="onFilePicked"
                  />
              </v-row>
              <v-row>
                <v-col cols="6" class="mt-5">
                  <v-text-field
                    label="نام محصول"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" class="mt-5">
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
                  <v-text-field label=" کلمات کلیدی" required></v-text-field>
                </v-col>
                <v-col cols="12" class="my-10">
                  <v-btn x-large color="green" type="submit">ثبت</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
// import VueUploadMultipleImage from "vue-upload-multiple-image";
//import axios from 'axios'
export default {
  components: {
    // VueUploadMultipleImage,
  },
  data() {
    return {

     span1: true,
    span2: false,
    image: null,
    imageUrl: null,
      images: [],

      rating: 4,

      bigURL: "",

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

///

   onPickFile() {
      this.$refs.fileInput.click();
      this.span1 =false;
      this.span2=true;
    },
    onFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    /////










    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      this.images = fileList;
      // for (const item of fileList) {
      //   console.log(item);
      //   this.images.push(item);
      // }

      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },

    async SubmitForm() {
      this.$http
        .post(
          "/product",
          {
            title: this.product.name,
            images: [{path:this.imageUrl}],
            price: this.product.price,
            description: this.product.description,
            category: this.product.categgory,
          },
          { headers: { Authorization: `Bearer ${this.$store.getters.token}` } }
        )
        .then(() => alert("با موفقیت اضافه شد"))
        .catch((err) => {
          console.log(err);
        });
    },
    // ojkfodsjfg
    //dkfjdkf
    newProduct() {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch("newProduct", {
            title: this.product.name,
            images: this.images,
            price: this.product.price,
            description: this.product.description,
            category: this.product.categgory,
            status: "hghjgj",
            score: "hvhjj",
            discount: "22",
          })
          .then((response) => {
            alert("با موفقیت اضافه شد");
            resolve(response);
          })
          .catch((err) => {
            reject(err);
            // console.log(err);
          });
      });
    },
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

  created() {},
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
  height: 350px;
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
  .img-f1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
}

.red1 {
  height: 350px;
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
  background: #fafafa;
  margin-bottom: 40px;
}

.carousel-cell {
  width: 100%;
  height: 200px;
  margin-right: 10px;
  background: #8c8;
  border-radius: 5px;
  counter-increment: carousel-cell;
}
</style>

