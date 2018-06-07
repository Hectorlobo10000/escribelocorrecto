import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loading: null,
    statusCode: null,
    data: {}
  },
  mutations: {
    data: (state, data) => {
      state.data = data
    },
    loading: (state, status) => {
      state.loading = status
    },
    statusCode: (state, status) => {
      state.statusCode = status
    }
  },
  actions: {
    getTheme: (context, params) => {
      axios.get(`https://api-escribelo-correcto.herokuapp.com/api/chapters/${params.chapter}/themes/${params.theme}`)
        .then(response => {
          context.commit('loading', true)
          context.commit('statusCode', response.status)
          context.commit('data', response.data)
          context.commit('loading', false)
        })
    }
  }
})
