<template>
  <div class="body-lgin1 mt-15 mt-xl-0 mt-gl-0 mt-md-0">
    <v-container tag="section" class="at-16">
      <v-container
        tag="section"
        class="mt-0 px-xl-16 px-lg-16 px-md-8 px-sm-4 pt-0"
      >
        <v-row justify="center">
          <v-col cols="12" md="12">
            <base-material-card class="px-0 pb-0">
              <template v-slot:heading>
                <div class="display-2 font-weight-light">همه کاربران</div>

                <div class="subtitle-1 font-weight-light"></div>
              </template>

              <div class="login-card">
                  <v-simple-table>
              <thead>
                <tr>
                  
                  <th class="primary--text text-center my-4 mx-auto ">عکس</th>
                  <th class="primary--text text-center">نام کاربری</th>
                  <th class="primary--text text-center px-16"></th>
                  <th class="primary--text text-center px-16"></th>
                  

                  <th class="primary--text text-center pl-0">ویرایش</th>
                  <th class="primary--text text-center pr-0">حذف</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, i) in apidata" :key="i">
                
                  <td class="text-center">
                   
                       <v-img
                      class="rounded-circle my-2 mx-auto"
                      max-height="80px"
                      :src="item.Url"
                      width="60px"
                      height="60px"
                    ></v-img>
                          
                     
                  </td>
                  <td class="text-center">{{ item.name }}</td>
                  <td class="text-center px-6"></td>
                  <td class="text-center px-6"></td>
                
                 
                
                  <td class="text-center">
                    <v-btn class="ml-2 edit-h" min-width="0" text large icon>
                      <v-icon large> mdi-cart-outline</v-icon>
                    </v-btn>
                  </td>
                  <td class="text-center">
                    
                    <v-btn
                      class="ml-2 removebtn-h"
                      min-width="0"
                      text
                      large
                      icon
                    >
                      <v-icon large> mdi-delete-empty</v-icon>
                    </v-btn>
                  </td>
                </tr>
              
              </tbody>
            </v-simple-table>
              
              </div>
            </base-material-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";

export default {
  mixins: [validationMixin],

  data: () => ({
    apidata: [
      {
        id: 1,
        name: "شامپو",
        price: "260000",
        count: "1",
        Url: require("../../../../../assets/img/dev/بستنی/240306.jpg"),
      },
      {
        id: 2,
        name: "صابون",
        price: "200000",
        count: "5",
        Url: require("../../../../../assets/img/dev/بستنی/240447.jpg"),
      },
    ],
  }),

  computed: {},

  methods: {},
};
</script>




<style lang="scss" >
@import "../../../../../assets/scss/utility/utility.scss";

.body-lgin1 {
  padding: 0px;
  margin: 0px;
  height: 100vh;
  width: 100%;

  padding-top: 20px;
}

.login-card {
  height: 100%;
}

@media #{$bp-xs} {
  .login-card {
    height: 450px;
  }
  .body-lgin1 {
    padding: 10px;
  }
}
@media #{$bp-sm} {
  .body-lgin {
    padding-top: 10px;
  }
}
</style>