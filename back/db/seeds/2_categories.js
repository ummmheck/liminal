
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, name: 'Haunted'},
        {id: 2, name: 'Door'},
        {id: 3, name: 'Extra-terrestrial'},
        {id: 4, name: 'Psychic'},
        {id: 5, name: 'Magic'},
        {id: 6, name: 'Monster'},
        {id: 7, name: 'Other'},
      ]);
    });
};
