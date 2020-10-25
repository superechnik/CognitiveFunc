require('app-module-path').addPath("../CognitiveFunc");

const discord = require('discord.js');
const auth = require('auth.json');
const lib = require('lib/lib.js');

const client = new discord.Client();

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var content = msg.content;
  if (lib.hasKey(content)) {
    var str = lib.selector(content);
    msg.reply(str);
  }
});

client.on('shardError', err => {
  console.log(`Network error occuring: ${err}`);
});


client.login(auth.Token);
