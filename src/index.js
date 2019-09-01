const Discord = require('discord.js');
const client = new Discord.Client();

// Definir prefixo
const prefix = "!";
// Definir um cooldown
const cooldown = new Set();

// Evento ao iniciar o bot
client.on('ready', () => {
  client.user.setActivity("Assistindo anime", {type: "WATCHING"});
  console.log("Bot iniciado com sucesso!");
});

// Evento de handler
client.on('message', (message) => {
  // Definir mensagem
  let msg = message.content.toUpperCase();
  // Definir argumentos
  let args = message.content.slice(prefix.length).trim().split(' ');
  // Definir comando para usar no handler
  let cmd = args.shift().toLowerCase();
  const eembed = require('./structures/RichEmbed.js');
  
  // Bloquear comandos no privado
  if(message.channel.type === 'dm') return;
  
  // Ignorar palavras sem iniciar o prefixo e ignorar outros bots
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  // Se o membro estiver em cooldown
  if(cooldown.has(message.author.id)) return message.reply("⏳ | Você precisa esperar 3 segundos.");

  try {
    // Definir pasta
    let command = require(`./comandos/${cmd}.js`);
    // Enviando exportações
    command.run(client, message, args, eembed);
  }catch(e){}
  // Adicionando cooldown ao membro
  cooldown.add(message.author.id);
  setTimeout(() => {
    // Removendo cooldown do membro
    cooldown.delete(message.author.id);
  }, 3000);
  
});

client.login(process.env.TOKEN);
