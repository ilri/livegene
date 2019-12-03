<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link v-bind:to="{ name: 'dashboard' }" class="text-decoration-none">
        <b-media>
          <b-img :src="require('./assets/logo.png')" alt="logo" height="35"></b-img>
          <span class="h3 ml-3 my-0 text-white">LiveGene</span>
        </b-media>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" appear
                    appear-active-class="animated fadeIn">
        <b-navbar-nav>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'dashboard' }" exact-active-class="active"
                         class="btn btn-info">
              Piechart
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'timelines' }" exact-active-class="active"
                         class="btn btn-info">
              Partners
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'timelines' }" exact-active-class="active"
                         class="btn btn-info">
              Staff&nbsp;Roles
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{name: 'timelines'}" exact-active-class="active"
                         class="btn btn-info">
              Project Timelines
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
        </transition>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid p-0">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" appear
                  appear-active-class="animated fadeIn">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

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
      this.$store.dispatch('getProjectsAction');
    }
  };
</script>
