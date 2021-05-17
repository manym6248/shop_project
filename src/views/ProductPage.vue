<template>
    <v-container class="pa-0" style="height: 100%">
      <v-row class="ma-0 pa-0" style="height: 100%">
            <v-col cols="12" md="3" class="px-1 pl-4 py-0  delet" >
<div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ><div class="b"></div>
    </v-pagination>
  </div>
               
        </v-col>
        <v-col cols="12" md="9" class="px-1 pr-3 py-0" style="height: 100%">
          <div class="b"></div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    export default {
        data(){
          return{
            page:6,
          }
        }
    }
</script>

<style lang="scss" >
.b{
    width: 100%;
    height: 500px;
    background-color: brown;
}

</style>