<template>
  <div
    class="container login_container vh-100 d-flex align-items-center justify-content-center"
  >
    <form class="form-signin" @submit.prevent="localeSignUp()">
      <div class="card mx-auto" style="width: 360px">
        <div class="card-body">
            <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
            <div class="form-group mb-3">
              <label for="username" class="sr-only">User name</label>
              <input v-model="form.username" type="text" class="form-control" id="username" />
              <small class="text-danger" v-if="valid && form.username.trim().length < 5">username is required and min length is 5 characters</small>
            </div>
            <div class="form-group mb-3">
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                v-model="form.password"
                type="password"
                class="form-control"
              />
              <small class="text-danger" v-if="valid && form.password.trim().length < 5">password is required and min length is 5 characters</small>
            </div>
            <router-link to="/sign-in" class="link" style="text-decoration: none">
              already have an account
            </router-link>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary" type="submit">
              Sign up
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
    ...mapActions(["signUp"]),
    localeSignUp() {
      this.valid = true
      if (this.form.password.trim().length >= 5 && this.form.username.trim().length >= 5) {
        this.valid = false
        this.signUp(this.form)
      }
    }
  }
};
</script>
