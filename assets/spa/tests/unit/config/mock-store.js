import { v4 as uuidv4 } from 'uuid';

export const state = {
  project: {
    projects: [
      {
        id: 1,
        fullName: 'Project_1',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
      {
        id: 2,
        fullName: 'Project_2',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
      {
        id: 3,
        fullName: 'Project_3',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
      {
        id: 4,
        fullName: 'Project_4',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
      {
        id: 5,
        fullName: 'Project_5',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
    ],
    projectsGroupedByTeam: new Map(
      [
        ['Team_1',
          [
            {
              id: 1,
              fullName: 'Project_1',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
            {
              id: 2,
              fullName: 'Project_2',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
          ],
        ],
        ['Team_2',
          [
            {
              id: 3,
              fullName: 'Project_3',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
            {
              id: 4,
              fullName: 'Project_4',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
            {
              id: 5,
              fullName: 'Project_5',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
          ],
        ],
      ],
    ),
  },
  error: {
    errors: [],
  },
};

export const mutations = {
  PUSH(state, error) {
    state.error.errors.push({
      id: uuidv4(),
      ...error,
    });
  },
};

export const actions = {
  add(context, error) {
    context.commit('PUSH', error);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
