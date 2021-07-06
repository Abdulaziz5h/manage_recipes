<template>
  <div class="card mb-3">
    <img
      :src="recipe.image"
      height="240"
      style="object-fit: cover"
      class="card-img-top"
      :alt="recipe.name"
    />
    <div class="card-body">
      <h5 class="card-title">{{ recipe.name }}</h5>
      <p class="card-text">
        {{ recipe.description.slice(0, 200) }}
        {{ recipe.description.length > 200 ? "..." : "" }}
      </p>
      <router-link class="btn btn-outline-info" :to="'/recipes/' + recipe.id">Show More</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recipe: {
      required: true,
      type: Object
    }
  }
}
</script>