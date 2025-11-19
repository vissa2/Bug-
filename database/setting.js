// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['6285141324992'] //Own Number
global.developer = "ArgaOffc" //Dev Name
global.botname = "🎭⃟༑⌁⭚𝗛͍𝗮𝗱𝗲͢𝐬-𝙓𝙫͋𝙡𝙤𝙞𝙙ཀ͜͡🌹" //Bot Name
global.version = "1.5" //Version Bot

//Sticker Setiings
global.packname = "Sticker By ArgaOffc" //Pack Name 
global.author = "🎭⃟༑⌁⭚𝗛͍𝗮𝗱𝗲͢𝐬-𝙓𝙫͋𝙡𝙤𝙞𝙙ཀ͜͡🌹" // Author

//Social Media Settings
global.ytube = "-/"
global.ttok = ""
global.igram = "-/"
global.chtele = ""
global.tgram = "https://t.me/ArgaOffc"
global.limitCount = 1,

global.mess = {
 owner: '*lu bukan owner lek!!*',
 premium: '*lu Siapa Goblok🤣*'
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
