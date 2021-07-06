import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from "./auth";
import recipes from "./recipes";

const store = new Vuex.Store({
  modules: {
    auth,
    recipes
  }
})

export default store
