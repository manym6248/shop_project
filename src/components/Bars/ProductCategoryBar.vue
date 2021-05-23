<template>
  <v-container class="pa-0">
    <flickity ref="flickity" :options="flickityOptions" class="gallery p-c-bar1 js-flickity ">
        <v-col class="py-0 pc " cols="6" sm="6" lg="3" md="3" xl="3" v-for="(item, i) in items" :key="i" style="height:100%">
              <div class="gallery-cell " >
                <div class="bn">



             <ProductCategoryCard  :item="item"/>




                </div>
                <div class="gallery-text">
                  <a href="#">
                    
                  </a>
                </div>
              </div>
              
            </v-col>
  
</flickity>
  </v-container>
</template>

<script>
import ProductCategoryCard from '../OtherCards/ProductCategoryCard';
import Flickity from 'vue-flickity';
export default {
  components: { 
      ProductCategoryCard,
      Flickity
  
  },
  data() {
    return {
        flickityOptions: {
        wrapAround: true,
       autoPlay:6000,
       groupCells: 2
      },
      items: [
        {
          to: "/",
          class1: "",
          text: "صحفه اصلی ",
          classicon: true,
          icon: "",
          img: require("../../assets/img/svg/cursul/undraw_career_progress_ivdb.svg")
        },
        {
          to: "/",
          class1: "",
          text: "  وبلاگ",
          classicon: false,
          icon: "",
           img: require("../../assets/img/svg/cursul/undraw_celebration_0jvk.svg")
        },
        {
          to: "/",
          class1: "",
          text: "رسانه",
          classicon: false,
          icon: "",
           img: require("../../assets/img/svg/cursul/undraw_make_it_rain_iwk4.svg")
        },
        {
          to: "/",
          class1: "",
          text: "ویژگی ها",
          classicon: false,
          icon: "",
          img: require("../../assets/img/svg/cursul/undraw_home_screen_4n7s.svg")
        },
        {
          to: "/",
          class1: "",
          text: "در باره ما ",
          classicon: false,
          icon: "",
           img: require("../../assets/img/svg/cursul/undraw_creative_draft_vb5x.svg")
        }
      ],
    };
  },
  
  };
</script>

<style lang="scss" >
@import "../../assets/scss/utility/utility.scss";

.p-c-bar1 {
  
  margin: 85px 0px 30px 0px;
   height: 219px;
   justify-content: center;
  .pc{
      padding: 0px 4px;
  }
   .gallery-cell {
@extend %wh;
  
  
  .bn{
      @extend %wh;
     
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
        right: 18px;
      }
    
}





</style>