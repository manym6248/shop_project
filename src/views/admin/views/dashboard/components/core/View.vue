<template>
  <v-main>
    <router-view />
    <dashboard-core-footer />
  </v-main>
</template>

<script>
import { VCard } from 'vuetify/lib'

  export default {
    name: 'DashboardCoreView',
    extends: VCard,
    components: {
      DashboardCoreFooter: () => import('./Footer'),
     
    },
  }
</script>
