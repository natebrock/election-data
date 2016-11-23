/*jslint esversion: 6 */
/*jslint node: true */
'use strict';

const _ = require('underscore');

module.exports = function Election() {
  const data = require('./lib/2012pres.json');

  this.getState = function (states) {
    let stateData;

    if (!_.isArray(states)) {
      if (typeof states === 'undefined') {
        states = [];
      } else {
        states = states.split();
      }
    }

    let getAll = states.length === 0 ? true : false;

    stateData = _.filter(data.states, function (state) {
      let match = _.contains(states, state.stateAbv);
      return (getAll || match);
    });

    // stateData = stateData.map(function (state) {
    //   return _.pick(state, 'electoralVotesTotal', 'state');
    // });

    return stateData;
  };
};
