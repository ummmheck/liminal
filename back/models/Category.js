const createdModel = require('../lib/createModel');

const modelInfo = {
  name: 'category',
  properties: {
    name: { type: string }
  },
  relationMappings: {
    places: {
      relation: Model.ManyToManyRelation,
      modelClass: Place,
      join: {
        from: 'category.id',
        through: {
          from: 'place_category.categoryId',
          to: 'place_category.placeId',
        },
        to: 'place.id',
      },
    },
  },
};

export const categoryModel = createdModel(modelInfo);
