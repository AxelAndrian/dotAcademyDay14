import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,
  state: {
    data: {
      name: [
        {
          id: 1,
          name: 'Axel Andrian'
        },
        {
          id: 2,
          name: 'Mirza Zanuar'
        }
      ],
      count: 0,
      users: []
    },
  },
  mutations: {
    increment(state) {
      state.data.count++
    },
    setUser(state, payload) {
      state.data.users = payload
    }
  },
  actions: {
    getUser({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/users/')
        .then((response) => {
          commit('setUser', response.data)
        })
    }
  },
  getters: {
    usersCount(state) {
      return state.data.users.length
    }
  }
}

export default new Vuex.Store({
  modules: {
    a: moduleA
  }
})
