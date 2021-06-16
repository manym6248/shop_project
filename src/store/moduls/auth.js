import axios from '../../../axios.config'
const state = {
    token: localStorage.getItem('access_token') || null,
   
  };
  const getters = {
 
  
  
  
  };
  const mutations = {
    retrieveToken(state, token) {
        state.token = token
      },
    
  };
  const actions = {

    retrieveToken(context, credentials) {

        return new Promise((resolve, reject) => {
          axios.post('/login', {
            username: credentials.username,
            password: credentials.password,
          })
            .then(response => {
              const token = response.data.access_token
  
              localStorage.setItem('access_token', token)
              context.commit('retrieveToken', token)
              resolve(response)
              // console.log(response);
              // context.commit('addTodo', response.data)
            })
            .catch(error => {
              console.log(error)
              reject(error)
            })
          })
      },
  
  // فرم ثبت نام
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/user', {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
          password_confirmation:data.password,
          address:'khali',
          
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