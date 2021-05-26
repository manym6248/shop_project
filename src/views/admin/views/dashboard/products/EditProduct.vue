<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    <v-col cols="12">
      <base-material-card>
        <template v-slot:heading>
          <div class="display-2 font-weight-light">انتخاب مسیر</div>

          <div class="subtitle-1 font-weight-light"></div>
        </template>

        <!--مسیر دهی  -->
        <v-form>
          <v-container class="py-0">
            <v-row>
              <v-col cols="12" sm="6" class="mt-5">
                <v-select
                  v-model="categgory"
                  :items="categgory.name"
                  color="pink"
                  label="انتخاب دسته"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" class="mt-5">
                <v-select
                  v-model="categgory"
                  :items="animals"
                  color="pink"
                  label="انتخاب زیر مجموعه"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </base-material-card>
    </v-col>

    <div class="py-3" />

    <base-material-card
      icon="mdi-clipboard-text"
      title=" لیست محصولات موجود در زیر مجموعه"
      class="px-5"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">ID</th>
            <th class="primary--text text-center">نام</th>
            <th class="primary--text text-center">قیمت</th>
            <th class="primary--text text-center">عکس</th>
            <th class="primary--text text-center">ویرایش</th>
            <th class="primary--text text-center">حدف</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, i) in apidata" :key="i">
            <td>{{ item.id }}</td>
            <td class="text-center">{{ item.name }}</td>
            <td class="text-center">{{ item.price }}</td>
            <td class="text-center">
              <v-img
                class="my-4 mx-auto"
                max-height="80px"
                :src="item.Url"
                width="100px"
                height="100px"
              ></v-img>
            </td>
            <td class="text-center">
              <v-btn class="ml-2 edit-h" min-width="0" text large icon>
                <v-icon large> mdi-clipboard-edit-outline</v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn class="ml-2 removebtn-h" min-width="0" text large icon>
                <v-icon large> mdi-delete-empty</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <v-row justify="center">
      <v-col cols="12">
        <v-row class="ma-12 ma-xl-0 ma-lg-0 ma-md-0">
          <v-col cols="12" sm="12" lg="4" xl="4" md="4" class="py-0 px-0">
            <div class="blue1">
              <div
                id="my-strictly-unique-vue-upload-multiple-image"
                style="display: flex; justify-content: center; height: 100%"
              >
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
      </v-col>
      <v-col cols="12" md="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">ویرایش محصول مورد نظر</div>

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
                  <v-btn x-large color="green">ثبت</v-btn>
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
  components: { VueUploadMultipleImage },
  data() {
    return {
      images: [],
      rating: 4,
      animals: [],
      categgory: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
      apidata: [
        {
          id: 1,
          name: "شامپو",
          price: "20000",
          Url: require("../../../../../assets/بهداشتی/شامپو/DSC_0261-3-682x1024.jpg"),
        },
        {
          id: 2,
          name: "صابون",
          price: "20000",
          Url: require("../../../../../assets/بهداشتی/صابون/wp2007995.jpg"),
        },
      ],
      product: {
        id: 1,
        imageUrl: null,
        image: null,
        name: "",
        price: "",
        description: "",
        brand: "",
        categgory: "",
      },
      pr: [
        {
          be: [
            {
              ar: [
                {
                  id: 1,
                  imageUrl: null,
                  image: null,
                  name: "whf,k",
                  price: "200",
                  description: "546546",
                  brand: "fdsf",
                  categgory: "kjjj",
                },
                {
                  id: 1,
                  imageUrl: null,
                  image: null,
                  name: "whf,k",
                  price: "200",
                  description: "546546",
                  brand: "fdsf",
                  categgory: "kjjj",
                },
              ],
            },
            {
              sho: [],
            },
          ],
        },
      ],
    };
  },
  methods: {
     uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);},
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
  },
  created() {
    // this.$http.get("/photos").then((res) => {
    //   var data = res.data;
    //   var x = JSON.stringify(data);
    //   this.apidata = x;
    // });
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
@import "../../../../../assets/scss/utility/utility.scss";
.image {
  margin: 20px;
  height: 200px;
  width: 200px;
  border: 1px solid grey;
}

.removebtn-h {
  &:before {
    background: none !important;
  }
  &:hover {
    .v-icon {
      color: rgb(187, 9, 9);
    }
  }
}
.edit-h {
  &:before {
    background: none !important;
  }
  &:hover {
    .v-icon {
      color: $color-dark;
    }
  }
}
</style>

