//Project by Lunechain x ikmxleo x icyurei 
//Node js inside Docker Container 🐳 

//Hiding API Keys
require('dotenv').config();

// Import the discord.js module
const Discord = require('discord.js');


// Create an instance of a Discord client
const client = new Discord.Client();
const keepAlive = require('./server');

//RPCforBot
client.on('ready', () => {
    console.log('Bot is Running From Docker!');
    
    client.user.setPresence({ activity: { name: 'Over Server', type: 'WATCHING'},status: 'dnd', })
    .then(console.log)
    .catch(console.error);

    // Or you can use this syntax too
    // client.user.setActivity('Over Server', { type: 'WATCHING' })
    // .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    // .catch(console.error);
  
  });

  keepAlive();
  client.login(`${process.env.TOKEN}`);
  