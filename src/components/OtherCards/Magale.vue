<template>


  <a href="#">
    <v-card
      :loading="loading"
      class="mx-auto my-0 magale mb-1"
      max-width="428px"
      height="100%px"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
      class="rounded"
        height="220px"
        src="../../assets/img/svg/2/undraw_add_to_cart_vkjp.svg"
      ></v-img>

     

      <v-card-text style=" height:130px">
        

        <div class="my-0 subtitle-1"> 
          <h5>   ساعت دیواری</h5>
       
         </div>
        <div class="my-0 mt-1 subtitle-1 "> با روز جدید قدرت جدید می آید </div>

        

        
      
        
      </v-card-text>
    </v-card>
  </a>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
  
};
</script>

<style lang="scss"  >
@import '../../assets/scss/utility/utility.scss';
.magale {
   box-shadow: none !important;

  

 .v-card__text{
   *{
     font-size: 1.2em;
   }
     
 }


  &:hover {
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12) !important;

   
  }

@keyframes fade-in {
  
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
  
}


}
</style>