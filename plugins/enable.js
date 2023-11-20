let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let setting = global.db.data.settings
let type = (args[0] || '').toLowerCase()
let isAll = false
let isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
default:
if (!/[01]/.test(command)) throw `
┌〔 OPCIONEZ 〕
├ welcome 
└────
Ejemplo:
${usedPrefix}on welcome
${usedPrefix}off welcome
`.trim()
throw false
}
m.reply(`🗂️ OPCION: ${type} 
🎚️ ESTADO: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
📣 PARA: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`)
}
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
module.exports = handler
