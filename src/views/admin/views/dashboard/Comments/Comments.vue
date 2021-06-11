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
                <div class="display-2 font-weight-light">همه نظرات</div>

                <div class="subtitle-1 font-weight-light"></div>
              </template>

              <div class="login-card">
                  <v-simple-table>
              <thead>
                <tr>
                  
                  <th class="primary--text text-center my-4 mx-auto ">شناسه</th>
                 
                  <th class="primary--text text-center">نام  ارسال کننده</th>
                  <th class="primary--text text-center ">برای</th>
                  <th class="primary--text text-center ">دیدگاه</th>
                  <th class="primary--text text-center ">سطح کاربری</th>
                  <th class="primary--text text-center "> وضعیت</th>
                  <th class="primary--text text-center ">تاریخ </th>
                  <th class="primary--text text-center ">عملیات</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(item, i) in apidata2" :key="i">
                
                  <td class="text-center">
                    {{item.id}}
                     
                  </td>
                  <td class="text-center">{{ item.name }}</td>
                  <td class="text-center px-6">{{item. email}}</td>
                  <td class="text-center px-6">{{item.phone}}</td>
                  <td class="text-center px-6">نویسنده</td>
                
                 
                
                  <td class="text-center">
                   200/06/29
                  </td>
                  <td class="text-center">
                     <v-btn class="ml-2 edit-h" min-width="0" text large icon >
                      <v-icon > mdi-clipboard-edit-outline</v-icon>
                    </v-btn>
                    
                    <v-btn
                      class="ml-2 removebtn-h"
                      min-width="0"
                      text
                      large
                      icon
                     
                    >
                      <v-icon > mdi-delete-empty</v-icon>
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

  data () {
    return {
apidata2:[
    {id:1,
    name:'مانیا',
    email:'dfhdkfhdskfhds',
    phone:'dfkdsjflkdjfdl'

    }
]
    }
  },

  computed: {

    
  },

  methods: {

      removeFromCart2(itemId) {
      this.$store.dispatch('removeFromCart2', itemId)
    },
    goedit(id){
       this.$router.push('/component/edituserinformationadmin/'+id);
    }
    
  },
 
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