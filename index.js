/*jslint esversion: 6 */
/*jslint node: true */
'use strict';

const _ = require('underscore');
const toArray = require('./toArray.js')
const partyKey = require('./partyKey.js');
const ballotCandidates = require('./lib/2012pres-ballot-candidates.json')
module.exports = function Election() {
  const data = require('./lib/2012pres.json');

  this.states = function (states) {
    let stateData;

    states = toArray(states);

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

  this.candidates = function () {
    return ballotCandidates;
  }

};
