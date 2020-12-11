module.exports = {
    name: 'user-info',
    description: 'command to help users find their/others discord ID',
    execute(message) {
        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order to find their info!');
        }
        
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Username: ${taggedUser.username}\nID: ${taggedUser.id}`);
    }
}