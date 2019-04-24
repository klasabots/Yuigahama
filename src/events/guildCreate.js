const { Event, KlasaGuild } = require('klasa')
const { MessageEmbed } = require('discord.js')

/**
 * @extends Event
 */
class guildCreate extends Event {
  /**
   * @param {KlasaGuild} guild
   */
  run (guild) {
    this.client.user.setActivity({ name: `${this.client.options.prefix}help | ${this.client.guilds.size} guilds`, type: 'WATCHING' })
    this.client.console.log(`${guild.name} に参加しました。`)
  }
}

module.exports = guildCreate
