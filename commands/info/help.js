const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js");

const { Color, Prefix } = require("../../config.js");

module.exports = {

  name: "help",

  aliases: ["h"],

  description: "Help Command!",

  usage: "Help | <Command Name>",

  run: async(client, message, args) => {

    

    message.delete();

    

    let embed = new MessageEmbed()

    .setColor(Color)

    .setTitle(`${client.user.username} Commands!`)

    .setDescription(`Use ${Prefix}help <command> For More Command Info!` + "\n\n" + "🎉**Fun**\n`Avatar, Coinflip, Meme, Rate, Ascii, Hack, Randomnumber`" + "\n\n" + "🔑**Moderation**\n`Clear, Mute, Unmute, Kick, Ban, Unban, Warn, Warnings,`" + "\n\n" + "\n\n" + "ℹ️**Information**\n`Help, Userinfo, Serverinfo, Ping`")

    .setFooter(`Ping me for links! | Every command will be logged to the bot console!`)

    .setTimestamp();

    

    if (!args.length) return message.channel.send(embed);

    let cmd =

      client.commands.get(args[0].toLowerCase()) ||

      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()

      .setColor(Color)

      .setTitle(`${cmd.name} Information!`)

      .addField(`Aliases`, cmd.aliases || "None!")

      .addField(`Usage`, cmd.usage || "No Usage")

      .addField(`Description`, cmd.description || "No Description!")

      .setTimestamp();

    if (cmd) {

      return message.channel.send(embed2);

    } else {

      return message.channel.send(embed);

    }

  }

};

