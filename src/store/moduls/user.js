import axios from '../../../axios.config'
const state = {
  "oneUser": null,
  "cart2": [],
  "users": null,
  "me":{},
};
const getters = {
  ////1

  user: (state) => (id) => {
    return state.users.filter(u => u.id === Number(id))[0]
  },

  me(state){
    return state.me
  }





};

////////////////
const mutations = {
  FETCH_USERS(state, users) {
    state.users = users
  },
  ///اضافه کردن به لیست کاربران
  addToCart2(state, payload) {
    state.users.push(Number(payload))
  },
  ///حذف از لیست کاربران
  removeFromCart2(state, payload) {
    for (const item of state.users) {
      if (item.id === payload) {
        state.users = state.users.filter((n) => { return n != item });
      }

    }
  },
  getusers(state, users) {
    state.users = users
  },
  /////
  me1(state, user){
    state.me = user
  }
};

//////////////////////////

const actions = {
  addToCart2({ commit }, payload) {
    commit('addToCart2', payload)
  },
  ////برای گرفتن همه کاربران
  fetchUser({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("user")
        .then((response) => {
          commit("FETCH_USERS", response.data.data);
          resolve();
        })
        .catch((error) => {
          console.log(error.statusText);
          reject(error)
        });
    });
  },
  /// برای حدف کاربر
  removeFromCart2({ commit }, id) {
    axios.delete('user/' + id)
      .then(() => {
        commit('removeFromCart2', id)
      })
  },
  // برای ویرایش اطلاعات
  updateuser(context, data) {
    return new Promise((resolve, reject) => {
      axios.put('/user/' + data.id, {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        password_confirmation: data.password,
        address: 'khali',

      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
          console.log(data);

        })
    })
  },

  //
  me({commit, getters}){
   
   if( getters.loggedIn ){
    return new Promise((resolve, reject) => {
      axios.get("me",
      {
            headers: {
              Authorization: `Bearer ${getters.token}`,
            },
          })
        .then((response) => {
          commit("me1", response.data.user);
          resolve();
          
        })
        .catch((error) => {
          console.log(error.statusText);
          reject(error)
        });
    });

   }


   
      
    }
  

  


};
export default {
  state, mutations, actions, getters
}