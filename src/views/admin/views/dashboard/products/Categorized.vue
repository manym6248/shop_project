<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    
  
    <!-- <v-row justify="center">

      <v-col cols="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light"> ویرایش دسته بندی</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label=" ویرایش دسته بندی"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn large color="oreng" @click="add()"
                    >ثبت</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row> -->

<div class="py-8 py-lg-0 py-xl-0 py-md-0"></div>
  
    <v-row justify="center">
      
      <v-col cols="12">
        
        <base-material-card class="colorheader2"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light"> دسته</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>
          <div class="py-3"></div>
         <base-material-card icon="mdi-clipboard-text"
      title=" ایجاد دسته بندی">
          

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label="نام دسته بندی"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn large color="blue" @click="add()"
                    >ثبت</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
        <!--  -->
          <!--مسیر دهی  -->
         
           <div class="py-3" />

      <base-material-card
      icon="mdi-clipboard-text"
      title=" لیست دسته های موجود"
      class="px-5"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text text-right">شناسه</th>
            <th class="primary--text text-right">نام</th>
          
            <th class="primary--text text-left pl-10">عملیات</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="text-right">{{ product.id }}</td>
            <td class="text-right">{{ product.name }}</td>
            
            <td class="text-center text-left pl-4">
              <v-btn class="my-4 removebtn-h  float-left" icon min-width="0" text large>
                <v-icon large> mdi-delete-empty</v-icon>
              </v-btn>
              <!--  -->
                <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
      
        <v-btn class="my-4 edit-h  float-left" icon min-width="0" text large v-bind="attrs"
          v-on="on">
                <v-icon large> mdi-pencil-outline </v-icon>
              </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h3 white--text primary py-3 ">
        ویرایش دسته بندی
        </v-card-title>

        <v-card-text class="py-0">
                 <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label=" ویرایش دسته بندی"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn class="mt-4 mr-0"  color="oreng" @click="add()"
                    >ثبت</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           لغو
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
              <!--  -->
              
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
        </base-material-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        
      </v-col>
      <v-col cols="12">
        <base-material-card class="colorheader2">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">زیر دسته</div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>
          <div class="py-3"></div>
          <base-material-card
            icon="mdi-directions-fork"
           title="ایجاد زیر دسته "
          class="px-5">
       

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label="نام ریر دسته"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn large color="blue" @click="add()"
                    > ثبت</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>

          <!--مسیر دهی  -->
          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" class="mt-5">
                  <v-select
                    v-model="categgory"
                    :items="categgory.name"
                    color="pink"
                    label="انتخاب دسته"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
           <div class="py-3" />

    <base-material-card
      icon="mdi-clipboard-text"
      title="لیست زیر دسته های موجود در دسته انتخابی "
      class="px-5"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text text-right">ID</th>
            <th class="primary--text text-right">نام</th>
            
            <th class="primary--text text-left pl-4">عملیات</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td text-right>{{ product.id }}</td>
            <td class="text-right">{{ product.name }}</td>
           
            <td class="text-center " >
              <v-btn   icon elevation="0" class="removebtn-h my-4 float-left"  min-width="0" text large>
                <v-icon  large> mdi-delete-empty</v-icon>
              </v-btn>
                            <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
      
        <v-btn class="my-4 edit-h  float-left" icon min-width="0" text large v-bind="attrs"
          v-on="on">
                <v-icon large> mdi-pencil-outline </v-icon>
              </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h4 white--text primary py-4 ">
        ویرایش زیر دسته
        </v-card-title>

        <v-card-text class="py-0">
                 <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label=" ویرایش  زیر دسته"
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn class="mt-4 mr-0"  color="oreng" @click="add()"
                    >ثبت</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           لغو
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
        </base-material-card>
      </v-col>
    </v-row>

   

    <div class="py-3" />

    <!-- <v-row justify="center">
      <v-col cols="12">
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">ویرایش زیر دسته </div>

            <div class="subtitle-1 font-weight-light"></div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="8" class="my-5">
                  <v-text-field
                    label=" ویرایش زیر دسته "
                    required
                    v-model="product.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" class="my-7">
                  <v-btn large color="oreng" @click="add()"
                    >ثبت </v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
   -->
  </v-container>

</template>


<script>
//import axios from 'axios'
export default {
  data() {
    return {
        dialog: false,
      categgory: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
      categorized: [],
      product: {
        name: "",
        price: "",
        description: "",
        brand: "",
        categgory: "",
      },
    };
  },
  methods: {
    ////////////
    add() {
      var xr = {
        name: this.product.name,
      };

      console.log(xr);
      this.$http.post("/.json", xr).then((res) => console.log(res.config.data));
    },
  },
  created() {
    this.$http.get("/.json").then((res) => console.log(res.data));
  },
};
</script>
<style lang="scss" >
@import '../../../../../assets/scss/utility/utility.scss';
.removebtn-h{
  &:before{
     background: none !important;
  }
  &:hover{
    .v-icon{
      color: rgb(187, 9, 9);
    }
  }
 
}
.edit-h{
  &:before{
     background: none !important;
  }
  &:hover{
    .v-icon{
      color: $color-dark;
    }
  }
 
}
</style>

