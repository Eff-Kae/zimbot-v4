// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZIM BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮reinhardtuna@mail.uk
//▮WHATSAPP US : +44 7441 437150
//▮YOUTUBE CHANNELL: https://youtube.com/c/DRIPSOFC
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZIMBOT
//┃I WROTE THIS SCRIPT BY MYSELF THIS SCRIPT IS FOR EVERYONE DONT SELL IT
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//
const fs = require('fs')
const chalk = require('chalk')


//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}


global.Api = new (require('./plugins/neoxrApi.js'))(process.env.API_KEY)

//settings
global.owner = ['2347085169941',''] //owner number ++447441437150
global.wame = ['2347085169941'] 
global.pemilik = ['2347085169941'] //owner number ++447441437150
global.premium = ['2347085169941'] //premium number ++447441437150
global.pengguna = 'ᴋᴀᴇ ༒' //username
global.footer = 'ᴋᴀᴇ ༒'
global.botnma = '𝓚𝓐𝓔 𝓣𝓔𝓒𝓗 𝓑𝓞𝓣' //bot name
global.botname = '𝓚𝓐𝓔 𝓣𝓔𝓒𝓗 𝓑𝓞𝓣'
global.ownernma = 'ᴋᴀᴇ ༒' //owner name
global.packname = 'DONT STEAL THIS 😑😒' //sticker package name
global.author = 'ᴋᴀᴇ ༒' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '🔵' //sp
global.max_upload = 100
global.dripstyping = true
global.dripsreadgroup = false
global.dripsreadall = true
global.dripsrecord = true
global.available = true
global.unavailable = false
global.limittot = 100,
global.thumb = fs.readFileSync('https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg')
global.reactmoji = '🇿🇼'
global.imgjoinrpg = fs.readFileSync('https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg')
global.imgmining = fs.readFileSync('https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg')
global.imgdevil = fs.readFileSync('https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg')
global.imgslime = fs.readFileSync('https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg')
global.imgdemon = fs.readFileSync('https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg')
global.imggoblin = fs.readFileSync('https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg')
global.imgdemonking = fs.readFileSync('https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg')
global.imgbehemoth = fs.readFileSync('https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg')
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mess = {
    success: 'Takaenda Done!',
    admin: '*This feature is only for admin!*',
    botAdmin: '*𝓚𝓐𝓔 𝓣𝓔𝓒𝓗 𝓑𝓞𝓣 bot  must be admin first!*',
    owner: '*this feature is only for 𝓚𝓐𝓔 𝓣𝓔𝓒𝓗 𝓑𝓞𝓣 owner*',
    group: '*Feature is only for groups!*',
    grouponly: '*Group Mode Only*',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: '*whoa wait a moment 𝓚𝓐𝓔 𝓣𝓔𝓒𝓗 𝓑𝓞𝓣 proccessing*',
    endLimit: '*Your daily limit has expired the limit will be reseted every 12 hours*',
    noPetualang: '*you are not in rpg database type #joinrpg* _ur name_'
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('./Zimbot/drips.jpg')
global.visoka = { url: 'https://i.imgur.com/LbmTdhf.mp4' }
global.vid = { url: 'https://i.imgur.com/LbmTdhf.mp4' }

//—————「 Set Random Image Menu 」—————//

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
