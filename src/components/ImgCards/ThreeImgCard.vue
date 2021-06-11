<template>
    <div class="carsul-2 mt-10">
    <v-container class="pa-0" style="height: 100%">
      <v-row class="ma-0 pa-0" style="height: 100%">
       <v-col cols="4" sm="4" md="4" lg="4" xl="4"  class="px-1 py-0  "
         style="height: 100%" ><div class="hon ">
            <a href="#">
               <div class="gallery-text">
                <a href="#">
                  <h3>انواع آب میوه های طبیعی</h3>
                  <span>20% تخفیف</span>
                </a>
              </div>
              <v-img height="100%" width="100%" class="rounded " min-height="100%" max-height="100%" src="../../assets/img/svg/img/colorful-fruit-juice-wallpaper-2560x1080_14.jpg"></v-img>
            </a>
            </div
        ></v-col>
       <v-col cols="4" sm="4" md="4" lg="4" xl="4"  class="px-1 py-0  "
         style="height: 100%" ><div class="hon ">
            <a href="#">
               <div class="gallery-text">
                <a href="#">
                  <h3>برترین بستنی های دنیا</h3>
                  <span>30% تخفیف</span>
                </a>
              </div>
              <v-img height="100%" class="rounded " min-height="100%" max-height="100%" src="../../assets/img/svg/img/morozhenoe-sirop-iagody-lakomstvo.jpg"></v-img>
            </a>
            </div
        ></v-col>
       <v-col cols="4" sm="4" md="4" lg="4" xl="4"  class="px-1 py-0  "
         style="height: 100%" ><div class="hon ">
            <a href="#">
               <div class="gallery-text">
                <a href="#">
                  <h3>انواع لواشک‌های ترش و ملس</h3>
                  <span>25% تخفیف</span>
                </a>
              </div>
              <v-img height="100%" class="rounded " min-height="100%" max-height="100%" src="../../assets/img/svg/img/lavashak_plogger_ir_-10-1024x683.jpg"></v-img>
            </a>
            </div
        ></v-col>
      
        
      </v-row>
    </v-container>
 </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utility/utility.scss";

.carsul-2 {
  
  height: 230px;
  .hon {
    height: 100%;
    width: 100%;
    
  }
  @include imges-base-scss;
}
@media #{$bp-xs} {
.carsul-2{
  padding: 0px 8px;
@include imges-base-scss;
}

}

@media #{$bp-sm} {
.carsul-2{
  padding: 0px 8px;
}
  
  }




</style>