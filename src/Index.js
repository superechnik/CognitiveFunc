require('app-module-path').addPath("../CognitiveFunc");

const discord = require('discord.js');
const auth = require('auth.json');
const lib = require('lib/lib.js');

const client = new discord.Client();

client.on('ready', () => {
   console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startswith('!')) {
       var str = lib.Selector(msg.content);
       msg.reply(str);
     }
  });

client.login(auth.Token);
