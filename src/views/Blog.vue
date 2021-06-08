<template>
  <v-container fluid class="pa-0">
    <div class="media-header mb-8">
      <h3>وبلاگ</h3>
      <v-breadcrumbs large :items="items" divider="/"></v-breadcrumbs>
    </div>

  <Edituserinformation />
   
 

  </v-container>
</template>
<script>

import Edituserinformation from '../components/Edituserinformation/Edituserinformation'
export default {
  components:{
    Edituserinformation
  },
   
    
   

  data() {


    return {
      products : this.$store.state.products.products,
     
      items: [
        {
          text: "صفحه اصلی",
          disabled: false,
          to: "/",
        },
        {
          text: "وبلاگ",
          disabled: true,
        },
      ],
    };
  },

  created(){
  
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/utility/utility.scss";
.media-header {
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


* { box-sizing: border-box; }

body { font-family: sans-serif; }

.carousel {
  background: #EEE;
}

.carousel-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  border-radius: 5px;
  counter-increment: gallery-cell;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}

</style>