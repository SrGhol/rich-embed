const Discord = require('discord.js');

exports.run = (client, message, args, eembed) => {

  const embed = new eembed("Titulo")
  message.channel.send({embed: embed});
  
}
