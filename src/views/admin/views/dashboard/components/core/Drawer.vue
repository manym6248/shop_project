<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-list-item>
        <v-list-item-avatar class="align-self-center" color="white" contain>
          <v-img
            src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
            max-height="30"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="display-1" v-text="profile.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav>
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template v-for="(item, i) in computedItems">
        <base-item-group v-if="item.children" :key="`group-${i}`" :item="item">
          <!--  -->
        </base-item-group>

        <base-item v-else :key="`item-${i}`" :item="item" />
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>

    <template v-slot:append>
      <base-item
        :item="{
          title: 'خروج',
          icon: 'mdi-power-standby',
          to: '/',
        }"
      />
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "DashboardCoreDrawer",

  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    title: "many444",

    items: [
      {
        icon: "mdi-view-dashboard",
        title: "داشبورد",
        to: "/admin",
      },
      // {
      //   icon: "mdi-account",
      //   title: "کاربر",
      //   to: "/pages/user",
      // },
      {
        icon: "mdi-account",
        title: "کاربران",
        to: "/products/addProduct",
        group: "/usersite",
        children: [
          {
            icon: "mdi-plus-box",
            title: "ایجاد کاربر جدید",
            to: "newuser",
          },
          {
            icon: "mdi-clipboard-edit-outline",
            title: "ویرایش و حذف کاربران",
            to: "edituser",
          },
        ],
      },

      {
        icon: "mdi-cart-outline",
        title: " محصولات",
        to: "/products/addProduct",
        group: "/products",
        children: [
              {
        icon: "mdi-buffer",
        title: "دسته بندی",
        to: "categorized",
      },
          {
            icon: "mdi-plus-box",
            title: "ایجاد محصول",
            to: "addProduct",
          },
          {
            icon: "mdi-clipboard-edit-outline",
            title: "ویرایش و حذف محصول",
            to: "editProduct",
          },
       
        ],
      },

     
     
      // {
      //   title: "جداول",
      //   icon: "mdi-clipboard-list-outline",
      //   to: "/tables/regular-tables",
      // },
      {
        title: "نظرات",
        icon: "mdi-comment-multiple-outline",
        to: "/Comments/comments",
      },
     
      {
        title: "google",
        icon: "mdi-map-marker",
        to: "/maps/google-maps",
      },
      {
        title: "notifications",
        icon: "mdi-bell",
        to: "/components/notifications",
      },
    ],
  }),

  computed: {
    ...mapState(["barColor", "barImage"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
    computedItems() {
      return this.items.map(this.mapItem);
    },
    profile() {
      return {
        avatar: true,
        title: this.avatar,
      };
    },
  },

  methods: {
    mapItem(item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: item.title,
      };
    },
  },
};
</script>

<style lang="sass">
@import '~vuetify/src/styles/tools/_rtl.sass'
.v-navigation-drawer__content

  overflow: scroll
  overflow-x: hidden

  &::-webkit-scrollbar
    width: 12px

  &::-webkit-scrollbar-track
    -webkit-box-shadow: inset 0 0 6px  rgba(0, 0, 0, 0.5)
    border-radius: 0px 0px 10px 10px

  &::-webkit-scrollbar-thumb
    border-radius: 10px
    -webkit-box-shadow: inset 0 0 10px rgba(255, 255, 255, 1)

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
