const { googleImage } = require('@bochilteam/scraper')
let handler  = async (m, { conn, args, text }) => {
if (!text) return m.reply('*[❗] INGRESE EL TEXTO QUE QUIERA BUSCAR*')
const res = await googleImage(text)
let image = res[Math.floor(Math.random() * res.length)]
let link = image
if (!link) return m.reply('*[❗] SERVIDOR CAIDO INTENTA MAS TALDE *')
conn.sendFile(m.chat, link, 'gimage', `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴:* ${text}\n🌎 *𝙱𝚄𝙲𝙰𝙳𝙾𝚁:* INTERNET EXPLORER`.trim(), m)}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['general']
handler.command = /^(gimage|image|imagen)$/i
module.exports = handler
