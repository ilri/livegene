<template>
  <div>
    <header class="navbar navbar-expand-md navbar-dark bg-dark text-white">
      <div class="navbar-brand d-flex align-items-center">
        <img src="./assets/logo.png" alt="logo" height="35">
        <span class="h3 ml-3 my-0">LiveGene</span>
      </div>
    </header>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
