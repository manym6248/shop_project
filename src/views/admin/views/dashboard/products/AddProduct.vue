<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
               ایجاد محصول
            </div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" class="mt-5">
                  <v-text-field label="نام محصول" required
                  v-model="product.name "
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label=" دسته بندی محصول"
                    required
                       v-model="product.categgory "
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="  برند محصول" required
                   v-model="product.brand "
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label=" قیمت  (عدد بدون واحد وارد شود واحد تومن می باشد)"  v-model="product.price " required></v-text-field>
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
                 <v-btn x-large color="green" @click="add()" >ثبت</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4">
        <base-material-card class="v-card-profile">
        <template v-slot:heading>
            <div class="display-2 font-weight-light">
            پیش نمایش
            </div>

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
            

            <p class="display-2 font-weight-light mb-3 black--text">{{product.name}}</p>
            <p class="display-2 font-weight-light mb-3 black--text">{{product.price}}</p>
            <p class="display-2 font-weight-light mb-3 black--text">{{product.brand}}</p>
            <p class="display-2 font-weight-light mb-3 black--text">{{product.categgory}}</p>
            <p class="font-weight-light grey--text"> {{product.description}}</p>

           
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
//import axios from 'axios'
export default {
  data() {
    return {
      product: {
        imageUrl: null,
        image: null,
        name: "",
        price: "",
        description:"",
        brand:"",
        categgory:""
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

    ////////////
    add(){
  
        var pr ={
        imageUrl:this.product.imageUrl,
        name:this.product.name,
        price: this.product.price,
        description:this.product.description,
        brand:this.product.brand,
        categgory:this.product.categgory
        }
       
        this.$http.post('/.json',pr).then(() =>  alert("با موفقیت اضافه شد"));
    }
   
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
</style>

