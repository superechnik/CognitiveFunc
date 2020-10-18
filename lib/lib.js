var data = require('./data.js');
var dictionary = data.dictionary;

Selector = (msg) => {
  return dictionary[msg] ? dictionary[msg] : 'dunno'
};

module.exports = { Selector }
