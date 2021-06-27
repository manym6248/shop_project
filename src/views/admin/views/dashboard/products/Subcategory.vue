<template>
  <v-container id="user-profile" fluid tag="section" class="my-5">
    <v-row justify="center">
      <v-card  width="500" >
                          <v-card-title
                            class="text-h3 white--text primary py-3"
                          >
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
                                      v-model="categgoryname"
                                    ></v-text-field>
                                  </v-col>

                                  <v-col cols="12" md="4" class="my-7">
                                    <v-btn
                                      class="mt-4 mr-0"
                                      color="oreng"
                                      @click="updatecategory()"
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
                            <v-btn color="primary" text @click="dialog =false">
                              لغو
                            </v-btn>
                          </v-card-actions>
                        </v-card>
    </v-row>

  
  </v-container>
</template>


<script>
//import axios from 'axios'
export default {
  data() {
    return {
       categgoryname: "",
    };
  },
  methods: {
    ////////////
    async updatecategory() {
      var itemId = this.$route.params.id
      this.$store
        .dispatch("updatecategory", {
          name: this.categgoryname,
          itemId,
        })
        .then(() => {
          alert("اطلاعات دسته بندی به روز رسانی شد");
          this.$router.push({ name: "Categorized" });
         
         
        })
        .catch((err) => {
          console.log(err);
        });
    },
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

