const { Command, KlasaMessage } = require('klasa')
const { MessageAttachment } = require('discord.js')
const YuigahamaError = require('../../../lib/error/YuigahamaError')
const fetch = require('node-fetch')

class Cat extends Command {
  constructor (...args) {
    super(...args, {
      requiredPermissions: ['ATTACH_FILES'],
      description: language => language.get('COMMAND_CAT_DESCRIPTION')
    })
  }

  /**
   * @param {KlasaMessage} message
   */
  async run (message) {
    const body = await fetch('http://aws.random.cat/meow')
      .then(res => res.json())
      .then(body => body.file)
      .catch(() => null)
    if (!body) throw new YuigahamaError('Request failed')

    return message.send(new MessageAttachment(body))
  }
}

module.exports = Cat
