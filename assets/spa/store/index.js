import Vue from 'vue';
import Vuex from 'vuex';

import AuthModule from './modules/auth';
import ProjectModule from './modules/project';
import ErrorModule from './modules/error';
import PublicationModule from './modules/publication';
import OrganisationModule from './modules/organisation';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    auth: AuthModule,
    project: ProjectModule,
    error: ErrorModule,
    publication: PublicationModule,
    organisation: OrganisationModule,
  },
});
