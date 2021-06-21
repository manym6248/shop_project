import axios from '../../../axios.config'
const state = {
    token: localStorage.getItem('token') || null,
    " oneUser":null,
    loginuser:null
   
  };
  const getters = {
 
    loggedIn(state) {
      return state.token !== null
    },
    token(){
      return state.token
    }

  
  
  };
  const mutations = {

    destroyToken(state) {
        state.token = null
      }, 

    retrieveToken(state, token) {
        state.token = token
      },
      loginuser(state, user) {
        state.loginuser = user
      },

    
  };
  const actions = {
    //برای خروج
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.get('/logout')
            .then(response => {
              localStorage.removeItem('token')
              context.commit('destroyToken')
              resolve(response)
              // console.log(response);
              // context.commit('addTodo', response.data)
            })
            .catch(error => {
              localStorage.removeItem('token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },
   

    //  برای لاگین شدن
    retrieveToken(context, credentials) {

        return new Promise((resolve, reject) => {
          axios.post('/login', {
            email: credentials.email,
            password: credentials.password,
          })
            .then(response => {
              const token = response.data.token;
              localStorage.setItem('token', token);
              context.commit('retrieveToken', token);
           
              resolve(response)
         


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

    //
    

    

    
  };
  export default {
    state, mutations, actions, getters
  }