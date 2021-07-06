import { clearUserDate, checkUserAuth, setUserDate, userFound, appendUser } from "@/core/util";

import router from "@/router";

export default {
  state: {
    error: '',
    success: '',
    notfound: ''
  },
  mutations: {
    Log_Out() {
      clearUserDate()
      router.push('/sign-in')
    },
    Sign_In(state, payload) {
      setUserDate(payload)
      router.push('/home')
      state.success = 'You are welcome!'
      setTimeout(() => {
        state.success = ''
      }, 2000)
    },
    Sign_UP(state, payload) {
      setUserDate(payload)
      router.push('/home')
      state.success = 'You are welcome!'
      setTimeout(() => {
        state.success = ''
      }, 2000)
    },
    Not_Exest(state) {
      state.error = 'Password or Username is wrong'
      setTimeout(() => {
        state.error = ''
      }, 2000)
    },
    User_Found(state) {
      state.notfound = 'user name is not avaliable'
      setTimeout(() => {
        state.notfound = ''
      }, 2000)
    }
  },
  actions: {
    signIn({ commit }, payload) {
      if (checkUserAuth(payload)) {
        commit("Sign_In", payload);
      } else {
        commit("Not_Exest", payload);
      }
    },
    signUp({commit}, payload) {
      if(!userFound(payload)) {
        appendUser(payload)
        commit('Sign_UP', payload)
      } else {
        commit('User_Found')
      }
    }
  }
};
