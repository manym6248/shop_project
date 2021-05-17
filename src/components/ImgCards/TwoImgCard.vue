<template>
    <div class="carsul-2 my-10">
    <v-container class="pa-0" style="height: 100%">
      <v-row class="ma-0 pa-0" style="height: 100%">
        
        <v-col cols="6" sm="6" md="6" lg="6" xl="6"  class="px-1 py-0  "
         style="height: 100%" ><div class="hon ">
            <a href="#">
               <div class="gallery-text">
                <a href="#">
                  <h3>Last Iceland Sunshine</h3>
                  <span>Graphics</span>
                </a>
              </div>
              <v-img height="100%" class="rounded " min-height="100%" max-height="100%" src="../../assets/img/svg/۲۰۱۹۱۲۲۶_۱۰۵۰۱۲-1200x1600.jpg"></v-img>
            </a>
            </div
        ></v-col>
        <v-col cols="6" sm="6" md="6" lg="6" xl="6"  class="px-1 py-0  "
         style="height: 100%" ><div class="hon ">
            <a href="#">
               <div class="gallery-text">
                <a href="#">
                  <h3>Last Iceland Sunshine</h3>
                  <span>Graphics</span>
                </a>
              </div>
              <v-img height="100%" class="rounded " min-height="100%" max-height="100%" src="../../assets/img/svg/۲۰۱۹۱۲۲۶_۱۰۵۰۱۲-1200x1600.jpg"></v-img>
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

<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";
.carsul-2 {
  
  height: 230px;
@include imges-base-scss;
  }

  .fade-enter-active {
    animation: fade-in 0.5s ease-out forwards;
  }

@media #{$bp-xs} {
 .carsul-2{
   padding: 0px 8px;
   height: 230px !important;
   .hon{
        height: 100%;
        padding: 5px;
   }
   .many-mr{
     display: flex;
     flex-direction: column  !important;
   }
 }
}
@media #{$bp-sm} {
.carsul-2{
  padding: 0px 8px;
}}


</style>