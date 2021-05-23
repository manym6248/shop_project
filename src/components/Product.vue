<template>
  <v-container fluid class="pa-0 ">
    <div class="media-header mb-8">
      <h3>رسانه</h3>
      <v-breadcrumbs large  :items="items"
      divider="/"></v-breadcrumbs>
    </div>

     <v-container class="pt-4 pb-3 px-0 mb-4">
         <v-row class="ma-0">
            <v-col cols="12" sm="12" lg="4" xl="4" md="4" class="py-0 px-0" >
              <div class="blue"></div>
            </v-col>
            <v-col cols="12" sm="12" lg="8" xl="8" md="8" class="py-0 px-0 pr-lg-5 pr-xl-5 pr-md-5" >
              <div class="red"></div>
            </v-col>
          </v-row>
        
        
  <v-card elevation="0" pa-0>
    <v-tabs
       hide-slider
      class="pt-5 "
      
    >
      <v-tab  v-for="item in items1"
        :key="item"   class="tab15 ml-3 rounded-pill" active-class="activ-tab">{{item}}</v-tab>
  

     
      <v-tab-item
      class="mt-5 item-tab"
       v-for="item in items1"
      :key="item"
      >
       
          <v-card-text class="pa-10">{{ text }}</v-card-text>
   
      </v-tab-item>
    
    </v-tabs>
  </v-card>
  
  <ProductBar />


    </v-container>
  </v-container>
    
</template>


<script>
import ProductBar from './Bars/ProductBar'
export default {
  components:{
    ProductBar
  },
  data() {
    return {
           tab: null,
        items1: [
          'توضیحات', 'اطلاعات بیشتر', 'نظرات'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [
        {
          text: "صفحه اصلی",
          disabled: false,
          to: "/",
        },
        {
          text: "رسانه",
          disabled: true,
          
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utility/utility.scss";
@import "../../node_modules/flickity/css/flickity.css";


 



.blue , .red {
  height: 90vh;
}

.item-tab{
  background-color: $color-light2 ;
}
.tab15 {
  
  background-color: $color-menu;
  color:$color-light !important ;
  border: none;
  letter-spacing: 0;
  &:hover:after {
    display: none;
    
  }
 
  &:after{
    display: none;
  }
}

.activ-tab{
  border-radius: 50px;
  background-color: $color-header;
 
  border: none;
  letter-spacing: 0;
 
  &:after{
    display: none;
  }
}
.media-header {
  *{letter-spacing: 0 !important;}
  width: 100%;
  height: 122px;
  background-color: $color-gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  h3 {
    font-size: 34px;
    font-weight: 400;
    text-align: center;
    line-height: 40px;
    padding: 5px 0;
  }
}
.image-h{
  height: 450px;
  width: 100%;


/* external css: flickity.css */







}
.carousel {
  background: #FAFAFA;
}

.carousel-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  border-radius: 5px;
  counter-increment: carousel-cell;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  content: counter(carousel-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}
</style>