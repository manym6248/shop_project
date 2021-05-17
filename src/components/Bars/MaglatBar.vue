<template>
  <v-container class="pc-14">
<div class="title-pb pr-4">
  <v-row class="ma-0">
    <h1>مقالات جدید</h1>


  </v-row>
</div>
<v-divider></v-divider>

    <div class="gallery pc-b24 js-flickity big4442 " data-flickity='{  "wrapAround": true, "autoPlay":8000,"groupCells": 2 }'  >
        <v-col class="py-0 pc " cols="6" sm="6" xl="3" lg="3" md="3"  v-for="n in 12" :key="n" >
              <div class="gallery-cell  gallery-cellm " >
                <div class="bn">



              <magale />




                </div>
                <div class="gallery-text">
                  <a href="#">
                    
                  </a>
                </div>
              </div>
        </v-col>
  
</div>
    <div class="gallery pc-b24 js-flickity mini-44442" style=" display: none"  data-flickity='{  "wrapAround": true, "autoPlay":8000,"groupCells": 1 }'  >
        <v-col class="py-0 pc " cols="12" sm="6" xl="3" lg="3" md="3"  v-for="n in 12" :key="n" >
              <div class="gallery-cell  gallery-cellm " >
                <div class="bn">



              <magale />




                </div>
                <div class="gallery-text">
                  <a href="#">
                    
                  </a>
                </div>
              </div>
        </v-col>
  
</div>
  </v-container>
</template>

<script>
import Magale from '../OtherCards/Magale';

export default {
  components: { 
    
    Magale 
  
  },
  
  };
</script>

<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";
.pc-14{
  padding: 0px;
}
.title-pb{
  padding: 30px 0px 10px 0px;
  h1{
    font-size: 1.2em;
  }
}

.pc-b24 {
  
  margin: 30px 0px;
   height: 100%;
   justify-content: center;
  .pc{
      padding: 0px 4px;
  }
   .gallery-cellm {
 @extend %wh;
  
  
  .bn{
      width: 100%;
      height: auto ;
     
  }
}

  .flickity-prev-next-button {
        display: none;
        top: 53%;
        &:hover {
          background-color: blue;
          color: white;
        }
      }
      &:hover {
        .flickity-prev-next-button {
          display: block !important;
        }
      }

      .flickity-page-dots {
        bottom: -40px;
        padding-top: 24px;
        .dot {
          width: 12px;
          height: 12px;
          opacity: 1;
          background: transparent;
          border: 2px solid white;
        }

        .dot.is-selected {
          background: white;
        }
      }
      .previous {
        left: 18px;
      }
      .next {
        right: 15px;
      }
    
}
@media #{$bp-xs} {
 
 .pc-14{
   padding: 0px 12px;
 }
  .big4442{
   display: none;
 }
 .mini-44442{
   display: block !important;
 }
}
@media #{$bp-sm} {

  .pc-14{
    padding: 0px 12px;
  } 
}




</style>