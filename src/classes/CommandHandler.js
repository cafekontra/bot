const fs = require("fs");

class CommandHandler {

    /**
     * Create an new CommandHandler instance
     * @param {Object} data 
     */

    constructor(data = {}) {
        
        // commands folder
        if (!data.folder) return console.log(`[ERROR] CommandHandler: No commands folder specified.`);
        this.folder = data.folder;

        // prefix
        if (!data.prefix) return console.log(`[ERROR] CommandHandler: No prefix(es) specified.`);
        if (!Array.isArray(data.prefix)) data.prefix = [data.prefix]; // one prefix
        data.prefix.sort();
        this.prefix = data.prefix; // multiple prefixes (array)

        // load commands
        this._loadCommands(data.folder);

    }

    /**
     * Loads commands from specified folder
     * @param {String} folder 
     */

    _loadCommands(folder) {
        let commands = new Map();
        let aliases = new Map();
        let files = fs.readdirSync(folder);

        files.filter(f => fs.statSync(`${folder}${f}`).isDirectory()).forEach(nested => fs.readdirSync(`${folder}${nested}`).forEach(f => files.push(`${nested}/${f}`)));
        let jsfiles = files.filter(f => f.endsWith('.js'));
        
        if (files.length <= 0) console.log(`[ERROR] CommandHandler: No commands to load.`);
        console.log(`[INFO] CommandHander: Found ${jsfiles.length} files to load!\n`);

        for (const f of jsfiles) {
            let cmdFile = require(`${folder}${f}`);
            let cmd = new cmdFile();
            
            // set commands in map
            commands.set(cmd.name, cmd);

            console.log(`[SUCCESS] CommandHandler: Loaded command: '${cmd.name}'`);
            
            // aliases
            if (cmd.alias) {
                for (let alias of cmd.alias) {
                    aliases.set(alias, cmd.name);
                }
            }
            
        }

        this.commands = commands;
        this.aliases = aliases;

        console.log('');

    }

    /**
     * Returns a command from a string
     * @param {String} string 
     */

    getCommand(string) {
        if (!string) return undefined;

        // check if the string begins with one of the prefixes
        // if not, it returns null

        let prefix = '';
        let prefixExists = false;

        for (let p of this.prefix) {
            if (!string.startsWith(p)) return;
            prefix = p;
            prefixExists = true;
        }

        if (!prefixExists) return null;

        let command = string.substring(prefix.length);
        let cmd = this.commands.get(command);

        if (!cmd) {
            const alias = this.aliases.get(command);
            if (!alias) return null;
            cmd = this.commands.get(alias);
        }

        return cmd;
    }
}

module.exports = CommandHandler;