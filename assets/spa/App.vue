<template>
  <div class="body">
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
            <router-link tag="button" v-bind:to="{ name: 'awarded_budget' }" exact-active-class="active"
                         class="btn btn-info">
              Awarded Budget
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'treemap' }" exact-active-class="active"
                         class="btn btn-info">
              Treemap
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link tag="button" v-bind:to="{ name: 'staff_roles' }" exact-active-class="active"
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
    <footer class="footer row align-items-center bg-info mx-0">
      <div class="col-6 mx-auto text-center text-white">&copy; 2019 International Livestock Reasearch Institute</div>
    </footer>
  </div>
</template>

<script>
  /**
   * Abbreviations:
   *  - Array.prototype.filter()
   *    > el = element
   *  - Array.prototype.findIndex()
   *    > el = element
   *  - Array.prototype.forEach()
   *    > cur = currentValue
   *    Note: exception is nested forEach, then parentEl and childEl are used instead
   *  - Array.prototype.reduce()
   *    > acc = accumulator
   *    > cur = currentValue
   *  - D3
   *    > d = datum
   *    > i = index
   *    > n = nodes
   */
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

<style>
  html {
    position: relative;
    min-height: 100%;
  }
  .body {
    margin-bottom: 3em;
  }
  .footer {
    position: absolute;
    margin-top: 2em;
    bottom: 0;
    width: 100%;
    height: 3em; /* Set the fixed height of the footer here */
  }
  .btn {
    width: 12em;
  }
</style>
