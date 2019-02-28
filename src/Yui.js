const {Client} = require('klasa')
const {token} = require('../config')

new Client({
  prefix: 'yui!',
  regexPrefix: /^yuigahama(@|!)/i,
  presence: { activity: { name: 'Yuigahama!help', type: 'PLAYING' } },
  language: 'ja-JP'
}).login(token)