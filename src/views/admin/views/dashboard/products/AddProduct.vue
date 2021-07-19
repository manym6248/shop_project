<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    <v-row class="ma-12 ma-xl-0 ma-lg-0 ma-md-0">
      <v-col cols="12" sm="12" lg="4" xl="4" md="4" class="py-0 px-0">
        <div class="blue1">
  
        <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center; height: 100%">
    <vue-upload-multiple-image
      @upload-success="uploadImageSuccess"
      @before-remove="beforeRemove"
      @edit-image="editImage"
      :data-images="images"
      idUpload="myIdUpload"
      editUpload="myIdEdit"
      ></vue-upload-multiple-image>
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

          <v-form @submit.prevent="newProduct" enctype="multipart/form-data">
            <v-container class="py-0">
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
                    <v-select
                      v-model="Creationcateggory"
                      :items="categories1"
                      label="انتخاب دسته"
                      item-value="name"
                      item-text="name"
                    ></v-select>
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
                    class="purple-input px-0"
                    label="  توصیف محصول"
                    v-model="product.description"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field label=" کلمات کلیدی" required></v-text-field>
                </v-col>
                <v-col cols="12" class="mt-5 mb-10">
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
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  components: {
    VueUploadMultipleImage,
  },
  data() {
    return {
      Creationcateggory: {},
      image: null,
      images: [],
      images22: null,
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
 
  
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      this.images22 = formData;
      console.log(fileList);
      console.log(formData);
      // Upload image api
      // this.$http.post('/product', formData).then(response => {
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

    newProduct() {
      this.images22.append("title", this.product.name);
      this.images22.append("status", "status");
      this.images22.append("score", 100);
      this.images22.append("discount", 300);
      this.images22.append("price", this.product.price);
      this.images22.append("description", this.product.description);
      this.images22.append("category", this.Creationcateggory);
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch("newProduct", this.images22)
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

   created() {
    this.$http.get("/category").then((res) => {
      this.$store.dispatch("fetchcategory", res.data.data);
    });
  },
  computed:{
      categories() {
      return this.$store.state.category.categories;
    },
    categories1() {
      return this.$store.getters.categories1;
    },
  },
  watch: {
    categgory: function (val) {
      this.subcategory = [];
      for (const item of this.categories) {
        if (item.parent_id === val) {
          this.subcategory.push(item);
        }
      }
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

