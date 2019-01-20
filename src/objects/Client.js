const { Client } = require("discord.js"),
    CommandHandler = require("../classes/CommandHandler");

let client = new Client({ disableEveryone: true });

module.exports = client;