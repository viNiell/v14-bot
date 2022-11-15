const { EmbedBuilder } = require('@discordjs/builders')
const { Client, SlashCommandBuilder, ChatInputCommandInteraction, SelectMenuBuilder, ActionRowBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows for you help commands list"),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {

     const embed = new EmbedBuilder()
        .setTitle('🧢 Help list:')
         .setDescription("Total commands: 32")
       .setThumbnail(interaction.guild.iconURL())
       .addFields([
         { name: 'Name:', value: `${client.user.username}`, inline: true },
         { name: 'Discriminator:', value: `#${client.user.discriminator}`, inline: true },
         { name: 'Servers:', value: `${client.guilds.cache.size}`, inline: true },
         { name: 'Users:', value: `${client.users.cache.size}`, inline: true },
         { name: 'Channels:', value: `${client.channels.cache.size}`, inline: true },
         { name: 'Shared by:', value: `[@YassineHzz](https://youtube.com/c/yassinehzz)`, inline: true },
          ])
    .setColor(client.mainColor)
        .setFooter({text: `${client.user.tag} | YT: YassineHzz`, iconURL: client.user.displayAvatarURL()})
        
    const embed1 = new EmbedBuilder()
    .setTitle('ℹ️ Info Commands (4)')
     .setColor(client.mainColor)
      .addFields([
         { name: '/help', value: `Help guide`, inline: true },
         { name: '/invite', value: `Invite link`, inline: true },
         { name: '/ping', value: `Show latency`, inline: true },
         { name: '/uptime', value: `Show uptime of the bot`, inline: true },

])
        .setFooter({text: `${client.user.tag} | YT: YassineHzz`, iconURL: client.user.displayAvatarURL()})
      
    const embed2 = new EmbedBuilder()
      .setTitle('📢 Public Commands (13)')
 .addFields([
        { name: '/meme', value: `Send a meme`, inline: true },
        { name: '/rank', value: `To see your rank`, inline: true },
        { name: '/music play', value: `Play music for you`, inline: true },
        { name: '/music volume', value: `Set volume`, inline: true },
        { name: '/music settings', value: `Pause, resume, repeat etc...`, inline: true },
        { name: '/afk', value: `Makes you afk`, inline: true },
        { name: '/afk return', value: `Removes your afk`, inline: true },
        { name: '/translate', value: `Translate text`, inline: true },
        { name: '/together', value: `Starts youtube session`, inline: true },
        { name: '/voice invite', value: `Invite someone to your vc`, inline: true },
        { name: '/voice disallow', value: `Remove acces to your vc`, inline: true },
        { name: '/voice public', value: `Everyone have acces to your vc`, inline: true },
        { name: '/voice name', value: `Change name of vc`, inline: true },


])
      .setColor(client.mainColor)
        .setFooter({text: `${client.user.tag} | YT: YassineHzz`, iconURL: client.user.displayAvatarURL()})
      
      const embed3 = new EmbedBuilder()
      .setTitle(':crown: Owner Commands (4)')
       .addFields([
                   { name: '/ban', value: `Ban an user`, inline: true },
                   { name: '/kick', value: `Kicks an user`, inline: true },
                   { name: '/timeout', value: `Mute an user`, inline: true },
                   { name: '/clear', value: `Clear messages`, inline: true },
                   { name: '/setup info', value: `Setup info`, inline: true },
                   { name: '/setchangelog', value: `to send new update to bot's users`, inline: true },
                   { name: '/setup levels', value: `toggle level system, change background`, inline: true },
                   { name: '/setup captcha', value: `setup captcha system`, inline: true },
                   { name: '/setup voice', value: `Setup temp vc`, inline: true },
                   { name: '/setup remove', value: `remove setup`, inline: true },
         

])





        .setColor(client.mainColor)
        .setFooter({text: `${client.user.tag} | YT: YassineHzz`, iconURL: client.user.displayAvatarURL()})
      const embed4 = new EmbedBuilder()
        
      .setTitle('⚙ Developper Commands (11)')
       .addFields([
                   { name: '/reload commands', value: `to reload commands`, inline: true },
                   { name: '/reload events', value: `to reload events`, inline: true },
                   { name: '/setavatar', value: `change avatar`, inline: true },
                   { name: '/setname', value: `change name`, inline: true },
                   { name: '/setstatus', value: `change status`, inline: true },
         


])


        .setColor(client.mainColor)
        .setFooter({text: `${client.user.tag} | YT: YassineHzz`, iconURL: client.user.displayAvatarURL()})
 
let rowmenu = new ActionRowBuilder()
         .addComponents(
           new SelectMenuBuilder()
           .setCustomId('menu2')
           .setPlaceholder('Help commands list')
           .setMinValues(1)
           .setMaxValues(1)
           .addOptions([
             {
               label: 'Info Commands',
               value: 'option1',
               description: 'Click me!',
               emoji: "ℹ️",
             },
             {
               label: 'Public Commands',
               value: 'option2',
               description: 'Click me!',
               emoji: "📢", 
             },
             {
              label: 'Owner Commands',
              value: 'option3',
              description: 'Click me!',
              emoji: "👑",
            },
             {
              label: 'Developper Commands',
              value: 'option5',
              description: 'Click me!',
              emoji: "⚙️",
            },
             {
               label: "Home Page",
                value: 'option4',
               description: 'Click me!',
               emoji: '🏠',
             },
           ])
         )

   
        //-----------------------------OPTIONS----------------------
        
  const MESSAGE = await interaction.reply({embeds : [embed], components : [rowmenu]});
  const filter = ( button ) => button.user.id === interaction.user.id 
  const collector = MESSAGE.createMessageComponentCollector();

    collector.on('collect', async (b) => {

       if(b.values[0] == "option1") {
            await b.update({embeds : [embed1], components : [rowmenu]});
            

        }//

       if(b.values[0] == "option2") {
            await b.update({embeds : [embed2], components : [rowmenu]});
            

        }

        if(b.values[0] == "option3") {
          await b.update({embeds : [embed3], components : [rowmenu]});
          

      }

       if(b.values[0] == "option4") {
            await b.update({embeds : [embed], components : [rowmenu]});
            

        }
       if(b.values[0] == "option5") {
            await b.update({embeds : [embed4], components : [rowmenu]});
            

        }

  
    })
  },
};