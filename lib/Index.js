"use strict";

var Discord = require('discord.js');

var Client = new Discord.Client();

var auth = require('../auth.json');

Client.on('ready', function () {
  console.log("Logged in as ".concat(Client.user.tag, "!"));
});
Client.on('message', function (msg) {
  if (msg.content === 'func') {
    msg.reply('pong');
  }
});
Client.login(auth.Token);