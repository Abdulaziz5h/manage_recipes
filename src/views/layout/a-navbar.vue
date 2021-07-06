<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container">
      <a class="navbar-brand" href="#">Recipes</a>
      <button class="btn btn-outline-secondary" @click="$store.commit('Log_Out')">
        Log out
      </button>
    </div>
  </nav>
</template>