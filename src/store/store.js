import Vue from 'vue'
import Vuex from 'vuex'

import login from './moduls/login'
import admin from './moduls/admin'
import products from './moduls/products'
import user from './moduls/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displayN:false,
  
    //admin
    
    

   
  },
  mutations: {

    toggleN(state){
      state.displayN = !state.displayN;
    },
    

  

  },
  actions: {
  },
  modules: {
    login,
    admin,
    products,
    user
  }
})
