const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,
} = require('@adiwajshing/baileys')

//
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const FileType = require('file-type')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const emojiUnicode = require('emoji-unicode')
const cheerio = require('cheerio')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const vapor = require('vapor-text')
const fs = require("fs")
const ralgo = require('./iqbal/ralgo')
const { fetchiqbal, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exif } = require('./lib/exif')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, banner, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const axios = require('axios')
const util = require('util')
const toMs = require('ms')
const ms = require('parse-ms')
const path = require('path')
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
const cd = 4.32e+7
ban = []

//Json 1
const setiker = JSON.parse(fs.readFileSync('./add/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./add/video.json'))
const audionye = JSON.parse(fs.readFileSync('./add/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./add/image.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const bacotrandom = JSON.parse(fs.readFileSync('./database/json/bacot.json'))
const samih = JSON.parse(fs.readFileSync('./database/user/simi.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const publik = JSON.parse(fs.readFileSync('./database/group/public.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))

//Json 2
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/json/antivirtex.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))

//Vcard   
const ncard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Iqbal\n' 
            + 'ORG: Self Bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6281315995628:+62 813-1599-5628\n' 
            + 'END:VCARD' 
   
prefix = botPrefix
blocked = []
limitawal = userDefaultLimit
memberlimit = memberLimitss
cr = '*Account Iqbal V.2*'

//Setiings Bot
const ownerNumber = ["6281315995628@s.whatsapp.net","6281316438103@s.whatsapp.net"]

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}

function addMetadata(packname, author) {
				if (!packname) packname = 'termux-bot-wa'; if (!author) author = ' Fxc7';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) {
					return `./src/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {
					return `./src/stickers/${name}.exif`
				}
			)
		}
		
		//Function 2
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
       const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
//Frem
        const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/user/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

//Register
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

const createSerial = (size) => {
		return crypto.randomBytes(size).toString('hex').slice(0, size)
		}
		
		async function starts() {
	const IqbalRizkiMaulana = new WAConnection()
	IqbalRizkiMaulana.logger.level = 'warn'
	console.log(banner.string)
	IqbalRizkiMaulana.on('qr', () => {
		lolcatjs.fromString('[SYSTEM] SCAN THIS QR CODE...')
	})

	fs.existsSync('./IqbalRizkiMaulana.json') && IqbalRizkiMaulana.loadAuthInfo('./IqbalRizkiMaulana.json')
	IqbalRizkiMaulana.on('connecting', () => {
		start('2', 'Connecting...')
	})
	IqbalRizkiMaulana.on('open', () => {
		success('2', 'Connected:)')
	})
	await IqbalRizkiMaulana.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./IqbalRizkiMaulana.json', JSON.stringify(IqbalRizkiMaulana.base64EncodedAuthInfo(), null, '\t'))

	IqbalRizkiMaulana.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await IqbalRizkiMaulana.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await IqbalRizkiMaulana.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* 
❍╭━━━━━━━━━━━━━
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAME:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *GENDER:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *ASKOT:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAMA IG:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *NAMA DOI:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *FAVORIT:*
❍│【♡ۣۜۜ፝͜͜͡͡✿➣ *HOBBY:*
❍╰━━━━━━━━━━━━━`
				let buff = await getBuffer(ppimg)
				IqbalRizkiMaulana.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await IqbalRizkiMaulana.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `kenapa keluar kamu @${num.split('@')[0]} kalo masuk lagi jangan lupa desah`
				let buff = await getBuffer(ppimg)
				IqbalRizkiMaulana.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		IqbalRizkiMaulana.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	}
)

IqbalRizkiMaulana.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (!mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = IqbalRizkiMaulana.contacts[nameReq] != undefined ? IqbalRizkiMaulana.contacts[nameReq].vname || IqbalRizkiMaulana.contacts[nameReq].notify : undefined
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
			
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			const Iqbal = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Riz = args.join(' ')
			const txt = mek.message.conversation
			const isCmd = body.startsWith(prefix)
			IqbalRizkiMaulana.chatRead(from)
			
			mess = {
				wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu ± 1 min!',
				success: 'Berhasil! ',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					only: {
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					premium: 'Maaf kak perintah ini hanya untuk user premium! ❌',
					benned: 'Anda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda',
					ownerG: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					ownerB: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					daftarB: `──「 BELUM VERIVIKASI 」──\nHalo kak kamu belum verify!\nverify dulu kak di bot iqbal... \n\nCommand : ${prefix}verify`,
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: ' [❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
					publikG: '*Fitur Dalam Private Harap Menunggu Owner Mempublikasikannya!*',
				}
			}
			const botNumber = IqbalRizkiMaulana.user.jid
			const crypto = require('crypto')
			const isGroup = from.endsWith('@g.us')
			const totalchat = await IqbalRizkiMaulana.chats.all()
		    const tescuk = ["0@s.whatsapp.net"]
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await IqbalRizkiMaulana.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const q = args.join(' ')
			const botLangs = languages
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			pushname = IqbalRizkiMaulana.contacts[sender] != undefined ? IqbalRizkiMaulana.contacts[sender].vname || IqbalRizkiMaulana.contacts[sender].notify : undefined
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isPublic = isGroup ? publik.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isPrem = prem.includes(sender)
			const isRegister = checkRegisteredUser(sender)
			const isOwner = ownerNumber.includes(sender)
			const isDonatur = donaturNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				IqbalRizkiMaulana.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				IqbalRizkiMaulana.sendMessage(hehe, teks, text)
			}
	        const costum = (pesan, tipe, target, target2) => {
			IqbalRizkiMaulana.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? IqbalRizkiMaulana.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : IqbalRizkiMaulana.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			
			//Leveling
if (isGroup && isRegister && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
        
//Limit 1
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return IqbalRizkiMaulana.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            IqbalRizkiMaulana.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        IqbalRizkiMaulana.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
	
//Limit 2
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    IqbalRizkiMaulana.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            IqbalRizkiMaulana.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
//Atm
           if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 100) + 9000
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
//Badword
        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    try { 
                        reply("JAGA UCAPAN DONG!! 😠")
                        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Toxic Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
                        	setTimeout( () => {
			IqbalRizkiMaulana.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
 					   	}, 5000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("1detik")
							}, 4000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("2detik")
							}, 3000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("3detik")
							}, 2000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("4detik")
							}, 1000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!")
							}, 0)
                        } catch { IqbalRizkiMaulana.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}) }
                } else {
                    return reply( "Tolong Jaga Ucapan Min 😇")
                }
            }
        }
        
//Getmemex
        if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`maaf member group belum memenuhi syarat. minimal member group adalah ${memberlimit}`)
						setTimeout( () => {
 	                           IqbalRizkiMaulana.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("1detik")
							}, 4000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("2detik")
							}, 3000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("3detik")
							}, 2000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("4detik")
							}, 1000)
								setTimeout( () => {
								IqbalRizkiMaulana.updatePresence(from, Presence.composing)
								reply("5detik")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
//Scurity
 var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
			
//Rank
			const levelRole = getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole <= 3) {
            role = 'Copper IV'
        } else if (levelRole <= 5) {
            role = 'Copper III'
        } else if (levelRole <= 7) {
            role = 'Copper II'
        } else if (levelRole <= 9) {
            role = 'Copper I'
        } else if (levelRole <= 10) {
            role = 'Silver V'
        } else if (levelRole <= 11) {
            role = 'Silver IV'
        } else if (levelRole <= 12) {
            role = 'Silver III'
        } else if (levelRole <= 13) {
            role = 'Silver II'
        } else if (levelRole <= 13) {
            role = 'Silver I'
        } else if (levelRole <= 16) {
            role = 'Gold V'
        } else if (levelRole <= 17) {
            role = 'Gold IV'
        } else if (levelRole <= 19) {
            role = 'Gold III'
        } else if (levelRole <= 20) {
            role = 'Gold II'
        } else if (levelRole <= 21) {
            role = 'Gold I'
        } else if (levelRole <= 22) {
            role = 'Platinum V'
        } else if (levelRole <= 24) {
            role = 'Platinum IV'
        } else if (levelRole <= 25) {
            role = 'Platinum III'
        } else if (levelRole <= 26) {
            role = 'Platinum II'
        } else if (levelRole <= 27) {
            role = 'Platinum I'
        } else if (levelRole <= 30) {
            role = 'Exterminator'
        }
        
//Antilink
        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		IqbalRizkiMaulana.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi`)
		setTimeout( () => {
			IqbalRizkiMaulana.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 9000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 8000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 7000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 6000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 5000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
			reply("6detik")
		}, 4000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
		reply("7detik")
		}, 3000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
		reply("8detik")
		}, 2000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
reply("9detik")
		}, 1000)
		setTimeout( () => {
			IqbalRizkiMaulana.updatePresence(from, Presence.composing)
reply("10detik")
		}, 0)
	}
	
//Antivirtex
	if (txt.length > 500){
        if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply(`${pushname2} Adalah Admin Group Kamu Tidak Akan Di kick`)
		IqbalRizkiMaulana.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		costum(monospace(`Virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`))
		setTimeout( () => {
			IqbalRizkiMaulana.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			IqbalRizkiMaulana.blockUser(sender, "add")
		}, 0)
	}
	
//Check
	expiredCheck()
			var premi = '*NOT PREMIUM*'
			if (isPrem) {
			premi = '*YES PREMIUM*'
			} 
			if (isOwner) {
			premi = '*UNLIMITED PREMIUM*'
			}
			var Simihh = 'OFF'
			if(isSimi) {
			Simihh = 'ON'
			}
			var Welcomee = 'OFF'
			if (isWelkom) {
			Welcomee = 'ON'
			}
			var ModeAnime = 'OFF'
			if (isAnime) {
			ModeAnime = 'ON'
			}
			var Nsfww = 'OFF'
			if (isNsfw) {
			Nsfww = 'ON'
			}
			var BadWordd = 'OFF'
			if (isBadWord) {
			BadWordd = 'ON'
			}
			var AntiLinkk = 'OFF'
			if (isAntiLink) {
			AntiLinkk = 'ON'
			}
			var AntiVirtexx = 'OFF'
			if (isAntiVirtex) {
			AntiVirtexx = 'ON'
			}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
			
			//Colors
	colors = ['red','white','black','blue','yellow','green']
	
//Quoted
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			//Cmd && Group
            if (!isGroup && isCmd) console.log('\x1b[1;37m>', time, color(command), 'from', color(pushname), 'args :', (args.length))
			if (isCmd && isGroup) console.log('\x1b[1;37m>', time, color(command), 'from', (groupName), 'args :', color(args.length))
			
			switch(command) {
				
				   case 'help': 
				case 'menu':
				  if (!isRegister) return reply(mess.only.daftarB)
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
				runtime = process.uptime()
				const Menu = {
				text: ` 
◪USER
  ❏Hallo :${pushname}
  ❏Nomer : wa.me/${sender.split("@")[0]}
  ❏Xp mu: ${getLevelingXp(sender)}
  ❏Lvl mu: ${getLevelingLevel(sender)}
  ❏Uangmu :Rp${uangku}
  ❏Role : ${role}
  ❏User register : ${_registered.length}
 ───────────────────────
            IQBAL RIZKI MAULANA
 ───────────────────────
◪ABOUT
  ❏Owner : ${ownerName}
  ❏Bot : ${botName}
  ❏Waktu : ${time}
  ❏Runtime: ${kyun(runtime)}
  ❏Group : ${groupName}
  ❏Prefix: 「  ${prefix}  」
  
◪LISTMENU
│❏${prefix}linkgroup
│❏${prefix}ban
│❏${prefix}unban
│❏${prefix}banlist
│❏${prefix}notif
│❏${prefix}afk
│❏${prefix}public [aktif/nonaktif]
│❏${prefix}welcome [1/0]
│❏${prefix}antilinkgroup [1/0]
│❏${prefix}antivirtex [on/off]
│❏${prefix}nsfw [1/0]
│❏${prefix}antidelete [aktif]
│❏${prefix}anime [1/0]
│❏${prefix}speed
│❏${prefix}owner
│❏${prefix}info`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  IqbalRizkiMaulana.sendMessage(from, Menu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					
					//Aktif
					case 'public':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Pilih enable atau disable!')
					if (args[0] === 'aktif') {
						if (isPublic) return reply('Sudah Aktif')
						publik.push(from)
						fs.writeFileSync('./database/json/public.json', JSON.stringify(publik))
						reply(`Sukses Silahkan Ketik ${prefix}menu Untuk Fitur Bot`)
					} else if (args[0] === 'nonaktif') {
						publik.splice(from, 1)
						fs.writeFileSync('./database/json/public.json', JSON.stringify(publik))
						reply(`Sukses Sekarang Member Tidak Bisa Menggunakan Bot`)
					} else {
						reply('Pilih aktif / nonaktif')
					}
					break
					case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antilinkgroup':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						IqbalRizkiMaulana.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('Mode anti link group sudah disable')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antivirtex':
                    if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiVirtex) return reply('anti virtex group sudah aktif')
						_antivirtex.push(from)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif')
						_antivirtex.splice(from, 1)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
					case 'nsfw':
			if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
			if (!isOwner) return reply('Kamu siapa?')
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses mengaktifkan mode nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return IqbalRizkiMaulana.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return IqbalRizkiMaulana.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						IqbalRizkiMaulana.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						IqbalRizkiMaulana.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return IqbalRizkiMaulana.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						IqbalRizkiMaulana.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						IqbalRizkiMaulana.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return IqbalRizkiMaulana.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return IqbalRizkiMaulana.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 628xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					IqbalRizkiMaulana.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						IqbalRizkiMaulana.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						IqbalRizkiMaulana.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						IqbalRizkiMaulana.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						IqbalRizkiMaulana.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'anime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAnime) return reply('Mode anime sudah aktif')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply('Sukses mengaktifkan mode anime di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply('Sukes menonaktifkan mode anime di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					
					//Group
					case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await IqbalRizkiMaulana.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    IqbalRizkiMaulana.sendMessage(from, yeh, text, {quoted: mek})
			        break
			case 'ban':
					IqbalRizkiMaulana.updatePresence(from, Presence.composing) 
					if (!isRegister) return reply(mess.only.daftarB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'banlist':
					IqbalRizkiMaulana.updatePresence(from, Presence.composing) 
					if (!isRegister) return reply(mess.only.daftarB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of ban number :\n'
					for (let benn of ban) {
						teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
					IqbalRizkiMaulana.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
					case 'notif':
if (!isGroupAdmins) return reply(mess.only.admin)
IqbalRizkiMaulana.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await IqbalRizkiMaulana.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await IqbalRizkiMaulana.sendMessage(from, options, text)
break
case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (isBanned) return reply(mess.only.benned)
                                        var nom = mek.participant
                                        const fku = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        IqbalRizkiMaulana.sendMessage(from, fku, text, {quoted: mek})
                                        break
                                        
                                        //info
                                        case 'speed':
                case 'ping':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    IqbalRizkiMaulana.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				const Ping = {
				text: ` 
◪PING
  ❏Device: *Black Shark 3*
  ❏Ram: *8/128*
  ❏Data:  *Telkomsel*
  ❏Jaringan: *4G*
  ❏Status: *Belum Di Charger*
  ❏Bot Type: *Termux Only*
  ❏Speed: *${latensi.toFixed(4)} _Second_*
  ❏Aktif: *${kyun(uptime)}*
                   `,
contextInfo: {
  mentionedJid: [sender]
}
  }
  IqbalRizkiMaulana.sendMessage(from, Ping, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
 
                    break
					case 'info':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					me = IqbalRizkiMaulana.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Author* : *𝙸𝚀𝙱𝙰𝙻*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Public:* ON\n*Total User Premium*: ${premium.length}\n*Total Chat* : ${totalchat.length}\n*Instagram* : *gwlo46*\n*Github* : *github.com/IqballRizkiMaulana*\n*Youtube* : *To Gaming*`
					buffer = await getBuffer(me.imgUrl)
					IqbalRizkiMaulana.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'creator':
			case 'owner':
			if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
                 IqbalRizkiMaulana.sendMessage(from, {displayname: "Jeff", vcard: ccard}, MessageType.contact, { quoted: mek})
                 IqbalRizkiMaulana.sendMessage(from, 'kenalin ya itu pacar ku >_-',MessageType.text, { quoted: mek} )
                 break
default:
    if (budy.includes(`Sayang`)) {
                  reply(`Apa sayangku *${pushname2}*? 🥰`)
                  }
                  if (budy == 'Cekprefix') {
                  costum(`*R BOT MENGGUNAKAN PREFIX [ ${prefix} ]*`, text, tescuk, cr)
                  }
                  if (budy == 'Totalchat') {
                  costum(`*${totalchat.length}*`, text, tescuk, cr)
                  }
					if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname2}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`)
                  }
   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix}`)) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[SELFBOT]','aqua'), 'Pengirim', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
