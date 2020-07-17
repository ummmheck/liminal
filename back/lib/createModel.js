const { Model } = require('objection');

function createModel(options) {
  const classType = class ModelInstance extends Model {};
  Object.keys(options).forEach((property) => {
    classType[property] = options[property];
  });
  return classType;
}

module.exports = createModel;
