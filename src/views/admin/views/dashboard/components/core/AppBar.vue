<template>
<div>
   <v-app-bar
    id="app-bar"
    absolute
    app
   
    flat
    height="42"
  >
  <Headermenu />
   </v-app-bar>
 <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
    class="mt-11"
  >
    <v-btn
      class="ml-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
      
    >
      <v-icon v-if="value">
        mdi-menut
      </v-icon>

      <v-icon v-else>
        mdi-menu
      </v-icon>
    </v-btn>

    <v-toolbar-title 
    
      class="hidden-sm-and-down font-weight-light "
      v-text="$route.name"
    />

    <v-spacer />

    <v-text-field
      label="'جستجو'"
      color="secondary"
      hide-details
    
    >
      <template
        v-if="$vuetify.breakpoint.mdAndUp"
        v-slot:append-outer
      >
        <v-btn
          class="mt-n2 mr-0 ml-4"
          elevation="1"
          fab
          small
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/admin"
    >
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          class="ml-2"
          min-width="0"
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-badge
            color="red"
            overlap
            bordered
          >
            <template v-slot:badge>
              <span>5</span>
            </template>

            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list
        :tile="false"
        nav
      >
        <div>
          <app-bar-item
            v-for="(n, i) in notifications"
            :key="`item-${i}`"
          >
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>

    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/pages/user"
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
    class="mt16"
    
  >
  <Menu  />
  </v-app-bar>
</div>
 
 
  

</template>

<script>
  // Components
  import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations } from 'vuex'
  import Menu from '../../../../../../views/Menu.vue'
  import Headermenu from '../../../../../../components/Headermenu'

  export default {
    name: 'DashboardCoreAppBar',

    components: {
      Menu,
      Headermenu,
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                }, this.$slots.default)
              },
            },
          })
        },
      },
    },

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        'You\'re now friends with Andrew',
        'Another Notification',
        'Another one',
      ],
    }),

    computed: {
      ...mapState(['drawer']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>
<style lang="scss">

.mt16{
  margin-top:117px !important ; 
  .v-toolbar__content{
     border: none !important;
  }
 
}


.v-badge__wrapper{
  span{
    inset: auto calc(100% - 10px) calc(100% - 8px) auto;
    padding: 7px 4px !important;
}
}

.menue{
  .box-category{
    display: none;
  }
.mainmanue12{
  .items{
    .item{
      
       transition:0.5s;
       .link{
         padding: 20px 24px !important; 
       }
      &.active1{
        .link{
            border-bottom: 2px solid;
        }
       
      }
      &:hover{
       transition:0.5s;
        .link{
          border-bottom: 2px solid ;
           

        }
        
      }
    }
  }
}
 .main-items-card{
        right: 0;
        display: none;
        position: absolute;
        top: 40px;
        width: 100%;
        z-index: 20000  !important;
        height: 300px;
        .items2{
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .items3{
          display: flex;
          flex-direction: column;
          .itemm{
            display: flex;
            flex-direction: row;
          
          }
        }
        
      }

     


}


</style>
