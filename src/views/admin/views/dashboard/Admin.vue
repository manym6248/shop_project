<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-view />

    <dashboard-core-settings />
  </v-app>
</template>

<script>
    
  export default {
   
    name: 'DashboardIndex',
    components: {
      DashboardCoreAppBar: () => import('./components/core/AppBar'),
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      DashboardCoreSettings: () => import('./components/core/Settings'),
      DashboardCoreView: () => import('./components/core/View'),
     
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
<style lang="scss" scoped>
@import "../../../../assets/admin/sass/overrides.sass";
@import "../../../../assets/admin/sass/variables.scss";
@import "~vuetify/src/styles/main.sass";

</style>
