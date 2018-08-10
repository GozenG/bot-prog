const Discord = require('discord.js')
const Bot = new Discord.Client()

var prefix = ("$")

Bot.on('ready', function() {
  Bot.user.setGame("Command: :help");
  console.log("connected");
});

Bot.on('message', message => {
	if (message.content === prefix + "prog"){
    message.channel.send("Désolée, il n\'y a pas de programmation pour le moment...")
  });
});

Bot.login('NDc3NDgwODQ3NTkxNzM1Mjk4.Dk8xkg.BHuJNBgkUpidGGac5ZLN0LH37XQ')
