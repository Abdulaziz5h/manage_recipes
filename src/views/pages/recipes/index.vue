<template>
  <div>
    <div class="bg-light text-center p-2 border">
      <div class="container">
        <div class="d-flex align-items-center" style="padding-left: 6rem!important;">
          <h1 class="mx-auto">Recipes</h1>
          <router-link to="/home" class="btn btn-outline-secondary">Back Home</router-link>
        </div>
      </div>
    </div>
    <div class="container py-3">
      <actionModel />
      <div class="row pt-3">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="(recipe, index) in activeRecipes"
          :key="index"
        >
          <recipeCard :recipe="recipe" />
        </div>
        <div class="col-12 d-flex justify-content-center pt-3">
          <pagination :pageLength="9" :items="recipes" v-model="activeRecipes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import recipeCard from "./components/recipe-card";
import actionModel from "./components/action-model";
import pagination from "@/core/components/pagination.vue";
export default {
  components: {
    recipeCard,
    pagination,
    actionModel
  },
  data: () => ({
    activeRecipes: [],
  }),
  computed: {
    ...mapState({
      recipes: state => state.recipes.recipes,
    })
  },
  created() {
    this.getRecipes();
  },
  methods: {
    ...mapActions(["getRecipes"]),
  },
};
</script>