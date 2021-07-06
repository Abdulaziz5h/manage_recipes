import { USER_DATA } from "@/core/auth";
import { users, recipes } from "@/core/data.js";

export const getUserDate = () => {
  return localStorage.getItem(USER_DATA)
}
export const setUserDate = (user) => {
  return localStorage.setItem(USER_DATA, JSON.stringify(user))
}
export const clearUserDate = () => {
  localStorage.removeItem(USER_DATA)
}
export const isLoggedIn = () => {
  return !!localStorage.getItem(USER_DATA)
}
export const checkUserAuth = (currentUser) => {
  return users.find(user => user.username == currentUser.username && user.password == currentUser.password)
}

export const userFound = (currentUser) => {
  return users.findIndex(user => user.username == currentUser.username) != -1
}

export const appendUser = (currentUser) => {
  return users.push(currentUser)
}
async function timeOut() {
  return new Promise(resolve => setTimeout(resolve, 2000))
}
export const getRecipesData = async () => {
  await timeOut()
  return [...recipes]
}

export const appendRecipe = async (recipe) => {
  await timeOut()
  recipe = Object.assign({}, {
    id: recipes.length + 1000,
    name: recipe.name,
    description: recipe.description,
    image: recipe.image
  })
  recipes.push(recipe)
  return {...recipe}
}

export const removeRecipe = async (id) => {
  await timeOut()
  let index = recipes.findIndex(recipe => recipe.id == id)
  recipes.splice(index, 1)
  return true
}
  
export const recipeById = async (id) => {
  await timeOut()
  return recipes.find(recipe => recipe.id == id)
}

export const editRecipe = async (payload) => {
  await timeOut()
  Object.assign(recipes.find(recipe => recipe.id == payload.id), payload)
  return {...payload}
}

