const state = {
    loggingIn: false,
    loginError: null,
    loginSuccessful: false
};
const getters = {};
const mutations = {
    loginStart: state => state.loggingIn = true,
    loginStop: (state, errorMessage) => {
        state.loggingIn = false;
        state.loginError = errorMessage;
        state.loginSuccessful = !errorMessage;
    }
};
const actions = {
    doLogin({ commit }, loginData) {
        commit('loginStart');

        this.$http.post('https://reqres.in/api/login', {
            ...loginData
        })
            .then(() => {
                commit('loginStop', null)
            })
            .catch(error => {
                commit('loginStop', error.response.data.error)
            })
    }
};
export default {
    state, mutations, actions, getters
}