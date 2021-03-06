const { Language } = require('klasa')

module.exports = class extends Language {
  constructor (...args) {
    super(...args)
    this.language = {
      MEMBER_JOIN: (name) => `${name} has joined the server.`,
      MEMBER_QUIT: (name) => `${name} has left the server.`,
      COMMAND_DONATE_DESCRIPTION: 'Send donation page URL.',
      COMMAND_BAN_DESCRIPTION: 'Ban members from the server.',
      COMMAND_BAN_FAIL_POSITION: 'You can not process this member.',
      COMMAND_BAN_FAIL_BANNABLE: 'I am not able to ban this member, Sorry.',
      COMMAND_BAN_DONE: (name) => `${name} has been banned from the server.`,
      COMMAND_KICK_DESCRIPTION: 'Kick member from the server.',
      COMMAND_KICK_FAIL_POSITION: 'You can not process this member.',
      COMMAND_KICK_FAIL_KICKABLE: 'I am not able to kick this member, Sorry.',
      COMMAND_KICK_DONE: (name) => `${name} has been kicked from the server.`,
      COMMAND_MINECRAFT_UUID_DESCRIPTION: 'Get UUID from player name.',
      COMMAND_MINECRAFT_UUID_FAIL: 'Could not get UUID. The player name may be wrong.',
      COMMAND_MINECRAFT_NAMEHISTORY_DESCRIPTION: 'Send player name history.',
      COMMAND_OFFICIAL_GUILD_DESCRIPTION: 'Send the official guild invite URL.',
      COMMAND_YUIGAHAMA_DESCRIPTION: 'Send Yuigahama images.',
      COMMAND_FOXGIRL_DESCRIPTION: 'Send fox girl images.',
      COMMAND_NEKOGIRL_DESCRIPTION: 'Send neko girl images.',
      COMMAND_DOG_DESCRIPITON: 'Send dog images.',
      COMMAND_CAT_DESCRIPTION: 'Send cat images.',
      COMMAND_LEWD_FOXGIRL_DESCRIPTION: 'Send lewd fox girl images.',
      COMMAND_LEWD_NEKOGIRL_DESCRIPTION: 'Send lewd neko girl images.',
      COMMAND_HENTAI_DESCRIPTION: 'Send lewd images.',
      COMMAND_AVATAR_DESCRIPTION: 'Send avatar images of yourself or other users.',
      COMMAND_BOTINFO_DESCRIPTION: 'Shows the environment in which the bot is running.',
      COMMAND_POCKETMINE_DESCRIPTION: 'View the details of the latest PocketMine-MP release.',
      COMMAND_POGGIT_DESCRIPTION: 'Search for PocketMine-MP plugins from Poggit.',
      COMMAND_POGGIT_EXTENDED_HELP: 'Older versions of plug-ins may appear in the search results. be careful.',
      COMMAND_POGGIT_NOT_FOUND: 'Could not be located.',
      COMMAND_DISCORDJS_DESCRIPTION: 'Search the document of Discord.js.',
      COMMAND_CHANNEL_INFO_DESCRIPTION: 'You can check the channel information.',
      COMMAND_GUILD_INFO_DESCRIPTION: 'You can check the information of the server.',
      COMMAND_MEMBER_INFO_DESCRIPTION: 'You can check the information of server members.',
      COMMAND_ROLE_INFO_DESCRIPTION: 'You can check the position information.',
      COMMAND_UPDATE_DESCRIPTION: 'Update data in sync with the master branch.',
      COMMAND_IMAGE_EXTENDED_HELP: 'If you add --gif, a GIF image will be sent.',
      COMMAND_CHANNEL_INFO_EXTENDED_HELP: 'Only text and voice channels can be checked.',
      NOT_CHANNEL_SUPPORT: 'The channel is not supported.',
      // Argument
      ARGUMENT_ROLE_FAIL: (name) => `${name} must be a valid name, id or role mention.`,
      ARGUMENT_ROLE_FOUND: (roles) => `Found multiple matches: \`${roles.map(role => role.name).join('`, `')}\``,
      ARGUMENT_ATTACHMENT_FOUND: (name) => `${name} must be a file.`,
      COMMAND_BOTINFO_STATUS: (platform, model, memory) => [
        '= Machine Information =',
        '',
        `Platform       :: ${platform}`,
        `CPU            :: ${model}`,
        `Memory         :: ${memory} GB`
      ],
      COMMAND_HUG_DESCRIPTION: 'Hug to other memebr.',
      COMMAND_HUG: (author, member) => `${author} hugs you ${member}`,
      COMMAND_EXEC_DESCRIPTION: 'Execute commands in the terminal',
      COMMAND_FORTNITE_DESCRIPTION: 'You can check various information about Fortnite.',
      COMMAND_MOJANG_STATUS: 'Display the status of various Mojang services.',
      COMMAND_MDN_DESCRIPTION: 'You can search MDN Web docs.',
      COMMAND_TOP_INVITE_DESCRIPTION: 'Display the invitation ranking.',
      COMMAND_TOP_INVITE_FAIL: 'There are no invites, or none of them have been used!',
      IMAGE_FILTER_DELETE_MESSAGE: 'Please do not send NSFW images to SFW channels.',
      COMMAND_IMAGE_FILTER_DESCRIPTION: 'Powerful image filter.',
      COMMAND_IMAGE_FILTER_EXTENDED_HELP: [
        'Image filters can only be used on servers that have been approved by an administrator.',
        '',
        'You can specify the filtering level between 1 and 9.',
        'By default, filtering level 3 is set.',
        '',
        'Warning: Setting the level to high will activate a powerful filter, but it may also cause false positives.',
        'Set the level that suits your server.'
      ],
      COMMAND_IMAGE_FILTER_ON: 'Image filter has been enabled.',
      COMMAND_IMAGE_FILTER_OFF: 'Image filter has been disabled.',
      COMMAND_IMAGE_FILTER_FAIL: 'This server has not been approved.',
      COMMAND_IMAGE_FILTER_LEVEL_FAIL: 'Please specify the filtering level.',
      COMMAND_IMAGE_FILTER_LEVEL_DONE: (level) => `Set the filtering level to **${level}**`,
      COMMAND_APPROVAL_DESCRIPTION: 'Set up an approval server.',
      COMMAND_APPROVAL_ENABLED: 'Approved the server.',
      COMMAND_APPROVAL_DISABLED: 'The approval has been discarded.',
      COMMAND_APPROVAL_FAIL: 'It is not a server or YuigahamaBot has not been introduced.',
      COMMAND_APPROVAL_ENABLED_RLREADY: 'This server has already been approved.',
      COMMAND_APPROVAL_DISABLED_RLREADY: 'This server has not been approved.',
      COMMAND_TRUCKERS_MP_DESCRIPTION: 'Display the TruckersMP status.',
      COMMAND_EMOJI_INFO_DESCRIPTION: 'Display detailed information of emoji.',
      EASYPIN_PERMISSION_FAIL: (username) => `${username}, please give ${this.client.user.toString()} the \`Manage Messages\` permission to pin.`,
      EASYPIN_FAIL: 'Failed to pin. Check the bots permissions and try again.',
      AUTOROLE_PERMISSION_ERROR: (guildname) => `Auto role was enabled in ${guildname}, but because I did not have the \`Manage Roles\` permission, I could not give the participating members a role.`
    }
  }

  async init () {
    await super.init()
  }
}
