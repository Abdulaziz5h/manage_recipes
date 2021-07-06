import { editRecipe, recipeById, getRecipesData, appendRecipe, removeRecipe } from "@/core/util";
import router from "@/router";
export default {
  state: {
    recipes: [],
    recipesDto: {
      id: 0,
      name: "",
      image: "",
      description:  ''
    }
  },
  mutations: {
    Get_Recipes(state, payload) {
      state.recipes = payload
    },
    Set_New_Recipe(state, payload) {
      state.recipes.unshift(payload)
    },
    Reset_Recipe_Dto(state) {
      Object.assign(state.recipesDto, {
          id: 0,
          name: "",
          image: "",
          description:  ''
        })
    },
    Get_Recipe_By_Id(state, payload) {
      Object.assign(state.recipesDto, payload)
    },
  },
  actions: {
    async getRecipes({commit}) {
      const data = await getRecipesData()
      commit('Get_Recipes', data)
    },
    async setNewRecipe({commit}, payload) {
      const obj = await appendRecipe({...payload})
      commit('Set_New_Recipe', obj)
    },
    async getRecipeById({commit}, id) {
      const data = await recipeById(id)
      commit('Get_Recipe_By_Id', data)
    },
    async deleteRecipe(ctx, id) {
      const res = await removeRecipe(id)
      if(res) {
        router.push('/recipes')
      }
    },
    updateRecipe(ctx, payload) {
        editRecipe({...payload})
    }
  }
}