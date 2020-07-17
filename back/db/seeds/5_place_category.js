
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('place_category').del()
    .then(function () {
      // Inserts seed entries
      return knex('place_category').insert([
        {id: 1, placeId: 1, categoryId: 5},
        {id: 2, placeId: 1, categoryId: 2},
        {id: 3, placeId: 2, categoryId: 1},
      ]);
    });
};
