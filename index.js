const db = require("quick.db");
const ms = require("ms");
const { default_prefix } = require("./config.json");
const emote = require("./config/emotes.json");
const discord = require('discord.js');
require('discord-reply');
const client = new discord.Client();

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
   require(`./handlers/${handler}`)(client);
});

//Sets Bot Status
client.on("ready", () => {
    client.user.setActivity(`${default_prefix}help | Made by AndrewX`, { type: "WATCHING"});
});

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ug");
});

app.listen(port, () => {
  console.log(`Example app listening at Port: ${port}`);
});

client.login(process.env.TOKEN);
