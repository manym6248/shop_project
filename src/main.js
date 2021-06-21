import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import Flickity from "vue-flickity";
import InnerImageZoom from "vue-inner-image-zoom";
import VueLazyload from 'vue-lazyload'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import 'core-js';
import 'core-js/features/array/from';








/////////////////////
import vuetify from './plugins/vuetify';
import 'es6-promise'
import './plugins/base'
import './plugins/chartist'



///////////////////
import axiosInstance from '../axios.config';
//Vue.$http.options.root = 'http://localhost:8085'
Vue.prototype.$http = axiosInstance;
//////////////////////////
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name:'Login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'User',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  Flickity,
  Vuelidate,
  InnerImageZoom,
  VueLazyload,
  VueResource,
  render: h => h(App)
}).$mount('#app')
