const Discord = require('discord.js');
const Client = new Discord.Client();
var auth = require('../auth.json');


Client.on('ready', () => {
   console.log(`Logged in as ${Client.user.tag}!`);
});

Client.on('message', msg => {
  if (msg.content === 'func') {
      msg.reply('pong');
  }
});

Client.login(auth.Token);
