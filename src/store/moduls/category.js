import axios from '../../../axios.config'


const state = {
  "oneUser": null,
  "cart2": [],
  "categories": [],
};
const getters = {
  ////1

  category: (state) => (id) => {
    return state.categories.filter(u => u.id === Number(id))[0]
  },
  categories(state) {
    return state.categories
  },
 
  subcategories(state) {
    var category = []
    for (const item of state.categories) {
      if (item.parent_id != 0) {
        category.push(item)
      }
    }
    return category
  },
  categories1(state) {
    var category = [{
      id: 0,
      name: "دسته اصلی"
    },]
    for (const item of state.categories) {
      if (item.parent_id === 0) {
        category.push(item)
      }
    }
    return category
  }
};
const mutations = {
  fetchcategory(state, categories) {
    state.categories = categories;

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
  },
};
const actions = {
  addToCart2({ commit }, payload) {
    commit('addToCart2', payload)
  },
  newCategoy(context, data) {
    return new Promise((resolve, reject) => {
      axios.post('/category', {
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
  newSUBCategoy(context, data) {
    return new Promise((resolve, reject) => {
      axios.post('/category', {
        name: data.name,
        parent_id: data.id
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
  ////برای گرفتن همه دسته بندی ها
  fetchcategory({ commit }) {
    axios.get("/category").then((res) => {
      commit('fetchcategory', res.data.data)
    });
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
};
export default {
  state, mutations, actions, getters
}