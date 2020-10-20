var data = require('./data.js');
var keys = data.inputKeys;
var funcs = data.funcs;

selector = (msg) => {
  return getResponse(getKey(msg));
}

getKey = (input) => {
  return keys.get(input);
}

hasKey = (input) => {
  return keys.has(input);
}

getResponse = (key) => {
  return funcs.has(key) ? funcs.get(key) : 'dunno';
}

module.exports = { selector, hasKey}
