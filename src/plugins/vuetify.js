import Vue from 'vue';
import Vuetify from 'vuetify/lib';






const theme = {
  primary: '#2196f3',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',
  success: '#2196F3',
  cartheader: '#faebd7',
  colorheader: '#f8d4db',
  colormenu: '#b7dbce',
 
  colorheader2: '#f3f7fa',
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

