const state = {
    "cart": [],
    "users": [
      {
        "id": 3,
        "name": "many",
        "userName":"many45646",
        "password":"1355556djhfjd",
        "email":"m45ny545@yhoooo.com",
        "images": "../../assets/login.jpg",
        "phone":"099999999",
        "userlevel":"admin", //=> admin or normalUser =>normal user just can buying but can't access to admin panel
        "biography": "I'm frontend developer",
      },
     
      
   
    ]
  };
  const getters = {
    ////1
  
    user: (state) => (id) => {
      return state.users.filter(u => u.id === Number(id))[0]
    },
    cartItems: (state) => {
      return state.cart.map(
        itemId => state.users.find(
            user => user.id === itemId
        )
      )
    },
  
  
  };
  const mutations = {
    ///اضافه کردن به لیست کاربران
    addToCart (state, payload) {
      state.cart.push( Number(payload) )
    },
    ///حذف از لیست کاربران
    removeFromCart (state, payload) {
      let indexToDelete = state.cart.indexOf( Number(payload) );
      state.cart.splice(indexToDelete, 1)
    },
     /// کاهش تعداد افراد موجود در لیست کاربران
    decrementUserInventory(state, payload) {
      let user = state.users.find(user => user.id === Number(payload))
      user.quantity--;
    },
     /// افزایش تعداد افراد موجود در لیست کاربران 
    incrementUserInventory(state, payload) {
      let user = state.users.find(user => user.id === Number(payload))
      user.quantity++;
    }
  
  };
  const actions = {
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
      commit('decrementUserInventory', payload)
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('incrementUserInventory', payload)
    },
  
  };
  export default {
    state, mutations, actions, getters
  }