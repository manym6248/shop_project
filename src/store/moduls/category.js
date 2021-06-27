import axios from '../../../axios.config'

const state = {
  "oneUser": null,
  "cart2": [],
  "categories": null
};
const getters = {
  ////1

  category: (state) => (id) => {
    return state.categories.filter(u => u.id === Number(id))[0]
  },





};

////////////////
const mutations = {



  //////
  fetchcategory(state, categories) {
    state.categories  = categories 
  },
  ///اضافه کردن به لیست کاربران
  addToCart2(state, payload) {
    state.users.push(Number(payload))
  },
  ///حذف از لیست دسته بندی ها
  removecategory(state, payload) {
    for (const item of state.categories) {
      if (item.id === payload) {
        state.categories = state.categories.filter((n) => { return n != item });
      }

    }
  },
  getusers(state, users) {
    state.users = users
  }
};

//////////////////////////

const actions = {
  addToCart2({ commit }, payload) {
    commit('addToCart2', payload)
  },


  newCategoy(context, data) {
    return new Promise((resolve, reject) => {
      axios.post('/category/create',{
        name: data.name, 
      })
        .then(response => {
          resolve(response)
          console.log(response, data.name);
        })
        .catch(error => {
          reject(error)
          console.log(data);
       
        })
    })
  },
  ////برای گرفتن همه دسته بندی ها
  fetchcategory({ commit }, payload) {
    commit('fetchcategory', payload)
  },
  /// برای حدف دسته بندی
  removecategory({ commit }, id) {
    axios.delete('category/' + id)
      .then(() => {
        commit('removecategory', id)
      })
  },
  // برای ویرایش اطلاعات
  updatecategory(context, data) {
    return new Promise((resolve, reject) => {
      axios.put('/category/' + data.itemId, {
        name: data.name,
    

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


};
export default {
  state, mutations, actions, getters
}