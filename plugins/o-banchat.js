let handler = async (m, { conn, isOwner, text, isAdmin }) => {
let who
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
else who = m.chat
} else {
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
}
try {
if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = true
else global.db.data.users[who].banned = true
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ESTE CHAT FUE BANEADO CON EXITO*\n\n*—◉ AGROMOS NO REACCIONA A NINGUN MENSAJE HATA QUE SE DESBANEE EL SHAT*`)
} catch (e) {
throw `*[❗𝐈𝐍𝐅𝐎❗] ESTE CHAT NO ESTA REGISTRADO EN MI BASE DE DATOS*`
}}
handler.help = ['ban']
handler.tags = ['owner', 'group']
handler.command = /^ban(chat)?$/i
module.exports = handler
