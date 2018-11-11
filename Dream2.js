const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("510057608032419844")
setInterval(function() {
channel.send(`Collecting credit procces`);
}, 25)
})
 
 
client.login('token');