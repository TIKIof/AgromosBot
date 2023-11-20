let hispamemes = require("hispamemes")
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme() 
conn.sendButtonImg(m.chat, url, `_${command}_`.trim(), author, '🔄 OTRO MEME 🔄', `/${command}`, m)}
handler.command = /^(meme)$/i
module.exports = handler
