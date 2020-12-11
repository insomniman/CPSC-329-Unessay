module.exports = {
    name: 'help',
    description: 'command to help users figure out bot commands',
    execute(message) {
        message.channel.send('List of commands:\n');
        message.channel.send('!help - get list of commands moderation bot responds to\n');
        message.channel.send('!kick - kick a user from the server');
        message.channel.send('!user-info - retrieve user info: username and discord ID\n');
    }
}