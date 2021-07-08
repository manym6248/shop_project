<template>
  <v-app>
    <dashboard-core-app-bar class="mb16" />

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

.mb16{
  margin-bottom: 120px !important;
}
.v-main {
  padding: 72px 260px 0px 0px !important;
  height: 100%;
   .main__wrap{
    height: 100%;
  }
}

</style>
