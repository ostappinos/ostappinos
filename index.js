const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("OstaBot ONLINE")
})

client.on("messageCreate", message => {
    if (message.content == "!comando") {
        message.channel.send("Ciao a tutti!")
    }

    if (message.content == "!regole") {
        message.channel.send("ciao")
    }
})