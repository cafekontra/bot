module.exports = class EvalCommand {
    
    constructor() {
        this.name = "eval";
        this.description = "Führe JavaScript-Code aus.";
        this.ownerOnly = true;
    }

    async run (client, message, args) {
        try {
            let evaled = require('util').inspect(eval(args.join(' ')));
            message.channel.send(evaled, { code: "js" });
        } catch (err) {
            message.channel.send(err, { code: "js" });
        }
    }
}