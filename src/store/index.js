import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ramens:[],
    freeword:"",
    apiUrl:"https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=&hit_per_page=9",
    user: {},
    status: false
  },
  mutations: {
    setRamen(state, payload){
      state.ramens = payload;
    },
    onAuthStateChanged(state, user){
      state.user = user;
    },
    onUserStatusChanged(state, status){
      state.status = status;
    }
  },
  actions: {
    async getRamen({state, commit}, freeword){
      try {
        let response = await axios.get(`${state.apiUrl}` + '&freeword=' + freeword);
        commit("setRamen", response.data.rest);
        console.log(response.data.rest)
      } catch(error) {
        commit("setRamen", []);
      }
    },
  },
  modules: {
  },
  getters: {
    user(state){
      return state.user;
    },
    isSignedIn(state){
      return state.status
    }
  }
})