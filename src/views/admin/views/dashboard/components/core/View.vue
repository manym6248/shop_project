<template>
  <v-main>
    <router-view class="vmainwrap" />
    <!-- <dashboard-core-footer  /> -->
  </v-main>
</template>

<script>
import { VCard } from 'vuetify/lib'

  export default {
    name: 'DashboardCoreView',
    extends: VCard,
    components: {
      // DashboardCoreFooter: () => import('./Footer'),
     
    },
  }
</script>
<style lang="scss" scoped>

.v-main{
 background-color: #fafcff;
.vmainwrap{
  padding: 40px 180px !important;
 
  height: 100%;
}}



</style>
