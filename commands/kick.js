//CODE FROM:  https://discordjs.guide
module.exports = {
    name: 'kick',
    description: 'command to kick users',
    execute(message) {
        //check if user have permissions to kick members
     if(!message.member.hasPermission('KICK_MEMBERS')) {
        message.channel.send('You do not have the permissions to do that');
        return;
    };

    //const a member, wich you need yo kick (its fist mention message member)
    let mentionMember = message.mentions.members.first();
    //If user doesn't mention a member, that show them this error msg
    if(!mentionMember) {
        message.channel.send('Please mention which member you want to kick');
        return;
    }

    //Get the highest role of user for compare
    let authorHighestRole = message.member.highestRole.position;
    let mentionHighestRole = mentionMember.highestRole.position;

    //Check if your bot can`t kick this user, so that show this error msg 
    //this would happen if someone wanted to kick the owner of the server -> which is impossible 
    if(!mentionMember.kickable) {
        message.channel.send('I have no permissions to kick this user');
        return
    };

    //If all steps are completed successfully try kick this user
    mentionMember.kick()
        .then(() => console.log(`Kicked ${member.displayName}`))
        .catch(console.error);
    }
}
