<template>
  <div class="jumbotron">
    <h2 class="text-center">Login</h2>
    <form v-on:submit.prevent="handleAuthentication">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" name="username"
               class="form-control"
               v-bind:class="{ 'is-invalid': submitted && !username }" />
        <div v-show="submitted && !username" class="invalid-feedback">
          Username is required
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" v-model="password" name="password"
               class="form-control"
               v-bind:class="{ 'is-invalid': submitted && !password }" />
        <div v-show="submitted && !password" class="invalid-feedback">
          Password is required
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" v-bind:disabled="loading">Login</button>
        <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
      </div>
      <div v-if="error" class="alert alert-danger">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      returnUrl: '',
      error: ''
    };
  },
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated
     })
  },
  methods: {
    ...mapActions(['authenticate', 'logout']),
    async handleAuthentication(e) {
      this.submitted = true;
      const { username, password } = this;

      // stop here if form is invalid
      if (!(username && password)) {
        return;
      }

      this.loading = true;

      await this.authenticate({
        username: username,
        password: password
      }).catch(err => {
        this.error = err;
        this.loading = false;
      });

      if (this.authenticated) {
        this.$router.push(this.returnUrl);
      }
    }
  },
  created() {
    this.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.$route.query.returnUrl || "/";
  }
};
</script>
