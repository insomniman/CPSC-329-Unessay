// -------------------------------------------------------------------------------------------------------------------
// This bot sends messages to the channel to user by command input or sends a phishing link to user by direct message.
// -------------------------------------------------------------------------------------------------------------------
const {Client, MessageAttachment, MessageEmbed} = require('discord.js');
const bot = new Client();

const token = 'NzgyMzkxNjU0MzA0MDU1MzE4.X8LhAg.XVjIS2_9HPdK0ggMHy8_I6lO01c';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

// Commands section
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    // User types commands using PREFIX fllowed by switch case words below
    switch(args[0]){  
        // Recieve "pong!"
        case 'ping':
            message.channel.send('pong!');
            break;
        // Recieve image of adult crying over a video game
        case 'this':
            const gamerCrying = new MessageAttachment('this.png');
            message.reply(gamerCrying);
            break;
        // Recieve image of post 2010s internet meme crying
        case 'gamercrying':
            const memeCrying = new MessageAttachment('gamercrying.png');
            message.reply(memeCrying);
            break;
        // Recieve embed direct message with a link attached to download.
        case 'hitmanbmtrainer':
            const embed = new MessageEmbed()
            .setTitle("Hello, I'm GiftBot!")
            .setColor(0xFF0000)
            .setDescription("I am the official bot to get you the mods, games, and cheats that you need!\nI work hard to get you good quality content.\nHere's your gift! \n\n Download: https://www.ggmania.com/gimmecheat.php?cheat=19050");

            message.author.send(embed);
            break;
        // Recieve stupid fishing game
        case 'fishingplanet':
            message.channel.send("https://skidrowcracked.com/the-fisherman-fishing-planet/");               
            break;
        // Recieve facebook fishing site
        case 'facebook':
            message.channel.send("http://facbeook.com/");               
            break;
    }
})

bot.login(token);