function selfbotapp() {
  var t0 = performance.now(); // begin time measurment
  resetsettings();
  const login = document.getElementById("token").value;

  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

  function checktoken() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://discordapp.com/api/users/@me", false); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", login);
    //  xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  function getRandomString(length) {
    var s = "";
    do {
      s += Math.random()
        .toString(36)
        .substr(2);
    } while (s.length < length);
    s = s.substr(0, length);
    return s;
  }
  document.getElementById("token").innerHTML = "";
  $("#tokenlogin").fadeOut();
  $(".dank-ass-loader").fadeIn();
  const client = new Discord.Client();
  commandIntervals = [];
  const auteur = "Saravenpi";

  function getText(obj) {
    return obj.textContent ? obj.textContent : obj.innerText;
  }
  const embedcolor = getText(document.getElementById("embedcolor"));
  const footerimage = getText(document.getElementById("footerimage"));
  const embedimage = getText(document.getElementById("embedimage"));
  const prefix = getText(document.getElementById("prefix"));
  const afktransmitchannel = getText(
    document.getElementById("afktransmitchannel")
  );
  const afkmessage = getText(document.getElementById("afkmessage"));
  var statusmessage = getText(document.getElementById("statusmessage"));
  var statustype = getText(document.getElementById("statustype"));
  var activitystatus = getText(document.getElementById("activitystatus"));
  var fprefix = getText(document.getElementById("prefix"));
  var fembedcolor = getText(document.getElementById("embedcolor"));
  var fembedimage = getText(document.getElementById("embedimage"));
  var ffooterimage = getText(document.getElementById("footerimage"));
  var footertext = "Noziro Selfbot";
  client.login(login);
  client.on("ready", () => {
    var t1 = performance.now(); // Ending time measurment
    var pretesttg = document.getElementById("selfboton").innerHTML;
    /* console.log(
          "%c le selfbot était " + pretesttg,
          "background: purple; color: white; display: block;"
        );*/
    var selfbotconnectedstatus = document.getElementById("selfboton").innerHTML;
    if (activitystatus == "true") {
      client.user.setPresence({
        game: {
          name: statusmessage,
          type: statustype,
          url: "https://www.twitch.tv/saravenpi"
        }
      });
    }
    $(".dank-ass-loader").fadeOut();
    $("#connected").fadeIn();
    document.getElementById("username").innerHTML = client.user.tag;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://noziro.herokuapp.com/new", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(
      JSON.stringify({
        username: document.getElementById("username").innerHTML,
        launchtime: Math.round(t1 - t0)
      })
    );

    if (selfbotconnectedstatus == "false") {
      document.getElementById("selfboton").innerHTML = "true";
      var selfbotconnectedstatus = document.getElementById("selfboton")
        .innerHTML;
      selfbotall();
    } else {
    }
  });
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  function selfbotall() {
    console.log(
      "%c Noziro Selfbot",
      "@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap'); font: Poppins; color: #00D1B2; display: block; font-size:50px;"
    );

    function streamstatuson() {
      submitsettings();

      function getText(obj) {
        return obj.textContent ? obj.textContent : obj.innerText;
      }
      var statusmessage = getText(document.getElementById("statusmessage"));
      var activitystatus = getText(document.getElementById("activitystatus"));
      var statustype = getText(document.getElementById("statustype"));
      if (activitystatus == "true") {
        client.user.setPresence({
          game: {
            name: statusmessage,
            type: statustype,
            url: "https://www.twitch.tv/saravenpi"
          }
        });
      } else {
        client.user.setActivity(null);
      }
    }
    setInterval(streamstatuson, 1750);
    client.on("message", message => {
      var fabstatus = document.getElementById("abstatus").innerHTML;
      if (fabstatus == "true") {
        if (message.guild === null) {
          if (message.author.bot) {
            console.log(
              message.channel.id + "%c BOT DM CLOSED BY ADBLOCK",
              "@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap'); font: Poppins; color: red; display: block; font-size:20px;"
            );
            /*   var xmlHttp = new XMLHttpRequest();

 var urli = "https://discordapp.com/api/v6/channels/" + message.channel.id;
    xmlHttp.open("DELETE", urli, false); // false for synchronous request
    xmlHttp.setRequestHeader("Authorization", login);
    // xmlHttp.send(null);
     }
*/
            message.channel.delete();
          }
        }
      }
      var fnsstatus = document.getElementById("nsstatus").innerHTML;
      const args = message.content.split(" ").slice(1);
      var fprefix = getText(document.getElementById("prefix"));
      var fembedcolor = getText(document.getElementById("embedcolor"));
      var fembedimage = getText(document.getElementById("embedimage"));
      var fafktransmitchannel = getText(
        document.getElementById("afktransmitchannel")
      );
      var ffooterimage = getText(document.getElementById("footerimage"));
      var fafkmode = getText(document.getElementById("afkmode"));
      var fafkmessage = getText(document.getElementById("afkmessage"));
      if (fafkmode == "true") {
        if (message.mentions.users.has(client.user.id)) {
          if (message.author === client.user) {
            return;
          } else {
            if (fafkmode == "true") {
              message.reply(fafkmessage);
              if (message.guild == null) {
                var message_guild = "MP/Groupe Privé";
              } else {
                var message_guild = message.guild;
              }
              let mentionlog = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setDescription(":newspaper: New mention:")
                .addField("__Message author:__ ", message.author.tag)
                .addField("__Message Date:__ ", message.createdAt)
                .addField("__Server:__ ", message_guild)
                .addField("__Content:__ ", message.content)
                .setFooter(footertext, ffooterimage);
              var mentionlogchannel = client.channels.get(fafktransmitchannel);
              mentionlogchannel.send(mentionlog);
            }
          }
        }
      }
      if (fnsstatus == "true") {
        messagebyclient();
        function matchCode(text, callback) {
          let codes = text.match(
            /https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/
          );
          if (codes) {
            callback(codes[0]);
            return matchCode(
              text.slice(codes.index + codes[0].length),
              callback
            );
          } else {
            callback(null);
          }
        }
        let codes = [];
        matchCode(message.content, code => {
          if (!code) return;
          if (!codes.includes(code)) codes.push(code);
        });
        if (codes.length == 0) return;
        codes.forEach(code => {
          fetch(
            "https://canary.discordapp.com/api/v6/entitlements/gift-codes/" +
              code.split("/").pop() +
              "/redeem",
            {
              method: "post",
              headers: {
                Accept: "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US",
                Authorization: login,
                Connection: "keep-alive",
                "Content-Length": JSON.stringify({
                  channel_id: message.channel.id
                }).length,
                "Content-Type": "application/json",
                Host: "canary.discordapp.com",
                Referer: `https://canary.discordapp.com/channels/${message.channel.id}/${message.id}`,
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                "X-super-properties": btoa(
                  JSON.stringify({
                    os: "Windows",
                    browser: "Firefox",
                    device: "",
                    browser_user_agent:
                      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                    browser_version: "66.0",
                    os_version: "10",
                    referrer: "",
                    referring_domain: "",
                    referrer_current: "",
                    referring_domain_current: "",
                    release_channel: "canary",
                    client_build_number: 37519,
                    client_event_source: null
                  })
                )
              },
              body: JSON.stringify({
                channel_id: message.channel.id
              })
            }
          )
            .then(res => {
              if (res.status == 400 || res.status == 404) {
                console.log("invalid code: " + code);
                let mentionlog = new Discord.RichEmbed()
                  .setColor("#FF0000")
                  .setDescription(":newspaper: Invalid code:")
                  .addField("__Droppper :__ ", message.author.tag)
                  .addField("__Message Date:__ ", message.createdAt)
                  .addField("__Message's server:__ ", message_guild)
                  .addField("__Code:__ ", code)
                  .setFooter(footertext, ffooterimage);
                var mentionlogchannel = client.channels.get(
                  fafktransmitchannel
                );
                mentionlogchannel.send(mentionlog);
              } else {
                res.json().then(json => {
                  console.log(json);
                  console.log("Nitro Claimed");
                  let mentionlog = new Discord.RichEmbed()
                    .setColor("#00FF00")
                    .setDescription(":newspaper: Nitro Claimed:")
                    .addField("__Droppper :__ ", message.author.tag)
                    .addField("__Message Date:__ ", message.createdAt)
                    .addField("__Message's server:__ ", message_guild)
                    .addField("__Code:__ ", code)
                    .setFooter(footertext, ffooterimage);
                  var mentionlogchannel = client.channels.get(
                    fafktransmitchannel
                  );
                  mentionlogchannel.send(mentionlog);
                });
              }
            })
            .catch(console.error);
        });



      }


      messagebyclient();
      function messagebyclient() {
      if (message.author === client.user) {
        if (message.content.startsWith(fprefix + "help")) {
          let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, "https://discord.gg/XfM8WR7")
            .setThumbnail(fembedimage)
            .setDescription("__**Commands Panel**__")
            .setColor(fembedcolor)
            .addField(fprefix + "hraid", "💣Raid Commands💣")
            .addField(fprefix + "hvic", "👾Vicious Commands👾")
            .addField(fprefix + "hmod", "🔨Moderation Commands🔨")
            .addField(fprefix + "huser", "👤User Commands👤")
            .addField(fprefix + "hfun", "🚀Funny Commands🚀")
            .addField(fprefix + "info", "📰About the Selfbot📰")
            .setFooter(footertext, ffooterimage);
          message.edit(cmdList);
        }
        if (message.content.startsWith(fprefix + "hraid")) {
          let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, "https://discord.gg/XfM8WR7")
            .setDescription("__**💣Raid Commands💣**__")
            .setColor(fembedcolor)
            .addField(
              fprefix + "dltchnls",
              "Deletes all the channels of a server"
            )
            .addField(fprefix + "spam [text]", "Spam a message")
            .addField(fprefix + "stopspam", "Stop spamming")
            .addField(fprefix + "dltroles", "Deletes all the roles of a server")
            .addField(fprefix + "allban", "Ban everyone from a server")
            //  .addField(fprefix + "spamev", "Envoie un message dans tous les channel du serveur")
            .addField(
              fprefix + "unban",
              "Unban every banned user from a server"
            )
            .addField(
              fprefix + "deface [image url]",
              "Rename the server, changes the icon and the region"
            )
            .addField(fprefix + "rolesadd [text]", "Creates a lot of roles ")
            .addField(fprefix + "chnladd [text]", "Creates a lot of channels")
            //.addField(fprefix + "adminroleadd", "Crée un rôle administrateur.")
            .addField(fprefix + "renameall [text]", "Rename everyone")
            .addField(fprefix + "ddos", "The server goes oof")
            .setFooter(footertext, ffooterimage);
          message.edit(cmdList);
        }
        if (message.content.startsWith(fprefix + "hvic")) {
          let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, "https://discord.gg/XfM8WR7")
            .setDescription("__**👾Vicious Commands👾**__")
            .setColor(fembedcolor)
            .addField(
              fprefix + "ipinfo [ip]",
              "Show the informations about an ip"
            )
            .addField(fprefix + "gp [mention]", "Ghost Ping")
            .addField(
              fprefix + "guildmap",
              "Shows all the channels of the guild, even the ones you don't have access"
            )
            .setFooter(footertext, ffooterimage);
          message.edit(cmdList);
        }
        //T1
        if (message.content.startsWith(fprefix + "hmod")) {
          let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, "https://discord.gg/XfM8WR7")
            .setDescription("__**🔨Moderation Commands🔨**__")
            .setColor(fembedcolor)
            .addField(fprefix + "kick [mention]", "Kick an user")
            .addField(fprefix + "ban [mention]", "Ban an user")
            .addField(
              fprefix + "clear [nb]",
              "Deletes a certain count of messages"
            )
            .setFooter(footertext, ffooterimage);
          message.edit(cmdList);
        }
        if (message.content.startsWith(fprefix + "huser")) {
          let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, "https://discord.gg/XfM8WR7")
            .setDescription("__**👤User Commands👤**__")
            .setColor(fembedcolor)
            .addField(fprefix + "avatar [imageurl]", "Changes profile photo")
            .addField(
              fprefix + "getavatar [mention]",
              "Steals the profile photo of the targeted user"
            )
            .addField(
              fprefix + "upp [mention]",
              "Sends the profile photo of the targeted user"
            );
          let cmdList2 = new Discord.RichEmbed()
            .setColor(fembedcolor)
            .addField(
              fprefix + "ui [mention]",
              "Sends informations about the targeted user"
            )
            .addField(
              fprefix + "serverinfo",
              "Sends informations about a server"
            )
            .setFooter(footertext, ffooterimage);
          message.edit(cmdList);
          message.channel.send(cmdList2);
        }
        if (message.content.startsWith(fprefix + "hfun")) {
          let cmdList = new Discord.RichEmbed()
            .setAuthor(footertext, ffooterimage, "https://discord.gg/XfM8WR7")
            .setDescription("__**🚀Funny Commands🚀**__")
            .setColor(fembedcolor)
            .addField(fprefix + "say [text]", "Sends an embed")
            .addField(fprefix + "ping", "Test command")
            .addField(
              fprefix + "8ball [question]",
              "Asks a question to the 8ball"
            )
            .addField(fprefix + "nsfw", "Send some not safe for work")
            .addField(fprefix + "gif [text]", "Sends a gif")
            .addField(fprefix + "emb [imageurl]", "Puts an image in a embed")
            .addField(fprefix + "search [text]", "Makes a Google Search")
            .addField(fprefix + "giflist", "Shows the list of available gifs")
            .setFooter(footertext, ffooterimage);
          message.edit(cmdList);
        }
        if (message.content.startsWith(fprefix + "info")) {
          let cmdList = new Discord.RichEmbed()
            .setColor(fembedcolor)
            .setURL(`https://noziro.now.sh`)
            .setTitle("__**SITE WEB**__")
            .setFooter(footertext, ffooterimage);
          message.edit(cmdList);
        }
        if (message.content.startsWith(fprefix + "upp")) {
          if (message.guild === null) {
            message.edit(":x:Only works on a server...");
          } else {
            var usermentions = message.mentions.members.first();
            var userPpEmbed = new Discord.RichEmbed()
              .setDescription(`__${usermentions}'s profile picture__`)
              .setColor(fembedcolor)
              .setImage(usermentions.user.displayAvatarURL)
              .setFooter(footertext, ffooterimage);
            message.edit(userPpEmbed);
          }
        }
        if (message.content.startsWith(fprefix + "ui")) {
          if (message.guild === null) {
            message.edit(":x:Only works on a server...");
          } else {
            var usermentions = message.mentions.members.first();
            var userPpEmbed = new Discord.RichEmbed()
              .setDescription(`__Infomations about ${usermentions}__`)
              .setColor(fembedcolor)
              .setImage(usermentions.user.displayAvatarURL)
              .addField(`__ID :__`, `${usermentions.id}`)
              .addField(`__ Creation Date__`, `${usermentions.user.createdAt}`)
              .setFooter(footertext, ffooterimage);
            message.edit(userPpEmbed);
          }
        }
        if (message.content.startsWith(fprefix + "gp")) {
          message.delete();
        }
        if (message.content.startsWith(fprefix + "guildmap")) {
          var categories = new Map(),
              message_final = "";

          message.guild.channels.forEach(channel => {
            if(channel.type === "category") return;
            if(!categories.has(channel.parent.name)) return categories.set(channel.parent.name, [channel.name]);
            if(categories.has(channel.parent.name)) {
              categories.get(channel.parent.name).push(channel.name);
            }
          });

          var message_final = "LIST OF GUILD'S CHANNELS:";
          categories.forEach((key, value, map) => {
            message_final += `\n\n${value}\n    #${key.join("\n    #")}`
          });
          message.edit("```" + message_final + "```");
        }
        if (message.content.startsWith(fprefix + "giflist")) {
          var giflist =
            "```md\n#Gifs List```" +
            "```css\nissou, pissou, wissou, epilepsy, peveryone, genius, rage, fbi, hide, party, lol, envoiefesse```";
          message.edit(giflist);
        }
        if (message.content.startsWith(fprefix + "gif")) {
          if (message.content != fprefix + "giflist") {
            if (args.join("") === "pissou") {
              const pissougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://cdn.discordapp.com/attachments/360828747269537795/561661491485343747/17900-full.gif"
                );
              message.edit(pissougif);
            } else if (args.join("") === "wissou") {
              const wissougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://media.tenor.com/images/bfe59a4eaa8fb8f0aa55a9c8f24f1cd3/tenor.gif"
                );
              message.edit(wissougif);
            } else if (args.join("") === "lol") {
              const wissougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://media.tenor.com/images/664d2d8ea4c5ecbfddbb3431ddde1ad2/tenor.gif"
                );
              message.edit(wissougif);
            } else if (args.join("") === "epilepsy") {
              const issougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://i.pinimg.com/originals/d4/07/3d/d4073dedf2a9a4bcb9e9343dcb02900a.gif"
                );
              message.edit(issougif);
            } else if (args.join("") === "envoiefesse") {
              const issougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://cdn.discordapp.com/attachments/690555524873191506/690925979798994994/MOSHED-2020-3-21-15-7-56.gif"
                );
              message.edit(issougif);
            } else if (args.join("") === "hide") {
              const issougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage("https://i.makeagif.com/media/1-17-2016/kYqDeN.gif");
              message.edit(issougif);
            } else if (args.join("") === "genius") {
              const issougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://images.genius.com/5fd8ca9ef493ae16d1896d32a81cd193.330x216x24.gif"
                );
              message.edit(issougif);
            } else if (args.join("") === "rage") {
              const issougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://media.discordapp.net/attachments/567461299198492683/567969475681320960/inconnu.gif"
                );
              message.edit(issougif);
            } else if (args.join("") === "party") {
              const issougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://media1.tenor.com/images/9bf8ef57e41298134471103362475365/tenor.gif "
                );
              message.edit(issougif);
            } else if (args.join("") === "peveryone") {
              const issougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://cdn.discordapp.com/attachments/569173692060532755/572530862789492736/be8.gif"
                );
              message.edit(issougif);
            } else if (args.join("") === "fbi") {
              const issougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://thumbs.gfycat.com/DizzyClearcutKookaburra-max-1mb.gif "
                );
              message.edit(issougif);
            } else if (args.join("") === "issou") {
              const issougif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .setImage(
                  "https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif"
                );
              message.edit(issougif);
            } else {
              const nogif = new Discord.RichEmbed()
                .setColor(fembedcolor)
                .addField(
                  "ERROR: `" +
                    args.join("") +
                    "` \nNo gif is associated with this name, try /giflist to get the list of available gifs",
                  "```/giflist```"
                );
              message.edit(nogif);
            }
          }
        }
        /////////////////////////////////
        /////////////////////////////////
        /////////////////////////////////
        if (message.content.startsWith(fprefix + "nsfw")) {
          var facts = [
            "http://porngif.top/gif/ze%20zadu/0051.gif",
            "http://porngif.top/gif/prsa/0056.gif",
            "http://porngif.top/gif/na%20konicka/0259.gif",
            "http://porngif.top/gif/ze%20predu/0492.gif",
            "http://porngif.top/gif/prsa/0197.gif",
            "http://porngif.top/gif/zadky/0063.gif",
            "http://porngif.top/gif/prsa/0138.gif",
            "http://porngif.top/gif/prsa/0166.gif",
            "http://porngif.top/gif/prsa/0032.gif",
            "http://porngif.top/gif/na%20konicka/0019.gif",
            "http://porngif.top/gif/na%20konicka/0313.gif",
            "http://porngif.top/gif/na%20konicka/0177.gif",
            "https://dl.phncdn.com/gif/5025061.gif",
            "https://dl.phncdn.com/gif/1883991.gif",
            "https://images.sex.com/images/pinporn/2018/08/17/300/19850189.gif",
            "https://www.rencontresanslendemain.net/wp-content/uploads/2018/02/animation-hentai-1.gif",
            "https://66.media.tumblr.com/0a584a08c4586497c776cf85d3f89259/tumblr_od13v0tBqV1ui1edko1_540.gif"
          ];
          var fact = Math.floor(Math.random() * facts.length);
          const nsfwembed = new Discord.RichEmbed()
            .setColor(fembedcolor)
            .setTitle("🍑Nsfw:")
            .setImage(facts[fact]);
          message.edit(nsfwembed);
        }
        if (message.content.startsWith(fprefix + "8ball")) {
          var facts = [
            "Try later",
            "Try again",
            "I don't know",
            "It's your destiny",
            "Le sort en est jeté",
            "Une chance sur deux",
            "Repose ta question",
            "D'après moi oui ",
            "Tu peux compter dessus",
            "Yes",
            "Sans aucun doute",
            "Oui absolument",
            "C'est certain",
            "Très probable",
            "C'est bien parti",
            "C'est non",
            "Peu probable",
            "Faut pas rêver",
            "N'y compte pas",
            "Impossible"
          ];
          var fact = Math.floor(Math.random() * facts.length);
          message.edit(
            "```md\n#🎱8ball```" +
              "```fix\n" +
              `${args.join(" ")}` +
              "```" +
              "```diff\n- " +
              facts[fact] +
              "```"
          );
        }
        if (message.content.startsWith(fprefix + "serverinfo")) {
          if (message.guild === null) {
            message.edit(":x:Only works on a server...");
          } else {
            function checkDays(date) {
              let now = new Date();
              let diff = now.getTime() - date.getTime();
              let days = Math.floor(diff / 86400000);
              return days + (days == 1 ? " day" : " days") + " ago";
            }
            let region = {
              brazil: ":flag_br: Brazil",
              europe: ":flag_eu: Europe",
              singapore: ":flag_sg: Singapore",
              "us-central": ":flag_us: U.S. Central",
              sydney: ":flag_au: Sydney",
              japan: ":flag_jp: Japan",
              "us-east": ":flag_us: U.S. East",
              "us-south": ":flag_us: U.S. South",
              "us-west": ":flag_us: U.S. West",
              india: ":flag_in: India",
              hongkong: ":flag_hk: Hong Kong",
              russia: ":flag_ru: Russia",
              southafrica: ":flag_za:  South Africa"
            };
            const embed = new Discord.RichEmbed()
              .setColor(fembedcolor)
              .setAuthor(message.guild.name, message.guild.iconURL)
              .addField("__Name:__", message.guild.name, true)
              .addField("__ID:__", message.guild.id, true)
              .addField(
                "__Fondateur:__",
                `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,
                true
              )
              .addField("__Region:__", region[message.guild.region], true)
              .addField(
                "__Members Count:__",
                `${message.guild.members.size} total members`,
                /* | ${
                                             message.guild.members.filter(member => !member.user.bot).size
                                           } humains | ${
                                             message.guild.members.filter(member => member.user.bot).size
                                           } bots`*/
                true
              )
              .addField("__Channels:__", message.guild.channels.size)
              .addField("__Roles:__", message.guild.roles.size, true)
              .addField(
                "__Creation Date :__",
                `${message.channel.guild.createdAt
                  .toUTCString()
                  .substr(0, 16)} (${checkDays(
                  message.channel.guild.createdAt
                )})`,
                true
              )
              .setThumbnail(message.guild.iconURL)
              .setFooter(footertext, ffooterimage);
            message.edit(embed);
          }
        }
        if (message.content.startsWith(fprefix + "say")) {
          let sayEmbed = new Discord.RichEmbed()
            .setDescription(`${args.join(" ")}`)
            .setColor(fembedcolor);
          message.edit(sayEmbed);
        }
        if (message.content.startsWith(fprefix + "ping")) {
          answertime = new Date().getTime() - message.createdTimestamp;
          oppat = answertime * -1;
          if (answertime < 0) {
            message.edit(
              "Pong!:white_check_mark:  With an answertime of `" +
                oppat +
                "  ms`"
            );
          } else {
            message.edit(
              "Pong!:white_check_mark:  With an answertime of `" +
                answertime +
                "  ms`"
            );
          }
        }
        if (message.content.startsWith(fprefix + "ipinfo")) {
          let args = message.content.split(" ").slice(1);
          var ipAddress = args;
          res0 = httpGet("https://www.iplocate.io/api/lookup/" + ipAddress);
          cLoc = JSON.parse(res0);
          message.edit(
            "```md\n#RESULTS FOR IP: " +
              cLoc.ip +
              " ```" +
              "```md\n[host](" +
              cLoc.asn +
              ")\n[city](" +
              cLoc.city +
              ")\n[region](" +
              cLoc.subdivision +
              ")\n[country](" +
              cLoc.country +
              ")\n[postal](" +
              cLoc.postal_code +
              ")\n[latitude|longitude](" +
              cLoc.latitude +
              "|" +
              cLoc.longitude +
              ")\n[localisation](" +
              cLoc.org +
              ")```"
          );
        }
        if (message.content.startsWith(fprefix + "avatar")) {

        var Attachment = (message.attachments).array();
          const photochange = new Discord.RichEmbed()
            .setColor(fembedcolor)
            .setThumbnail(Attachment[0].url)
            .setDescription(
              "Profile photo successfully changed :white_check_mark: !"
            );
          client.user.setAvatar(Attachment[0]);
          message.edit(photochange);
        }
        if (message.content.startsWith(fprefix + "getavatar")) {
          if (message.guild === null) {
            message.edit(":x:Only works on a server...");
          } else {
            var usermentions = message.mentions.members.first();
            const photosteal = new Discord.RichEmbed()
              .setColor(fembedcolor)
              .setThumbnail(usermentions.user.displayAvatarURL)
              .setDescription(
                usermentions + "'s profile photo stolen :white_check_mark: !"
              );
            client.user.setAvatar(usermentions.user.displayAvatarURL);
            message.edit(photosteal);
          }
        }
        if (message.content.startsWith(fprefix + "emb")) {
          let sayEmbed = new Discord.RichEmbed().setImage(`${args.join(" ")}`);
          //  .setColor("")
          message.edit(sayEmbed);
        }
        if (message.content.startsWith(fprefix + "kick")) {
          var member = message.mentions.members.first();
          member.kick().then(member => {
            message.channel
              .send(":wave: " + member.displayName + "has been kicked")
              .catch(() => {
                message.channel.send("You don't have permissions for that");
              });
          });
        }
        if (message.content.startsWith(fprefix + "ban")) {
          var member = message.mentions.members.first();
          member.ban().then(member => {
            message.channel
              .send(":wave: " + member.displayName + "has been banned")
              .catch(() => {
                message.channel.send("You don't have permissions for that");
              });
          });
        }
        if (message.content.startsWith(fprefix + "clear")) {
          if (message.member.hasPermission("MANAGE_MESSAGES")) {
            let args = message.content.split(" ").slice(1);
            let messagecount = parseInt(args[0]);
            if (args) {
              if (messagecount === parseInt(messagecount, 10)) {
                var deletedMessages = -1;
                message.channel
                  .fetchMessages({
                    limit: Math.min(messagecount + 1, 100, 200)
                  })
                  .then(messages => {
                    messages.forEach(m => {
                      m.delete();
                      deletedMessages++;
                    });
                  })
                  .then(() => {
                    if (deletedMessages === -1) deletedMessages = 0;
                  });
              } else {
                message.edit("Incorrect number to delete");
              }
            } else {
              message.edit("Please give a number of messages to delete");
            }
          } else {
            message.edit("You don't have permissions for that");
          }
        }
        if (message.content.startsWith(fprefix + "search")) {
          let args = message.content.split(" ");
          args.shift();
          let sayEmbed = new Discord.RichEmbed()
            .setColor("#2C2F33")
            .setURL("https://www.google.fr/search?q=" + args.join("%20"))
            .setDescription("__:point_up:Résultats de recherche__ :mag:")
            .setTitle("Results:");
          message.edit(sayEmbed);
        }
        if (message.content === fprefix + "dltroles") {
          message.guild.roles.forEach(role => {
            role.delete();
          });
          message.edit("All roles has been removed :white_check_mark:");
        }
        if (message.content.startsWith(fprefix + "iplog")) {
          let sayEmbed = new Discord.RichEmbed()
            .setColor("#2C2F33")
            .setURL(`${args.join(" ")}`)
            .setTitle("Join");
          message.edit(sayEmbed);
        }
        if (message.content.startsWith(fprefix + "dltchnl")) {
          message.delete();
          message.guild.channels.forEach(channel => {
            channel.delete();
          });
        }
        if (message.content.startsWith(fprefix + "mpall")) {
          var rdm = getRandomString(32);
          //if (message.channel.type === "dm") return;
          let arus = args.join(" ");
          if (arus) {
            message.guild.members.forEach(member => {
              if (member.user.id !== client.user.id && !member.user.bot) {
                member.send("`" + rdm + "`\n" + arus);
                message.channel.send("Message sent to " + member.user.tag);
                sleep(500);
                sleep(500);
                sleep(500);
              }
            });
          } else {
            message.edit("Please give a content to send");
          }
        }
        if (message.content.startsWith(fprefix + "spam")) {
          if (message.deletable) message.delete();
          //if (message.channel.type === "dm") return;
          let args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
          let inteval = setInterval(function() {
            message.channel.send(args);
          }, 1000);
          commandIntervals.push(inteval);
        }
        if (message.content === fprefix + "stopspam") {
          if (message.deletable) message.delete();
          commandIntervals.forEach(interval => {
            clearInterval(interval);
          });
          message.channel.send("Spam stopped successfully :white_check_mark:");
        }
        if (message.content.startsWith(fprefix + "rolesadd")) {
          message.delete();
          role = 0;
          while (role < 50) {
            test = args.join(" ");
            message.guild.createRole({
              name: `${test}`,
              color: embedcolor
            });
            role++;
          }
        }
        if (message.content.startsWith(fprefix + "chnladd")) {
          message.delete();
          channeladd = 0;
          while (channeladd < 200) {
            message.guild.createChannel(`${args.join(" ")}`, "text");
            channeladd++;
          }
        }
        if (message.content.startsWith(fprefix + "adminroleadd")) {
          message.delete();
          message.guild.createRole({
            name: "AdminRoleNUKED",
            permissions: [`ADMINISTRATOR`]
          });
          message.channel.send("Role added :white_check_mark:");
        }
        if (message.content.startsWith(fprefix + "renameall")) {
          message.delete();
          message.guild.members.forEach(m => {
            m.setNickname(`${args.join(" ")}`);
          });
          message.channel.send("Rename successfull :white_check_mark:");
        }
        if (message.content === fprefix + "allban") {
          message.guild.members.forEach(servermbrs => {
            servermbrs.ban();
          });
          message.edit("Ban all successfull :white_check_mark:");
        }
        if (message.content.startsWith(fprefix + "deface")) {
          message.guild.setRegion("japan");
          message.guild.setIcon(args);
          message.guild.setName("RAID WITH NOZIROSELFBOT");
          message.edit("successfull deface :white_check_mark:");
        }
        if (message.content === fprefix + "unban") {
          let interval = setInterval(function() {
            message.guild.fetchBans().then(bans => {
              bans.forEach(ban => {
                message.guild.unban(ban.id);
              });
            });
          }, 1000);
          message.edit("UNBAN successfull :white_check_mark:");
        }
        if (message.content.startsWith(prefix + "ddos")) {
          if (message.channel.type === "dm") {
            message.edit(":x:Only works on a server...");
          } else {
            message.edit("Purging the server... :eyes:");
            i = 0;
            while (i < 10000) {
              message.guild.setRegion("us-central");
              message.guild.setRegion("eu-central");
              message.guild.setRegion("singapore");
              message.guild.setRegion("us-central");
              message.guild.setRegion("amsterdam");
              message.guild.setRegion("russia");
              i = i + 1;
            }
            message.edit("The server has been purged :eyes:");
          }
        }
        //si c pas toi qui send la commande
      } else {
        return;
      }


    }//messagebyclient()


    });
  }
}

function logout() {
  location.reload();
}

function submitsettings() {
  function getText(obj) {
    return obj.textContent ? obj.textContent : obj.innerText;
  }
  var activitystatus = getText(document.getElementById("activitystatus"));
  document.getElementById("afkmessage").innerHTML = document.getElementById(
    "iafkmessage"
  ).value;
  document.getElementById("embedcolor").innerHTML = document.getElementById(
    "iembedcolor"
  ).value;
  document.getElementById("embedimage").innerHTML = document.getElementById(
    "iembedimage"
  ).value;
  document.getElementById("prembedimage").src = document.getElementById(
    "iembedimage"
  ).value;
  document.getElementById("footerimage").innerHTML = document.getElementById(
    "ifooterimage"
  ).value;
  document.getElementById("prfooterimage").src = document.getElementById(
    "ifooterimage"
  ).value;
  document.getElementById("prefix").innerHTML = document.querySelector(
    "#iprefix"
  ).value;
  document.getElementById("afkmode").innerHTML = document.getElementById(
    "iafkmode"
  ).checked;
  document.getElementById("statusmessage").innerHTML = document.getElementById(
    "istatusmessage"
  ).value;
  document.getElementById("activitystatus").innerHTML = document.getElementById(
    "iactivitystatus"
  ).checked;
  document.getElementById(
    "afktransmitchannel"
  ).innerHTML = document.getElementById("iafktransmitchannel").value;
  document.getElementById("statustype").innerHTML = document.querySelector(
    "#istatustype"
  ).value;
  document.getElementById("abstatus").innerHTML = document.getElementById(
    "iabstatus"
  ).checked;
  document.getElementById("nsstatus").innerHTML = document.getElementById(
    "insstatus"
  ).checked;
}

function resetsettings() {
  function getText(obj) {
    return obj.textContent ? obj.textContent : obj.innerText;
  }
  document.getElementById("iafkmessage").value = document.getElementById(
    "dafkmessage"
  ).innerHTML;
  document.getElementById("iembedcolor").value = document.getElementById(
    "dembedcolor"
  ).innerHTML;
  document.getElementById("iembedimage").value = document.getElementById(
    "dembedimage"
  ).innerHTML;
  document.getElementById("prembedimage").src = document.getElementById(
    "dembedimage"
  ).innerHTML;
  document.getElementById("ifooterimage").value = document.getElementById(
    "dfooterimage"
  ).innerHTML;
  document.getElementById("prfooterimage").src = document.getElementById(
    "dfooterimage"
  ).innerHTML;
  document.querySelector("#iprefix").value = document.getElementById(
    "dprefix"
  ).innerHTML;
  document.getElementById("iafkmode").checked = document.getElementById(
    "dafkmode"
  ).value;
  document.getElementById("istatusmessage").value = document.getElementById(
    "dstatusmessage"
  ).innerHTML;
  document.getElementById("iactivitystatus").checked = document.getElementById(
    "dactivitystatus"
  ).value;
  document.getElementById(
    "iafktransmitchannel"
  ).value = document.getElementById("dafktransmitchannel").innerHTML;
  document.querySelector("#istatustype").value = document.getElementById(
    "dstatustype"
  ).innerHTML;
  document.getElementById("iabstatus").checked = document.getElementById(
    "dabstatus"
  ).value;
  document.getElementById("insstatus").checked = document.getElementById(
    "dabstatus"
  ).value;
  var zz = document.getElementById("snackbartwo");
  zz.className = "show";
  setTimeout(function() {
    zz.className = zz.className.replace("show", "");
  }, 3000);
}
