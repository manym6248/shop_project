import Vue from 'vue';
import Vuetify from 'vuetify/lib';





const theme = {
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',
}


Vue.use(Vuetify);

export default new Vuetify({
    rtl: true,
   

    icons: {
     iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      },
     
      theme: {
        themes: {
          dark: theme,
          light: theme,
        },
      },

   
});

