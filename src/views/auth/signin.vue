<template>
  <div
    class="container login_container vh-100 d-flex align-items-center justify-content-center"
  >
    <form class="form-signin" @submit.prevent="localeSignIn()">
      <div class="card mx-auto" style="width: 360px">
        <div class="card-body">
          <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
          <div class="form-group mb-3">
            <label for="username" class="sr-only">User name</label>
            <input v-model="form.username" type="text" class="form-control" id="username" />
            <small class="text-danger" v-if="valid && !form.username.trim().length">user name is required</small>
          </div>
          <div class="form-group mb-3">
            <label for="password" class="sr-only">Password</label>
            <input v-model="form.password" id="password" type="password" class="form-control" />
            <small class="text-danger" v-if="valid && !form.password.trim().length">password is required</small>
          </div>
          <router-link to="/sign-up" class="link" style="text-decoration: none">
            create account
          </router-link>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" type="submit">
            Sign in
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login_container {
  min-height: 600px;
}
</style>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    valid: null,
    form: {
      username: "",
      password: ""
    }
  }),
  methods: {
    ...mapActions(["signIn"]),
    localeSignIn() {
      this.valid = true
      if (this.form.username.trim().length && this.form.password.trim().length) {
        this.valid = false
        this.signIn(this.form);
      }
    }
  }
};
</script>
