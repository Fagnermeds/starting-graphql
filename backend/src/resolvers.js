const users = [
  { id: 1, name: 'Fagner', email: 'fagnermeds@gmail.com' },
  { id: 2, name: 'Maria', email: 'maria@gmail.com' },
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0],
  },

  Mutation: {
    createUser: () => {},
  }
};