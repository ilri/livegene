<template>
  <div class="jumbotron">
    <router-view></router-view>
    <h2>This is the protected realm.</h2>
    <h3>Projects</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>ILRI code</th>
          <th>Full name</th>
          <th>Short name</th>
          <th>Team</th>
          <th>Principal investigator</th>
          <th>Start date</th>
          <th>End date</th>
          <th>Status</th>
          <th>Capacity development</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in projects" v-bind:key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.ilriCode }}</td>
          <td>{{ p.fullName }}</td>
          <td>{{ p.shortName }}</td>
          <td>{{ p.team }}</td>
          <td>{{ p.principalInvestigator.firstName }} {{ p.principalInvestigator.lastName }}</td>
          <td>{{ p.startDate }}</td>
          <td>{{ p.endDate }}</td>
          <td>{{ p.status }}</td>
          <td>{{ p.capacityDevelopment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({ projects: state => state.projects })
  }
}
</script>