const Discord = require("discord.js")

const client = new Discord.Client(

    {intents: ["GUILDS", "GUILD_MEMBER","GUILD_MESSAGES"] }
)

client.login(process.env.token)