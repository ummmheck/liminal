
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('member_place').del()
    .then(function () {
      // Inserts seed entries
      return knex('member_place').insert([
        {id: 1, placeId: 1, memberId: 1},
        {id: 2, placeId: 2, memberId: 1},
      ]);
    });
};
