const fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗]  INGRESE UNA PETICION O UNA ORDEN PARA USAR LA FUNCION DE CHAT GPT*\n\n*—◉ 𝙴JEMPLO PETICIONES Y ORDENES*\n*◉ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*◉ ${usedPrefix + command} Codigo en JS para un juego de cartas*`
try {
//m.reply('*[❗] 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙼𝙰𝙽𝙳𝙾 𝙻𝙾 𝚀𝚄𝙴 𝙼𝙴 𝙿𝙸𝙳𝙸𝙾*')
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] OPA UN ERROR CRITICO QUE PUEDE ACABAR CON LA EXISTENCIA DEL MUNDO, INTENTE DE NUEVO*`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
module.exports = handler
