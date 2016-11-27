# election-data

U.S. election data from the Federal Election Commission.

Currently only provides data from the 2012 U.S. presidential election.

## Installation
```js
npm install election-data
````

## API
### .candidates()
```js
var ElectionData = require('election-data');
var Election = new ElectionData();
Election.candidates();
```
Returns a list of all candidates listed on at least one state ballot (i.e., no write-ins).
### .states(state)
`state` string | array
```js
var ElectionData = require('election-data');
var Election = new ElectionData();
Election.states(['AL', 'CA', 'FL']);
```
Returns election data for the states specified (using the state's two letter postal code (e.g., AL, CA, FL, DC). ```state``` may be a string if only one state is specified. If invoked without ```state```, returns data for all states.
