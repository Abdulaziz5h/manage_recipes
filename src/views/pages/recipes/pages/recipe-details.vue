<template>
  <div class="container py-5">
    <div class="card">
       <img
          :src="recipesDto.image"
          height="300"
          :alt="recipesDto.name"
        />
        <form @submit.prevent="submitRecipeForm()">
          <div class="card-body">
            <div class="form-group mb-3">
              <label for="name" class="sr-only">Recipe name</label>
              <input type="text" v-model="recipesDto.name" id="name" class="form-control">
              <small class="text-danger" v-if="valid && !recipesDto.name.trim().length">Recipe name is required</small>
            </div>
            <div class="form-group mb-3">
              <label for="description" class="sr-only">Recipe description</label>
              <textarea v-model="recipesDto.description" id="description" class="form-control"></textarea>
              <small class="text-danger" v-if="valid && !recipesDto.description.trim().length">Recipe description is required</small>
            </div>
            <div class="form-group mb-3">
              <label for="file" class="sr-only">Recipe image</label>
              <input type="file" @change="setRecipeImage" id="file" class="form-control">
              <small class="text-danger" v-if="valid && !recipesDto.image">Recipe image is required</small>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn-danger btn" @click="deleteRecipe(id)">Delete</button>
            <router-link class="btn-outline-secondary btn mx-3" to="/recipes">Go back</router-link>
            <button class="btn-success btn" type="submit">Save</button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    id: String
  },
  data: () => ({
    valid: null
  }),
  computed: {
    ...mapState({
      recipesDto: state => state.recipes.recipesDto
    })
  },
  created() {
    this.getRecipeById(this.id);
  },
  methods: {
    ...mapActions(["deleteRecipe", "getRecipeById", "updateRecipe"]),
    submitRecipeForm() {
      console.log({...this.recipesDto}, this.recipesDto.name.trim().length)
      this.valid = true
      if(this.recipesDto.name.trim().length && this.recipesDto.description.trim().length && this.recipesDto.image) {
        this.valid = false
        this.updateRecipe(this.recipesDto)
      }
    },
    setRecipeImage(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = (() => {
        this.recipesDto.image = reader.result
      }).bind(this);
    }
  },
  beforeDestroy() {
    this.$store.commit('Reset_Recipe_Dto')
  }
};
</script>
