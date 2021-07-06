<template>
  <div id="app">
    <router-view/>
    <div class="auth-alert alert alert-danger" v-if="error">{{error}}</div>
    <div class="auth-alert alert alert-success" v-if="success">{{success}}</div>
    <div class="auth-alert alert alert-warning" v-if="notfound">{{notfound}}</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      success: state => state.auth.success,
      error: state => state.auth.error,
      notfound: state => state.auth.notfound
    })
  }
}
</script>
<style lang="scss" scoped>
.auth-alert {
  transition: .4s;
  position: fixed;
  bottom: 40px;
  left: 40px;
}
</style>
