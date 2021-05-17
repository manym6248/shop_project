<template>
  <v-container class="pc-b12">
<div class="title-pb pr-4">
  <v-row class="ma-0">
    <h1>برترین های امروز</h1>


  </v-row>
</div>
<v-divider></v-divider>

    <div class="gallery pc-b js-flickity big444 " data-flickity='{  "wrapAround": true, "autoPlay":8000,"groupCells": 2 }'>
        <v-col class="py-0 pc " cols="12" sm="6" lg="3" xl="3" v-for="n in 12" :key="n" >
              <div class="gallery-cell " >
                <div class="bn">



              <product-card />




                </div>
                <div class="gallery-text">
                  <a href="#">
                    
                  </a>
                </div>
              </div>
            </v-col>
  
</div>
    <div class="gallery pc-b js-flickity mini-4444" style=" display: none" data-flickity='{  "wrapAround": true, "autoPlay":8000,"groupCells": 1 }'>
        <v-col class="py-0 pc " cols="12" sm="6" lg="3" xl="3" v-for="n in 12" :key="n" >
              <div class="gallery-cell " >
                <div class="bn">



              <product-card />




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
import ProductCard from '../ProductCards/ProductCard.vue';
export default {
  components: { 
      ProductCard 
  
  },
  
  };
</script>

<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";


.pc-b12{
  padding: 0px ;

}
.title-pb{
  padding: 30px 0px 10px 0px;
  h1{
    font-size: 1.2em;
  }
}

.pc-b {
  
  margin: 30px 0px;
   height: 430px;
   justify-content: center;
  .pc{
      padding: 0px 4px;
  }
   .gallery-cell {
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
 .pc-b12{
   padding: 0px 12px;
 }
 .big444{
   display: none;
 }
 .mini-4444{
   display: block !important;
 }
}
@media #{$bp-sm} {

  .pc-b12{
    padding: 0px 12px;
  } 
}



</style>