const index = require("../index");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let args = message.content.split(" ");
    let command = args[0];
    let cmd = index.CH.getCommand(command);

    if (!cmd) return;
 
    try {
        cmd.run(client, message, args);
    } catch (err) {
        console.log(`[ERROR] CommandHandler: Error while executing command '${command}':\n\n${err}`);
    }

}