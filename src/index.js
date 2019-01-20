const fs = require("fs"),
    client = require("./objects/Client"),
    config = require("../config"),
    CommandHandler = require("./classes/CommandHandler");

// Events
for (let file of fs.readdirSync("./src/events")) {
    client.on(file.split(".")[0], require(`./events/${file}`).bind(null, client));
}

// Log in to Discord
client.login(config.token).catch(err => console.log(`[ERROR] Error occured while connecting to Discord:\n\n${err}`));

module.exports.CH = new CommandHandler({
    folder:  `${__dirname}/commands/`,
    prefix: config.prefix,
    owner: config.owner
});

module.exports.config = config;