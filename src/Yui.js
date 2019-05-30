require('dotenv').config()

const { Client } = require('klasa')
const { version } = require('../package.json')
const DBLAPI = require('dblapi.js')

Client.defaultPermissionLevels
  .add(4, ({ guild, member }) => guild && member.permissions.has('KICK_MEMBERS'), { fetch: true })
  .add(5, ({ guild, member }) => guild && member.permissions.has('BAN_MEMBERS'), { fetch: true })

Client.defaultGuildSchema
  .add('channels', folder => folder
    .add('JoinLog', 'TextChannel')
    .add('JoinMessage', 'string', { default: 'Welcome' })
    .add('QuitLog', 'TextChannel')
    .add('QuitMessage', 'string', { default: 'Bye...' })
  )
  .add('mod', folder => folder
    .add('AutoRole', 'role')
  )

const client = new Client({
  prefix: 'yui!',
  regexPrefix: /^yuigahama(@|!)/i,
  language: 'ja-JP',
  commandLogging: true,
  commandEditing: true,
  providers: {
    default: 'Level' // FireStoreを使う時は FireStore に変更して環境変数にDATABASE_URL="データベースURL"を設定し resources/serviceAccount.jsonにダウンロードした秘密鍵を貼り付ける。
  },
  pieceDefaults: {
    commands: {
      autoAliases: false
    }
  },
  disabledEvents: ['TYPING_START', 'PRESENCE_UPDATE']
})

if ('DBL_TOKEN' in process.env) {
  const DBL = new DBLAPI(process.env.DBL_TOKEN, client)
  DBL.on('error', error => client.emit('DblError', error))
  DBL.on('posted', () => client.emit('DblPosted'))
}

client.login()

setInterval(() => {
  const heapUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
  const heapTotal = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
  const onlineUser = client.users.filter(user => user.presence.status === 'online').size
  const totalUser = client.users.size
  const guilds = client.guilds.size
  const ping = Math.round(client.ws.ping)
  process.title = `YuigahamaBot v${version} - Memory: ${heapUsed}/${heapTotal} MB | Heartbeat: ${ping}ms | Users: ${onlineUser}/${totalUser} | ${guilds} guilds`
}, 1000)

module.exports = {
  YuigahamaVersion: version,
  Utils: require('./lib/util/utils'),
  Nekoslife: require('./lib/util/Nekolife'),
  Game: {
    MojangAPI: require('./lib/game/Minecraft/MojangAPI'),
    FortniteAPI: require('./lib/game/Fortnite/FortniteAPI'),
    FortniteStoreAPI: require('./lib/game/Fortnite/FortniteStoreAPI'),
    FortniteUserAPI: require('./lib/game/Fortnite/FortniteUserAPI')
  }
}
