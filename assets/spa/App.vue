<template>
  <div class="body">
    <NavBar />
    <div class="container-fluid p-0">
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
        appear
        appear-active-class="animated fadeIn"
      >
        <router-view />
      </transition>
    </div>
    <footer class="footer row align-items-center bg-info mx-0">
      <div class="col-12 mx-auto text-center text-white">
        &copy; 2019 International Livestock Research Institute
      </div>
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

import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: { NavBar },
  created() {
    this.$store.dispatch('authenticateAction');
    this.$store.dispatch('getProjectsAction');
    this.$store.dispatch('getWorldCountriesAction');
  },
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
