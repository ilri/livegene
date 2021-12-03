<template>
  <BaseView :module="'projects'">
    <template slot="header">
      <div>
        <b-nav
          small
          pills
          align="center"
        >
          <b-nav-text>
            Staff Roles
          </b-nav-text>
          <b-nav-item
            v-for="route in routes"
            :key="route.name"
          >
            <router-link
              tag="button"
              :to="{ name: route.name }"
              exact-active-class="active"
              class="btn btn-sm btn-primary"
            >
              {{ route.label }}
            </router-link>
          </b-nav-item>
        </b-nav>
      </div>
    </template>
    <template slot="graphic">
      <b-col
        cols="12"
        lg="10"
        class="px-0"
      >
        <router-view />
      </b-col>
    </template>
  </BaseView>
</template>

<script>
import BaseView from '../components/BaseView';

export default {
  name: 'StaffRoles',
  components: {
    BaseView,
    // ChartContainer,
  },
  data() {
    return {
      routes: [
        {
          name: 'diagram',
          label: 'Diagram',
        },
        {
          name: 'heatmap',
          label: 'Heatmap',
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
