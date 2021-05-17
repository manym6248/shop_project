import Vue from 'vue'
import Vuex from 'vuex'

import login from './moduls/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gaitem:Boolean,
    manay:'455',
    //admin
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,

   
  },
  mutations: {
    change(state){
      state.gaitem = !state.gaitem
      console.log( state.gaitem);
    },

    //admin
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },

  },
  actions: {
  },
  modules: {
    login,
  }
})
