const index = require("../index");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let command = message.content.split(" ")[0].substr(index.CH.prefix);
    let args = message.content.split(" ").slice(1);
    let cmd = index.CH.getCommand(command);

    if (!cmd) return;
 
    try {
        if (cmd.output) {
            if (!args[0]) { // Command hasn't got arguments
                message.channel.send(cmd.output.without.replace("{author}", message.author.username));
            } else { // Command has got arguments
                if (!cmd.output.with) return message.channel.send(cmd.output.without.replace("{author}", message.author.username));
                message.channel.send(cmd.output.with.replace("{author}", message.author.username).replace("{user}", args.join(" ")));   
            }
        } else {
            cmd.run(client, message, args);
        }
    } catch (err) {
        console.log(`[ERROR] CommandHandler: Error while executing command '${command}':\n\n${err}`);
    }

}