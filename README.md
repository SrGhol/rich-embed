<img src="https://discord.js.org/static/logo.svg" align="center" width="500">
Uma classe para criação de embeds mais rápido.

## Como utilizar
* Criar uma pasta chamada `structures/RichEmbed.js` e colocar
```js
const { RichEmbed } = require('discord.js');

/**
 * A RichEmbed with the default fields already filled
 * @constructor
 * @param {User} [user] - The user that executed the command that resulted in this embed
 * @param {object} [data] - Data to set in the rich embed
 */

class FastEmbed extends RichEmbed {
  constructor (user, data = {}) {
    super(data)
    if(user) this.setTitle(user)
    this.setColor("Coloque a cor fixa").setTimestamp()
  }
}

module.exports = FastEmbed;
```
* Na `index.js` adicione
```js
const eembed = require('./structures/RichEmbed.js');
```
* E adicione ``eembed`` no run
```js
command.run(client, message, args, eembed);
```
* Comando
```js
const Discord = require('discord.js');

exports.run = (client, message, args, eembed) => {

  const embed = new eembed("Titulo")
  message.channel.send({embed: embed});
  
}
```
