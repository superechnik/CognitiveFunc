var data = require('./data.js');
var funcs = data.funcs;

Selector = (msg) => {
  return funcs.has(msg) ? funcs.get(msg) : 'dunno'
};

module.exports = { Selector }
