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
          <b-nav-item>
            <router-link
              tag="button"
              :to="{ name: 'awarded_budget' }"
              exact-active-class="active"
              class="btn btn-info"
            >
              Awarded Budget
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              tag="button"
              :to="{ name: 'staff_roles' }"
              exact-active-class="active"
              class="btn btn-info"
            >
              Staff&nbsp;Roles
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              tag="button"
              :to="{name: 'timelines'}"
              exact-active-class="active"
              class="btn btn-info"
            >
              Project Timelines
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              tag="button"
              :to="{name: 'worldmap'}"
              exact-active-class="active"
              class="btn btn-info"
            >
              World Map
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </transition>
    </b-collapse>
  </b-navbar>
</template>
