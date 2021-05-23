import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Flickity from 'vue-flickity';
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'





/////////////////////
import vuetify from './plugins/vuetify';
import 'es6-promise'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'


///////////////////
import axiosInstance from '../axios.config';


 //Vue.$http.options.root = 'http://localhost:8085'
Vue.prototype.$http = axiosInstance;

//////////////////////////



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  Flickity,
  Vuelidate,

  VueResource,
  

  


  render: h => h(App)
}).$mount('#app')
