const { EmbedBuilder } = require('@discordjs/builders')
const { Client, SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Show bot Latency"),
    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
    await interaction.reply(`🏓 Ping...`)
      setTimeout(() => interaction.editReply({content:"🏓 Pong..!"}), 300)
      const embed = new EmbedBuilder()
      .setDescription(`:hourglass: **Time: **${Date.now() - interaction.createdTimestamp}ms. \n:stopwatch: **WS: **${Math.round(client.ws.ping)}ms.`)
      .setColor(client.mainColor)
        .setFooter({text: client.user.tag, iconURL: client.user.displayAvatarURL()})
          setTimeout(() => interaction.editReply({embeds: [embed]}), 300)
    }
}