<template>
  <b-navbar
    toggleable="xl"
    type="dark"
    variant="dark"
  >
    <b-navbar-brand>
      <router-link
        :to="{ name: 'dashboard' }"
        class="text-decoration-none"
      >
        <b-media>
          <b-img
            :src="require('../assets/logo.png')"
            alt="logo"
            height="35"
          />
          <span class="h3 ml-3 my-0 text-white">LiveGene</span>
        </b-media>
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
        appear
        appear-active-class="animated fadeIn"
      >
        <b-navbar-nav>
          <b-nav-item
            v-for="link in this.links"
            :key="link.name"
          >
            <router-link
              tag="button"
              :to="link.name"
              exact-active-class="active"
              class="btn btn-info"
            >
              {{ link.label }}
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </transition>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'awardedbudget',
          label: 'Awarded Budget',
        },
        {
          name: 'staffroles',
          label: 'Staff Roles',
        },
        {
          name: 'timelines',
          label: 'Project Timelines',
        },
        {
          name: 'worldmap',
          label: 'World Map',
        },
      ],
    };
  },
};
</script>
