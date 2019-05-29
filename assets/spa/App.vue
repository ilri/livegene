<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand>
        <img src="./assets/logo.png" alt="logo" height="35">
        <span class="h3 ml-3 my-0">LiveGene</span>
      </b-navbar-brand>

      <b-navbar-toggle v-if="authenticated" target="nav-collapse"></b-navbar-toggle>

      <b-collapse v-if="authenticated" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'timeline' }" exact-active-class="active" class="btn btn-info">
              Piechart
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'dashboard' }" exact-active-class="active" class="btn btn-info">
              Partners
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'login' }" exact-active-class="active" class="btn btn-info">
              Staff&nbsp;Roles
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{name: 'timeline'}" exact-active-class="active" class="btn btn-info">
              Timeline
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <b-button variant="danger" v-on:click="logout">Logout</b-button>
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
      authenticated: state => state.auth.authenticated
    })
  },
  methods: {
    logout() {
      window.location.reload();
    }
  }
};
</script>