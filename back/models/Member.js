import { Model } from 'objection';

const createdModel = require('../lib/createModel');

const modelInfo = {
  name: 'member',
  properties: {
    display_name: { type: string },
    email: { type: string },
    google_id: { type: string },
    avatar: { type: string },
    admin: { type: boolean },
    active: { type: boolean },
  },
  relationMappings: {
    places: {
      relation: Model.ManyToManyRelation,
      modelClass: Place,
      join: {
        from: 'member.id',
        through: {
          from: 'member_place.memberId',
          to: 'member_place.placeId',
        },
        to: 'place.id',
      },
    },
  },
};

export const memberModel = createdModel(modelInfo);