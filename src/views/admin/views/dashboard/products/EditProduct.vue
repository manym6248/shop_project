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
      class="px-5 "
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
          <tr>
            <td>{{ product.id }}</td>
            <td class="text-center">{{ product.name }}</td>
            <td class="text-center">{{ product.price }}</td>
            <td class="text-center">
              <v-img
                class="my-4 mx-auto"
                max-height="80px"
                :src="product.imageUrl"
                width="100px"
                height="100px"
              ></v-img>
            </td>
            <td class="text-center">
              <v-btn medium color="yellow">ویرایش</v-btn>
            </td>
            <td class="text-center">
              <v-btn medium color="red">حذف</v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">ویرایش محصول مورد نظر</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" class="mt-5">
                  <v-text-field
                    label="نام محصول"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label=" دسته بندی محصول"
                    required
                    v-model="product.categgory"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="  برند محصول"
                    required
                    v-model="product.brand"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label=" قیمت  (عدد بدون واحد وارد شود واحد تومن می باشد)"
                    v-model="product.price"
                    required
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
                  <v-btn x-large color="green">ثبت</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4">
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
export default {
  components:{
 
  },
  data() {
    return {
      animals:[],

      categgory: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
      apidata:[],
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
  },
  created(){
       this.$http.get('/.json').then((res) => {
       
           console.log (res.data);
        

        
       
       })
    },

  comments: {},
};
</script>
<style lang="scss" >
.image {
  margin: 20px;
  height: 200px;
  width: 200px;
  border: 1px solid grey;
}
</style>

