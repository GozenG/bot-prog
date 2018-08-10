const Discord = require('discord.js');
const Bot = new Discord.Client();

var prefix = ("$")

Bot.on('ready', function() {
  Bot.user.setGame("Command: $");
  console.log("connected");
});

Bot.on('message', message => {
	if (message.content === prefix + "prog"){
    message.channel.send("Désolée, il n\'y a pas de programmation pour le moment...");
  });
});

Bot.login(process.env.TOKEN);
