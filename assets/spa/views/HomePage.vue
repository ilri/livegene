<template>
  <div>
    <h2 class="bg-success text-dark text-center p-2">
      ILRI
      <strong class="text-white">Live</strong>stock
      <strong class="text-white">Gene</strong>tics
    </h2>
    <div class="text-center">
      <a href="https://www.ilri.org">
        <b-img
          :src="require('../assets/images/ilri-logo.jpg')"
          fluid
          alt="LiveGene"
        />
      </a>
    </div>
    <div class="text-center">
      <p>
        Proudly crafted in
        <b-img
          :src="require('../assets/images/africa.svg')"
          alt="Africa"
          class="africa"
        />
      </p>
      <p class="flaticon">
        Icons made by <a
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >Freepik</a> from <a
          href="https://www.flaticon.com/"
          title="Flaticon"
        >www.flaticon.com</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .africa {
    width: 10em;
  }
  .flaticon {
    font-size: 0.5em;
  }
</style>
