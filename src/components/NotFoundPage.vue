<template>
  <v-container fluid class="pa-0">
    <div class="success1">
      <v-container
        tag="section"
        class="px-xl-16 px-lg-16 px-md-8 px-sm-4 pt-0"
        style="height: 100%"
      >
        <v-row
          class="mt-0 px-xl-8 px-lg-8 px-md-2 px-sm-1"
          justify="center"
          style="height: 100%"
        >
          <v-col cols="12" md="7" sm="6" class="px-5">
            <div class="not-card">
              <v-card shaped class="card6 pa-4 my-0  mt-5">
                <v-card-text class="pa-5 pa-sm-2" style="height: 100%">
                    <div class="tex">
 
                  <h1 class=" text--primary">
                  <p class="mt-2 mb-0">
                      <v-icon large color="red" class="mb-3" >mdi-alert</v-icon>
                      OooOPS! , PAGE  NOT FOUND</p>
                  </h1>
                   
                  <h3 class="ml-12 ml-lg-12 ml-xl-12 ml-sm-0">
                   We can't see to find apage you
                  are looking for
                  </h3>
                <div class="pa-3"/>
                  <v-btn class="ma-0"  color="primary " @click="gohome()"> back to home </v-btn>
                    </div>
                
              
                </v-card-text>
                
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="5" sm="6" class="px-5 svg1">
            <div class="img-log">
              <v-img
                src="../assets/img/svg/notfound/undraw_page_not_found_su7k.svg"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
    methods:{
        gohome(){
            this.$router.push('/');
        }
    }
};
</script>

<style lang="scss" >
@import "../assets/scss/utility/utility.scss";
.success1 {
  height: 100vh;
  background-color: $color-menu;
  .not-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    .card6 {
      direction: ltr;
      font-size: 1.3em sans-serif;
      width: 100%;
      height: 40%;
      .tex{
          height: 100%;
           display: flex;
      flex-direction: column;
      justify-content: center;
    
      }
   

      h1{
          letter-spacing: 3;
          padding: 4px;
      }
      h3{
            letter-spacing: 2;
      }
    }
  }
}
</style>