<template>
  <div class="body">
    <NavBar />
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
      appear
      appear-active-class="animated fadeIn"
    >
      <router-view />
    </transition>
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
    this.$store.dispatch('publication/getPublicationsAction');
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;0,800;1,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap');

  html {
    position: relative;
    min-height: 100%;
  }

  .body {
    margin-bottom: 4.5em;
  }

  .footer {
    position: absolute;
    margin-top: 2em;
    bottom: 0;
    width: 100%;
    height: 3em; /* Set the fixed height of the footer here */
  }
</style>
