import { Model } from 'objection';

const createdModel = require('../lib/createModel');

const modelInfo = {
  name: 'place',
  properties: {
    centerLat: { type: decimal },
    centerLong: { type: decimal },
    name: { type: string },
    address: { type: string },
    live: { type: boolean },
    pending: { type: boolean },
    denied: { type: boolean },
  },
  relationMappings: {
    creator: {
      relation: Model.BelongsToOneRelation,
      modelClass: memberModel,
      join: {
        from: 'place.creatorId',
        to: 'member.id',
      },
    }
  },
};

export const placeModel = createdModel(modelInfo);
