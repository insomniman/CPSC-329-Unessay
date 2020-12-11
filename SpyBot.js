//Discord API
require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();

//MongoDB Database
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/MemoryBot';

//MemoryBot Programming
client.on('ready', () => {
    console.log(`${client.user.username} has logged in.`);
});

client.on('message', (message) => {
    if (message.author.bot) {
        //ignore messages from other bots
        return;
    } else {
        //Record real user messages
        MongoClient.connect(url, function (err, db) {
            if (err) {
                consol.log("Unable to connect to Database", err);
            } else {
                console.log("Successfully connected to Database");

                //get MemoryBot database
                dbase = db.db('MemoryBot');

                //create new message entry
                var entry = { author: message.author.tag, message: message.content, time: message.createdAt };

                //insert new message entry into database
                dbase.collection("messages").insertOne(entry, function (err, res) {
                    if (err) throw err;
                    console.log("Message Recorded");
                    db.close();
                });
            }
        });
    }
});

client.login(process.env.DISCORDJS_MEMORYBOT_TOKEN);