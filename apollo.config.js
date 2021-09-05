module.exports = {
  client: {
    includes: ['./src/**/*.{tsx,ts}'],
    tagName: 'gql',
    service: {
      name: 'semi-backend',
      url: 'https://semi-backend.herokuapp.com/graphql',
    },
  },
};
