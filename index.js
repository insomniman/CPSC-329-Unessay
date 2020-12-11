const fs = require('fs');
const Discord = require('discord.js');
//access config file
const { commandPrefix, token} = require('./config.json');
//create a discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();
//want a command handler
//ideally this would also dynamically go through the 'commands' folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//dynamic handling here
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//run this code once the client has been made
client.once('ready', () => {
    //technically not needed -> delete later?
    console.log('Ready!');
});

// Create an event listener for when new members join the server (the message is redirected to a separate channel)
client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(channel => channel.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member and the entire server
    //ERROR CHECK: IF THE @EVERYONE WORKS
    channel.send(`Welcome to the server, ${member}.\nMake sure to check all our bot commands/rules with !help and greet @everyone\n`);
  });

//prepare the bot to read messages
//it takes in every single method sent
client.on('message', message =>{
  //  console.log(message.content);

    //if the word 'nyan' is in a message at all, the bot deletes it -> a filter function basically
    if(message.content.includes('nyan') || message.content.includes('Nyan') || message.content.includes('NYAN')){
        message.channel.send("Nyan is not allowed in this server");
        message.delete();
    }

    if(message.author.id === "188292295068483584"){
        message.delete();
        message.channel.send("Stop talking.");
    }

  //for commands with user-input needed for it 
    if (message.content.startsWith(commandPrefix) || message.author.bot){

        const args = message.content.slice(commandPrefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        

        //dynamic implementation to call on commands
        if (!client.commands.has(command)) return;
        //need to throw into a try-catch block
        try {
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
  }

})

//login to discord with the bot's custom token
client.login(token);