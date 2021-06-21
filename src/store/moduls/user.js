// import axios from '../../../axios.config'
const state = {
    " oneUser":null,
    "cart2": [],
    // "users": [
    //   {
    //     "id": 3,
    //     "name": "many",
    //     "userName":"many45646",
    //     "password":"1355556djhfjd",
    //     "email":"m45ny545@yhoooo.com",
    //     "img": require("../../assets/login.jpg"),
    //     "phone":"099999999",
    //     "userlevel":"admin", //=> admin or normalUser =>normal user just can buying but can't access to admin panel
    //     "biography": "I'm frontend developer",
    //   },
    //   {
    //     "id": 5,
    //     "name": "many2",
    //     "userName":"many456456",
    //     "password":"13djhfjd",
    //     "email":"m45n545y545@yhoooo.com",
    //     "img": require("../../assets/login.jpg"),
    //     "phone":"09999993333",
    //     "userlevel":"admin", //=> admin or normalUser =>normal user just can buying but can't access to admin panel
    //     "biography": "I'm frontend developer",
    //   }
     
      
   
    // ]
   
  };
  const getters = {
    ////1
  
    user: (state) => (id) => {
      return state.users.filter(u => u.id === Number(id))[0]
    },
  
  
  
  };
  const mutations = {
    ///اضافه کردن به لیست کاربران
    addToCart2 (state, payload) {
      state.users.push( Number(payload) )
    },
    ///حذف از لیست کاربران
    removeFromCart2 (state, payload) {
      let indexToDelete = state.users.indexOf( Number(payload) );
      state.users.splice(indexToDelete, 1)
    },
    
  };
  const actions = {
    addToCart2({ commit }, payload) {
      commit('addToCart2', payload)
      
    },
    removeFromCart2({ commit }, payload) {
      commit('removeFromCart2', payload)
    
    },

  
  
   
  };
  export default {
    state, mutations, actions, getters
  }