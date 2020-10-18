require('app-module-path').addPath("../CognitiveFunc");

const Discord = require('discord.js');
const Client = new Discord.Client();
var auth = require('auth.json');
var lib = require('lib/lib.js');

Client.on('ready', () => {
   console.log(`Logged in as ${Client.user.tag}!`);
});

Client.on('message', msg => {
  console.log(msg.content);
  if (msg.content.substring(0, 1) == '!') {
       var str = lib.Selector(msg.content);
       msg.reply(str);
     }
  });

Client.login(auth.Token);
