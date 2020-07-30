const users = [
  { id: 1, name: 'Fagner', email: 'fagnermeds@gmail.com' },
  { id: 2, name: 'Maria', email: 'maria@gmail.com' },
];

module.exports = {
  Query: {
    users: () => users,
    user: (id) => {
      const user = users.filter(user => user.id === id);
    
      return user;
    },
  },

  Mutation: {
    createUser: () => {},
  }
};