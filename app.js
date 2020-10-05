const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on("message", message => {
  var prefix = "l";

  if (message.content === "pengen play music gimana?") {
    message.channel.send("ketik aja lp");
  }
  if (message.content === "jerico") {
    message.channel.send("botak");
  }

  if (message.content === "botak") {
    message.channel.send(
      "https://media.discordapp.net/attachments/472791118237663250/747797203812352020/cat_respeccfttt.jpg?width=954&height=499"
    );
  }

  if (message.content === "bray") {
    message.channel.send("ganteng bingit mirip kontol");
  }

  if (message.content === "anjing") {
    message.channel.send("jangan ngeggas babi kontol");
  }

  if (message.content === "halo") {
    message.reply(" HALLO 💗");
  } else if (message.content === `hallo`) {
    message.reply(` (${message.author.username})hallo `);
  } else if (message.content === `hello`) {
    message.reply(`${message.author.username} hallo `);
  }

  //kata untuk server
  else if (message.content === `${prefix}server`) {
    message.channel.send(
      `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nYour username: ${message.author.username}\nYour ID: ${message.author.id} `
    );
  }

  if (message.content === `${prefix}ping`) {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Ping ! ping anda adalah = ${timeTaken}ms.`);
  }

  //kbbi a

  if (message.content === "abad") {
    message.channel.send("yeay kamu berhasil menggunakan kata2 KBBI💗");
  }

  if (message.content === "abad pertengahan") {
    message.channel.send("yeay kamu berhasil menggunakan kata2 KBBI💗");
  }

  if (message.content === "abah") {
    message.channel.send("yeay kamu berhasil menggunakan kata2 KBBI💗");
  }

  if (message.content.startsWith(`${prefix}say`)) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!text)
      return message.reply("kasih kata-katanya dong, mau di say apanich.. ");
    message.channel.send(text);
  }

  if (message.content.startsWith(`${prefix}kick`)) {
    let member = message.mentions.members.first();
    member
      .kick()
      .then(member => {
        message.channel.send(
          `:wave: dadah ${member.displayName} sudah di Kick!'https://media.discordapp.net/attachments/472791118237663250/747797203812352020/cat_respeccfttt.jpg?width=954&height=499`
        );
      })
      .catch(() => {
        if (
          !message.member.hasPermission([
            "KICK_MEMBERS",
            "BAN_MEMBERS",
            "ADMINISTRATOR"
          ])
        ) {
          message.reply("Kamu tidak bisa Kick orang");
        } else if (
          member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR"])
        ) {
          message.reply("Kamu tidak bisa kick ini orang");
        }
      });
  }
  if (message.content.startsWith(`${prefix}ban`)) {
    let member = message.mentions.members.first();
    member
      .ban()
      .then(member => {
        message.channel.send(
          `:wave: dadah ${member.displayName} sudah di Ban!`
        );
      })
      .catch(() => {
        if (
          !message.member.hasPermission([
            "KICK_MEMBERS",
            "BAN_MEMBERS",
            "ADMINISTRATOR"
          ])
        ) {
          message.reply("Kamu tidak bisa Ban orang");
        } else if (
          member.hasPermission(["KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR"])
        ) {
          message.reply("Kamu tidak bisa Ban ini orang");
        }
      });
  }
});
//npminstalldiscordjs
