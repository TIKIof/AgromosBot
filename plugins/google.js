const { googleIt } = require('@bochilteam/scraper')
const fetch = require('node-fetch')
const axios = require('axios')
let handler = async (m, { conn, command, args }) => {
//const fetch = (await import('node-fetch')).default
let text = args.join` `
if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] INGRESE EL TEXTO O TEMA QUE QUIERAS BUSCAR *', m)
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({ title, url, description }) => { return `*${title}*\n_${url}_\n_${description}_` }).join('\n\n')
try {
//let ss = await (await fetch(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkeysapi}&url=${url}`)).arrayBuffer()
let ss = await (await fetch(`https://image.thum.io/get/fullpage/${url}`)).buffer()
//let ss3 = await ssweb(url, 'desktop')
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
module.exports = handler

/*async function ssweb(url, device = 'desktop'){
return new Promise((resolve, reject) => {
const base = 'https://www.screenshotmachine.com'
const param = { url: url, device: device, cacheLimit: 0 }
axios({url: base + '/capture.php', method: 'POST', data: new URLSearchParams(Object.entries(param)), headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' }}).then((data) => {
const cookies = data.headers['set-cookie']
if (data.data.status == 'success') {
axios.get(base + '/' + data.data.link, { headers: { 'cookie': cookies.join('') }, responseType: 'arraybuffer' }).then(({ data }) => {
let result = { status: 200, author: '@BrunoSobrino', result: data } 
resolve(result)})
} else {
reject({ status: 404, author: 'Ryzn', message: data.data })}}).catch(reject)})}*/
