
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      // Inserts seed entries
      return knex('member').insert([
        {
          email: 'cassandra.torske@gmail.com',
          googleId: null,
          displayName: null,
          avatarUrl: null,
          admin: false,
          active: true
        },
        {
          email: 'tors2720@gmail.com',
          googleId: null,
          displayName: null,
          avatarUrl: null,
          admin: true,
          active: true
        }
      ]);
    });
};
