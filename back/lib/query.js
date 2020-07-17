const knex = require('../db/connection');

module.exports = {
  async getAllPlaces() {
  try {
    const places = await knex
      .select(
        'place.id as id',
        'place.centerLat as centerLat',
        'place.centerLong as centerLong',
        'place.address as address',
        'place.name as name',
        'place.description as description',
      ).from('place');
    places.forEach(async (place) => {
      const categories = await knex
        .select(
          'category.id as category_id',
          'category.name as category_name',
        ).from('place_category').where('placeId', place.id)
        .join('category', 'category.id', '=', 'place_category.categoryId');
        places.categories = categories;
    });
    return places;
  } catch(e) {
    console.error('Something went wrong');
  }
  }
}
