process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
let fetch = require('node-fetch')
let { ytmp4, ytmp3, ytplay, ytplayvid } = require('../lib/youtube')
let { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, args }) => {
if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] INSERTAR EL COMANDO MAS EL ENLACE / LINK DE VIDEO DE YOUTUBE*`)
/*try {
let AAaaAA = await ytmp3(args[0])  
conn.sendMessage(m.chat, { audio: { url: AAaaAA.result }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch {*/
try {
let q = '128kbps'
let v = args[0]
await m.reply(global.wait)  
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3` }, { quoted: m })   
} catch {
try {   
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch {
m.reply(`*[❗] NO PUEDE SER OTRO ERROR, ESTE BOT ESTA LLENO DE FALLAS PERO BUENO INTENTE DE NUEVO*`)
}}} //}
handler.command = /^(getaud|ytmp3.2|yta.2|ytmp3|yta)$/i
module.exports = handler
