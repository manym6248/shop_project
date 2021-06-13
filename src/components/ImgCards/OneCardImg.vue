<template>
    <div class="carsul-2 mt-0">
    <v-container class="pa-0" style="height: 100%">
      <v-row class="ma-0 pa-0" style="height: 100%">
       
       <v-col cols="12" sm="12" md="12" lg="12" xl="12"  class="px-1 py-0  "
         style="height: 100%" ><div class="hon55 ">
            <a href="#">
               <div class="gallery-text">
                <a href="#">
                  <h2 class="h3">تخفیف های ویژه +</h2>
                  <h2 class="h34">به ازای هر خرید 20 درصد تخفیف</h2>
                </a>
              </div>
              <v-img height="100%" class="rounded " min-height="100%" max-height="100%" src="../../assets/img/svg/img/morozhenoe-sirop-iagody-lakomstvo.jpg"></v-img>
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
  .hon55 {
    height: 100%;
    width: 100%;
     position: relative;
      .gallery-text {
       
        left: 0;
        margin: 0 auto;
        padding: 20px;
        opacity: 1;
        position: absolute;
        right: 0;
        text-align: center;
        top: 49%;
        transform: translate3d(0px, -38%, 0px);
      visibility: initial;
        width: 100%;
        z-index: 3;
        color: white;
        
    
        .h3 {
          font-size: 2.2em;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 18px;
          text-transform: uppercase;
          margin-bottom: 4px;
          transform: translate(0, -10px);
          opacity: 1;
          color: $color-header;
          margin-left: 319px;
           text-shadow: 2px 2px 20px $color-header ;
        

        }
        .h34 {
          display: block;
          font-size:2.2em;
       
          margin-bottom: 0;
          padding-bottom: 0;
          color: $color-menu;
          opacity: 1;
          margin-right: 200px;
        
           text-shadow: 2px 2px 20px $color-menu ;
        }
      }
       .v-image {
          filter: brightness(0.3) !important;
          filter: blur(0px);
        }
  }
  
}
@media #{$bp-xs} {
.carsul-2{
  padding: 0px 8px;

}
   .h34{
     font-size: 1.2em !important;
     margin-right: 100px !important;
   }
   .h3{
     font-size: 1.2em !important;
     margin-left: 219px !important;
    
   }


}

@media #{$bp-sm} {
.carsul-2{
  padding: 0px 8px;
}
   .h34{
     font-size: 1.5em !important;
     margin-right: 100px !important;
   }
   .h3{
     font-size: 1.5em !important;
     margin-left: 219px !important;
    
   }
  
  }




</style>