import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})
Vue.use(Vuex)

const state = {
  news: []
}
const actions = {
  dataNews(state,payload){
    console.log('inipayload dari dataNews',payload)
    state.news = payload
  }
}
const mutations = {
  getNews({commit},dataN){
    http.get('/blog/',dataN)
    .then(({data})=>{
      console.log('ini data',data);
      commit('dataNews',data)
    })
    .catch(err=>{
      console.error(err)
    })
  }
}

const store = new Vuex.store({
  state,
  mutations,
  actions
})
export default store
