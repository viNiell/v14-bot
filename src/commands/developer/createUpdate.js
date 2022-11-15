const { Client, SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } = require('discord.js')
const {} = require('../../../config.json')
 
module.exports = {
    data: new SlashCommandBuilder()
    .setName("setchangelog")
    .setDescription("Create an update message for your bot users!")
    .addStringOption(
        option =>
        option.setName("changelog")
        .setDescription("Create a changelog for your client")
        .setRequired(true)),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const { options } = interaction;

        client.guilds.cache.each(guild => {

            const guildOwner = guild.fetchOwner({force: true});
            const UpdateEmbed = new EmbedBuilder()
            .setTitle(":new: New Change Log!")
            .setDescription(`There is a new Update for this Bot in ***${guild.name}***!\n**Changelog:**\n${options.getString("changelog")}`)
            .setFooter({text: client.user.tag, iconURL: client.user.displayAvatarURL()})
            .setColor(client.mainColor)
            .setThumbnail(client.user.displayAvatarURL())

            guildOwner.then((member) => {
                member.send({embeds: [UpdateEmbed]}).catch(() => interaction.channel.send({content: `❌ Cannot send message to ${member.user.tag}!`}))
            })
        })

        interaction.reply({content: "✅ Update sent successfully", ephemeral: true})
    },
    developer: true
}