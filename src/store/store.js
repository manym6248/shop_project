import Vue from 'vue'
import Vuex from 'vuex'


import admin from './moduls/admin'
import products from './moduls/products'
import user from './moduls/user'
import auth from './moduls/auth'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displayN: false,

    //admin




  },
  mutations: {

    toggleN(state) {
      state.displayN = !state.displayN;
    },




  },
  getters:{},
  actions: {
  },
  modules: {

    admin,
    products,
    user,
    auth

  }
})
