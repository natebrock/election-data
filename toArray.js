var _ = require('underscore');

module.exports = function toArray(testVar) {
  if (_.isArray(testVar)) {
    return testVar;
  } else if (typeof states === 'undefined') {
    return [];
  } else {
    return testVar.split();
  }
};
