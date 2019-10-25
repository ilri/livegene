<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand>
        <img src="./assets/logo.png" alt="logo" height="35">
        <span class="h3 ml-3 my-0">LiveGene</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'timelines' }" exact-active-class="active" class="btn btn-info">
              Piechart
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'timelines' }" exact-active-class="active" class="btn btn-info">
              Partners
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'timelines' }" exact-active-class="active" class="btn btn-info">
              Staff&nbsp;Roles
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{name: 'timelines'}" exact-active-class="active" class="btn btn-info">
              Timeline
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated,
      projects: state => state.projects
    })
  },
  created() {
    this.$store.dispatch('getJWTAction');
    //this.$store.dispatch('authenticate');
    this.$store.dispatch('getProjectsAction');
  }
};
</script>