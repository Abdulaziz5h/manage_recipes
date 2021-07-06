<template>
<div>
    <button type="button" @click="showModal = true" class="px-3 btn btn-secondary">
        {{!recipesDto.id ? 'Add new recipe' : 'Edit recipe' }}
    </button>
    <div v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  {{!recipesDto.id ? 'Add new recipe' : 'Edit recipe' }}
                </h5>
                <button
                  type="button"
                  class="close btn"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" @click="showModal = false"
                    >&times;</span
                  >
                </button>
              </div>
              <form @submit.prevent="submitRecipeForm()">
                <div class="modal-body">
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
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="showModal = false"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-success">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  data: () => ({
    valid: null,
    showModal: false
  }),
  computed: {
    ...mapState({
      recipesDto: state => state.recipes.recipesDto
    }),
  },
  methods: {
    ...mapActions(["setNewRecipe"]),
    submitRecipeForm() {
      this.valid = true
      if(this.recipesDto.name.trim().length && this.recipesDto.description.trim().length && this.recipesDto.image) {
        this.valid = false
        this.setNewRecipe(this.recipesDto)
        this.showModal = false
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
  watch: {
    showModal(showModal) {
      if(!showModal) {
        this.$store.commit('Reset_Recipe_Dto')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>