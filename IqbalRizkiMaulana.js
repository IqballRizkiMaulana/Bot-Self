//mau apa
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

//Menu All
const { virtex } = require('./src/virtex')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { murothal } = require('./src/murothal')
const { listsurah } = require('./src/listsurah')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { cekvip } = require('./src/cekvip')
const { daftarvip } = require('./src/daftarvip')
const { iklan } = require('./src/iklan')
const { daftarmemberselebgram } = require('./src/daftarmemberselebgram')
const { bfix } = require('./src/bfix')
const { afix } = require('./src/afix')
const { checaktif } = require('./src/checkaktif')
const { install } = require('./src/install')
const { intro } = require('./src/intro')
const { kontakdeveloper } = require('./src/kontakdeveloper')
const { addfoto } = require('./src/addfoto')
const { toxic } = require('./src/toxic')
const { animesaran } = require('./src/animesaran')
const { tnc } = require('./src/tnc')
const { kodenuklir2 } = require('./src/kodenuklir2')
const { rules } = require('./src/rules')
const { nekopoi } = require('./src/nekopoi')
const { wibu } = require('./src/wibu')
const { snk } = require('./src/snk')
const { modapk } = require('./src/modapk')

//Options
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const imageToBase64 = require('image-to-base64')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const toMs = require('ms')
const ms = require('parse-ms')
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
const path = require('path')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
ban = []

//Settings
const settings = JSON.parse(fs.readFileSync('./settings/settings.json'))
const { ind } = require('./settings/language')
const { eng } = require('./settings/language')
const {
	botName,
    ownerName,
    VhtearKey,
    ownerNumbers,
    languages,
    botPrefix,
    memberLimitss,
    userDefaultLimit
} = settings

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
const ccard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Rizki\n' 
            + 'ORG: Self Bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=6281316438103:+62 813-1643-8103\n' 
            + 'END:VCARD' 
 
prefix = botPrefix
blocked = []
limitawal = userDefaultLimit
memberlimit = memberLimitss
ator = 'Iqbal gans'
namo = 'jangan colong'
cr = '*Account Iqbal V.2*'

//Setiings Bot
const ownerNumber = ["6281315995628@s.whatsapp.net","6281316438103@s.whatsapp.net"]
const donaturNumber = ["6281315995628@s.whatsapp.net"]

//Function 1
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
        
//Scan Qr
async function starts() {
	const iqbl = new WAConnection()
	iqbl.logger.level = 'warn'
	console.log(banner.string)
	iqbl.on('qr', () => {
		lolcatjs.fromString('[SYSTEM] SCAN THIS QR CODE...')
	})

	fs.existsSync('./IqbalRizkiMaulana.json') && iqbl.loadAuthInfo('./IqbalRizkiMaulana.json')
	iqbl.on('connecting', () => {
		start('2', 'Connecting...')
	})
	iqbl.on('open', () => {
		success('2', 'Connected:)')
	})
	await iqbl.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./IqbalRizkiMaulana.json', JSON.stringify(iqbl.base64EncodedAuthInfo(), null, '\t'))

	iqbl.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await iqbl.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await iqbl.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
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
				iqbl.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await iqbl.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `kenapa keluar kamu @${num.split('@')[0]} kalo masuk lagi jangan lupa desah`
				let buff = await getBuffer(ppimg)
				iqbl.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	iqbl.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	iqbl.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'APIKEY'
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			pushname2 = iqbl.contacts[botFebb] != undefined ? iqbl.contacts[botFebb].vname || iqbl.contacts[botFebb].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const is = budy.trim().split(/ +/).shift().toLowerCase()
			const isCmd = body.startsWith(prefix)
			const txt = mek.message.conversation
			iqbl.chatRead (from)

			mess = {
				wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu ± 1 min!',
				success: 'Berhasil! ',
				levelon: 'leveling udah on nih ayo tingkatkan level dengan cara aktif di group',
				leveloff: 'sayang sekali leveling off gak seru ahk',
				levelnoton: 'Yah sayang sekali leveling belum di aktifkan ayo kak! lapor ke owner untuk mengaktifkannya dengan cara !lapor bug',
				levelnol: '*LEVEL KAKAK KOK MASIH * 0 >_<',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: ' [❗] Link yang anda kirim tidak valid!'
				},
				only: {
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					premium: 'Maaf kak perintah ini hanya untuk user premium! ❌',
					mod: 'Maaf kak fitur ini untuk user mods iqbal',
					benned: 'Anda Ke Band Silahkan Hubungi Owner Agar Membuka Band Anda',
					ownerG: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					ownerB: '[❗] Lu siapa owner? ini fitur khusus owner! ❌',
					daftarB: `──「 BELUM VERIVIKASI 」──\nHalo kak kamu belum verify!\nverify dulu kak di bot iqbal... \n\nCommand : ${prefix}verify`,
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: ' [❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
					publikG: '*Fitur Dalam Private Harap Menunggu Owner Mempublikasikannya!*',
				}
			}
			
//Iqbal Id
            const botNumber = iqbl.user.jid
			const crypto = require('crypto')
			const isGroup = from.endsWith('@g.us')
			const totalchat = await iqbl.chats.all()
		    const tescuk = ["0@s.whatsapp.net"]
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await iqbl.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const q = args.join(' ')
			const botLangs = languages
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			pushname = iqbl.contacts[sender] != undefined ? iqbl.contacts[sender].vname || iqbl.contacts[sender].notify : undefined
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
				iqbl.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				iqbl.sendMessage(hehe, teks, text)
			}
	        const costum = (pesan, tipe, target, target2) => {
			iqbl.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? iqbl.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : iqbl.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
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
                            if (limitCounts <= 0) return iqbl.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            iqbl.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        iqbl.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
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
                    iqbl.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
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
                            iqbl.groupLeave(from)
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
			iqbl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
 					   	}, 5000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
								reply("1detik")
							}, 4000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
								reply("2detik")
							}, 3000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
								reply("3detik")
							}, 2000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
								reply("4detik")
							}, 1000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
								reply("*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!")
							}, 0)
                        } catch { iqbl.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}) }
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
 	                           iqbl.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
								reply("1detik")
							}, 4000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
								reply("2detik")
							}, 3000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
								reply("3detik")
							}, 2000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
								reply("4detik")
							}, 1000)
								setTimeout( () => {
								iqbl.updatePresence(from, Presence.composing)
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
		iqbl.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi`)
		setTimeout( () => {
			iqbl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 9000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 8000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 7000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 6000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 5000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
			reply("6detik")
		}, 4000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
		reply("7detik")
		}, 3000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
		reply("8detik")
		}, 2000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
reply("9detik")
		}, 1000)
		setTimeout( () => {
			iqbl.updatePresence(from, Presence.composing)
reply("10detik")
		}, 0)
	}
	
//Antivirtex
	if (txt.length > 500){
        if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply(`${pushname2} Adalah Admin Group Kamu Tidak Akan Di kick`)
		iqbl.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		costum(monospace(`Virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`))
		setTimeout( () => {
			iqbl.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			iqbl.blockUser(sender, "add")
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
			
//sound
if (budy.includes(`Iri`)) {
const irimp3 = fs.readFileSync('./Iqbal/iri.mp3');
iqbl.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

}

if (budy.includes(`Pale`)) {
const pa = fs.readFileSync('Iqbal/pale.mp3')
iqbl.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

}

if (budy.includes(`Bot`)) {
reply(`iya ada apa? bisa saya bantu, ketik !help/menu untuk mengetahui fitur bot iqbal`)
tujuh = fs.readFileSync('./Iqbal/ara.mp3');
iqbl.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

}

if (budy.includes(`Assalamualaikum`)) {
tujuh = fs.readFileSync('./Iqbal/waalaikumsalam.mp3');
iqbl.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

}

if (budy.includes(`Tapi`)) {
tujuh = fs.readFileSync('./Iqbal/tapi.mp3');
iqbl.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

}


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
 ───────────────────────
◪ABOUT
  ❏Owner : ${ownerName}
  ❏Bot : ${botName}
  ❏Waktu : ${time}
  ❏Runtime: ${kyun(runtime)}
  ❏Group : ${groupName}
  ❏Prefix: 「  ${prefix}  」
  
◪MENU
│❏${prefix}ownermenu
│❏${prefix}adminmenu
│❏${prefix}funmenu
│❏${prefix}mediamenu
│❏${prefix}kerangmenu
│❏${prefix}makermenu
│❏${prefix}othermenu
│❏${prefix}animemenu
│❏${prefix}nsfwmenu
│❏${prefix}vipmenu
│❏${prefix}soundmenu`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Menu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'listmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					runtime = process.uptime()
					const Listmenu = {
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
◪ABOUT
  ❏Owner : ${ownerName}
  ❏Bot : ${botName}
  ❏Waktu : ${time}
  ❏Runtime: ${kyun(runtime)}
  ❏Group : ${groupName}
  ❏Prefix: 「  ${prefix}  」
  
╭──────「 GROUP 」
┴
│➻ *${prefix}ban @tagmember*
│➻ *${prefix}unban @tagmember*
│➻ *${prefix}spamcall [81315xxxx]*
│➻ *${prefix}kickall*
│➻ *${prefix}leave*
│➻ *${prefix}promote*
│➻ *${prefix}demote*
│➻ *${prefix}delete*
│➻ *${prefix}add [62813xxxx]*
│➻ *${prefix}tagall*
│➻ *${prefix}otagall*
│➻ *${prefix}otagall2*
│➻ *${prefix}setdesc*
│➻ *${prefix}setname*
│➻ *${prefix}kick @tagmember*
│➻ *${prefix}add [62813xxxx]*
│➻ *${prefix}linkgc*
│➻ *${prefix}group [buka]*
│➻ *${prefix}group [tutup]*
│➻ *${prefix}setpp*
│➻ *${prefix}setppbot*
│➻ *${prefix}groupinfo*
│➻ *${prefix}tagme*
│➻ *${prefix}listadmin*
│➻ *${prefix}nsfw [1/0]*
│➻ *${prefix}anime [1/0]*
│➻ *${prefix}welcome [1/0]*
│➻ *${prefix}antilink [1/0]*
│➻ *${prefix}public [1/0]*
┬
╰──────────────────────

╭──────「 ANIME 」
┴
│➻ *${prefix}randomanime*
│➻ *${prefix}waifu*
│➻ *${prefix}waifu2*
│➻ *${prefix}nekonime*
│➻ *${prefix}wibu*
│➻ *${prefix}wait*
│➻ *${prefix}inu*
│➻ *${prefix}pokemon*
│➻ *${prefix}naruto*
│➻ *${prefix}hinata*
│➻ *${prefix}sasuke*
│➻ *${prefix}boruto*
│➻ *${prefix}minato*
│➻ *${prefix}loli*
│➻ *${prefix}loli2*
│➻ *${prefix}rize*
│➻ *${prefix}akira*
│➻ *${prefix}itori*
│➻ *${prefix}kurumi*
│➻ *${prefix}miku*
┬
╰──────────────────────

╭──────「 FUN 」
┴
│➻ *${prefix}truth*
│➻ *${prefix}dare*
│➻ *${prefix}hilih*
│➻ *${prefix}alay [text]*
│➻ *${prefix}simi [text]*
│➻ *${prefix}bucin*
│➻ *${prefix}tts [bahasa] + [text]*
│➻ *${prefix}quotes*
┬
╰──────────────────────

╭──────「 GAME 」
┴
│➻ *${prefix}tebakgambar*
│➻ *${prefix}caklontong*
│➻ *${prefix}family100*
│➻ *${prefix}game*
┬
╰──────────────────────

╭──────「 KERANG 」
┴
│➻ *${prefix}apakah [text]*
│➻ *${prefix}kapankah [text]*
│➻ *${prefix}bisakah [text]*
│➻ *${prefix}rate*
│➻ *${prefix}toxic*
│➻ *${prefix}gantengcek*
│➻ *${prefix}cantikcek*
│➻ *${prefix}persengay*
┬
╰──────────────────────

╭──────「 MAKER 」
┴
│➻ *${prefix}tahta* [𝙸𝚀𝙱𝙰𝙻]
│➻ *${prefix}logo* [𝙸𝚀𝙱𝙰𝙻]
│➻ *${prefix}goldbutton* [𝙸𝚀𝙱𝙰𝙻]
│➻ *${prefix}silverbutton* [𝙸𝚀𝙱??𝙻]
│➻ *${prefix}pronlogo* [text|text]
│➻ *${prefix}snow* [text|text]
│➻ *${prefix}marvelogo* [text|text]
│➻ *${prefix}text3d* [text]
│➻ *${prefix}ninjalogo* [text|text]
│➻ *${prefix}wolflogo* [text|text]
│➻ *${prefix}lionlogo* [text|text]
│➻ *${prefix}textscreen* [text
│➻ *${prefix}rtext* [text]
│➻ *${prefix}party* [text]
│➻ *${prefix}light* [text]
│➻ *${prefix}shadow* [text]
│➻ *${prefix}minion* [text]
│➻ *${prefix}neon* [text]
│➻ *${prefix}neongreen* [text]
│➻ *${prefix}neon2* [text]
│➻ *${prefix}3d* [text]
│➻ *${prefix}blackpink* [text]
│➻ *${prefix}sandwriting* [text]
│➻ *${prefix}water* [text|text]
│➻ *${prefix}thunder* [text]
│➻ *${prefix}stiltext* [text|text]
│➻ *${prefix}party* [text]
│➻ *${prefix}galaxtext* [text]
│➻ *${prefix}lovemake* [text]
│➻ *${prefix}walpaperhd* [text]
│➻ *${prefix}fire* [text]
│➻ *${prefix}quotemaker* [tx|tx|random]
│➻ *${prefix}water* [text]
│➻ *${prefix}epep* [text]
│➻ *${prefix}glitch* [text]
│➻ *${prefix}jokerlogo [teks]*
│➻ *${prefix}summer [text]*
│➻ *${prefix}logo*
│➻ *{prefix}galaxtext* [text]
│➻ *${prefix}cslogo* [text]
│➻ *${prefix}coffee* [text]
│➻ *${prefix}husbu*
│➻ *${prefix}husbu2*
│➻ *${prefix}marvellogo* [text]
┬
╰──────────────────────

╭──────「 MEDIA 」
┴
│➻ *${prefix}yt* [link]
│➻ *${prefix}tiktok* [link]
│➻ *${prefix}ytsearch* [yt search]
│➻ *${prefix}igstalk* [Rizky]
│➻ *${prefix}wikien* [love]
│➻ *${prefix}tiktokstalk* [username]
│➻ *${prefix}url2img* [link]
│➻ *${prefix}fototiktok* [username]
│➻ *${prefix}map* [kota]
│➻ *${prefix}kbbi* [kamus]
│➻ *${prefix}brainly* [tau sendiri kan]
│➻ *${prefix}infoghitub* 
│➻ *${prefix}infocuaca* [kota]
│➻ *${prefix}infogempa*
│➻ *${prefix}artinama [nama]*
│➻ *${prefix}covid [negara]*
│➻ *${prefix}sandwriting [teks]*
│➻ *${prefix}quotemaker [|teks|author|theme]*
│➻ *${prefix}nulis [teks]*
│➻ *${prefix}resepmasakan [optional]*
│➻ *${prefix}wiki [query]*
│➻ *${prefix}qrcode [optional]*
│➻ *${prefix}textmaker [teks1|teks2]*
│➻ *${prefix}ssweb [linkWeb]*
│➻ *${prefix}shorturl [linkWeb]*
│➻ *${prefix}animesaran*
│➻ *${prefix}animesaran2*
┬
╰──────────────────────

╭──────「 MUSIC 」
┴
│➻ *${prefix}play*
│➻ *${prefix}joox*
│➻ *${prefix}lirik*
│➻ *${prefix}chord*
┬
╰──────────────────────

╭──────「 NSFW 」
┴
│➻ *${prefix}randomhentai*
│➻ *${prefix}hentai*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}loli*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}bokep*
│➻ *${prefix}kodenuklir2*
│➻ *${prefix}randomanime*
│➻ *${prefix}cry*
│➻ *${prefix}kiss*
│➻ *${prefix}randomhug*
│➻ *${prefix}nekonime*
│➻ *${prefix}waifu*
│➻ *${prefix}waifu2*
│➻ *${prefix}kodenuklir*
│➻ *${prefix}nekopoi*
┬
╰──────────────────────

╭──────「 OTHER 」
┴
│➻ *${prefix}sticker*
│➻ *${prefix}stickergif*
│➻ *${prefix}ttp [teks]*
│➻ *${prefix}toimg [replay sticker]*
│➻ *${prefix}thunder [teks]*
│➻ *${prefix}ocr [gambar]*
│➻ *${prefix}meme*
│➻ *${prefix}memindo*
│➻ *${prefix}testime*
│➻ *${prefix}hobby*
│➻ *${prefix}watak*
│➻ *${prefix}beritahoax*
│➻ *${prefix}jsholat [daerah]*
│➻ *${prefix}report*
│➻ *${prefix}hilih [teks]*
│➻ *${prefix}cekjodoh* [nama]
│➻ *${prefix}artinama* [rizky]
│➻ *${prefix}kodenegara*
│➻ *${prefix}listzodiak*
│➻ *${prefix}unta*
│➻ *${prefix}elang*
│➻ *${prefix}anjing*
│➻ *${prefix}randomcat*
│➻ *${prefix}zodiak [zodiak kamu]*
│➻ *${prefix}listsurah*
│➻ *${prefix}dadu*
│➻ *${prefix}bahasa*
│➻ *${prefix}virtex*
│➻ *${prefix}timer*
│➻ *${prefix}pelangi*
│➻ *${prefix}wated*
│➻ *${prefix}triggerd*
│➻ *${prefix}ramalhp*
│➻ *${prefix}ramaljadian*
│➻ *${prefix}primbonjodoh*
┬
╰──────────────────────

╭──────「 OWNER 」
┴
│➻ *${prefix}block 62813xxxxx*
│➻ *${prefix}unblock 62813xxxxx*
│➻ *${prefix}promote @tagmember*
│➻ *${prefix}demote @tagadmin*
│➻ *${prefix}bc*
│➻ *${prefix}leave*
│➻ *${prefix}bc2*
│➻ *${prefix}clearall*
│➻ *${prefix}clone*
│➻ *${prefix}hidetag*
│➻ *${prefix}hidetag2*
│➻ *${prefix}setprefix*
│➻ *${prefix}unban*
│➻ *${prefix}ban*
│➻ *${prefix}runtime*
│➻ *${prefix}turnoff*
│➻ *${prefix}getses*
│➻ *${prefix}nangis*
│➻ *${prefix}cium*
│➻ *${prefix}peluk*
┬
╰──────────────────────

╭──────「 SOUND 」
┴
│➻ *${prefix}iri*
│➻ *${prefix}baka*
│➻ *${prefix}pale*
│➻ *${prefix}tapi*
│➻ *${prefix}terpesona*
│➻ *${prefix}dsh1*
│➻ *${prefix}dsh2*
│➻ *${prefix}dsh3*
│➻ *${prefix}ara*
│➻ *${prefix}tarik*
│➻ *${prefix}assalamualaikum
│➻ *${prefix}sound*
│➻ *${prefix}sound1*
│➻ *${prefix}sound2*
│➻ *${prefix}sound3*
│➻ *${prefix}sound4*
│➻ *${prefix}sound5*
│➻ *${prefix}sound6*
│➻ *${prefix}sound7*
│➻ *${prefix}sound8*
│➻ *${prefix}sound9*
│➻ *${prefix}sound10*
│➻ *${prefix}sound11*
┬
╰──────────────────────

╭──────「 VIP 」
┴
│➻ *${prefix}ytmp4 [link]*
│➻ *${prefix}ytmp3 [link]*
│➻ *${prefix}joox [lagu]*
│➻ *${prefix}setprefix*
│➻ *${prefix}tomp3 [replay video]*
│➻ *${prefix}randomanime*
│➻ *${prefix}randomhentai*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}indohot*
│➻ *${prefix}indo(1-25)*
┬
╰──────────────────────

╭──────「 TENTANG 」
┴
│➻ Ketik *${prefix}info* untuk melihat list informasi tentang bot
│➻ Ketik *${prefix}owner* untuk melihat kontak owner
│➻ Ketik *${prefix}rules* untuk melihat apa aja yang di larang
│➻ Mau donasi? 081315995628 (Gopay)
│➻ Jika tidak ingin donasi bantu Follow Ig aja kak _instagram.com/iqbalrizkimaulana001_
│➻ _* 𝙸𝚀𝙱𝙰𝙻 © 2021*_
┬
╰──────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Listmenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'vipmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					if (!isPrem) return reply(ind.premon(pushname))
					const Vipmenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 VIP 」
┴
│➻ *${prefix}ytmp4 [link]*
│➻ *${prefix}ytmp3 [link]*
│➻ *${prefix}joox [lagu]*
│➻ *${prefix}setprefix*
│➻ *${prefix}tomp3 [replay video]*
│➻ *${prefix}randomanime*
│➻ *${prefix}randomhentai*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}indohot*
│➻ *${prefix}indo(1-25)*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Vipmenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'kerangmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Kerangmenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 KERANG 」
┴
│➻ *${prefix}apakah [text]*
│➻ *${prefix}kapankah [text]*
│➻ *${prefix}bisakah [text]*
│➻ *${prefix}rate*
│➻ *${prefix}toxic*
│➻ *${prefix}gantengcek*
│➻ *${prefix}cantikcek*
│➻ *${prefix}persengay*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Kerangmenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'adminmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Adminmenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 ANIME 」
┴
│➻ *${prefix}randomanime*
│➻ *${prefix}waifu*
│➻ *${prefix}waifu2*
│➻ *${prefix}nekonime*
│➻ *${prefix}wibu*
│➻ *${prefix}wait*
│➻ *${prefix}inu*
│➻ *${prefix}pokemon*
│➻ *${prefix}naruto*
│➻ *${prefix}hinata*
│➻ *${prefix}sasuke*
│➻ *${prefix}boruto*
│➻ *${prefix}minato*
│➻ *${prefix}loli*
│➻ *${prefix}loli2*
│➻ *${prefix}rize*
│➻ *${prefix}akira*
│➻ *${prefix}itori*
│➻ *${prefix}kurumi*
│➻ *${prefix}miku*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Adminmenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'ownermenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Ownermenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 OWNER 」
┴
│➻ *${prefix}block 62813xxxxx*
│➻ *${prefix}unblock 62813xxxxx*
│➻ *${prefix}promote @tagmember*
│➻ *${prefix}demote @tagadmin*
│➻ *${prefix}bc*
│➻ *${prefix}leave*
│➻ *${prefix}bc2*
│➻ *${prefix}clearall*
│➻ *${prefix}clone*
│➻ *${prefix}hidetag*
│➻ *${prefix}hidetag2*
│➻ *${prefix}setprefix*
│➻ *${prefix}unban*
│➻ *${prefix}ban*
│➻ *${prefix}runtime*
│➻ *${prefix}turnoff*
│➻ *${prefix}getses*
│➻ *${prefix}nangis*
│➻ *${prefix}cium*
│➻ *${prefix}peluk*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Ownermenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/bot.jpeg')} } }})

					break
					case 'nsfwmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Nsfwmenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 NSFW 」
┴
│➻ *${prefix}randomhentai*
│➻ *${prefix}hentai*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}loli*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}bokep*
│➻ *${prefix}kodenuklir2*
│➻ *${prefix}randomanime*
│➻ *${prefix}cry*
│➻ *${prefix}kiss*
│➻ *${prefix}randomhug*
│➻ *${prefix}nekonime*
│➻ *${prefix}waifu*
│➻ *${prefix}waifu2*
│➻ *${prefix}kodenuklir*
│➻ *${prefix}nekopoi*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Nsfwmenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'animemenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Animemenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 ANIME 」
┴
│➻ *${prefix}randomanime*
│➻ *${prefix}waifu*
│➻ *${prefix}waifu2*
│➻ *${prefix}nekonime*
│➻ *${prefix}wibu*
│➻ *${prefix}wait*
│➻ *${prefix}inu*
│➻ *${prefix}pokemon*
│➻ *${prefix}naruto*
│➻ *${prefix}hinata*
│➻ *${prefix}sasuke*
│➻ *${prefix}boruto*
│➻ *${prefix}minato*
│➻ *${prefix}loli*
│➻ *${prefix}loli2*
│➻ *${prefix}rize*
│➻ *${prefix}akira*
│➻ *${prefix}itori*
│➻ *${prefix}kurumi*
│➻ *${prefix}miku*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Animemenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'mediamenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Mediamenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 MEDIA 」
┴
│➻ *${prefix}yt* [link]
│➻ *${prefix}tiktok* [link]
│➻ *${prefix}ytsearch* [yt search]
│➻ *${prefix}igstalk* [Rizky]
│➻ *${prefix}wikien* [love]
│➻ *${prefix}tiktokstalk* [username]
│➻ *${prefix}url2img* [link]
│➻ *${prefix}fototiktok* [username]
│➻ *${prefix}map* [kota]
│➻ *${prefix}kbbi* [kamus]
│➻ *${prefix}brainly* [tau sendiri kan]
│➻ *${prefix}infoghitub* 
│➻ *${prefix}infocuaca* [kota]
│➻ *${prefix}infogempa*
│➻ *${prefix}artinama [nama]*
│➻ *${prefix}covid [negara]*
│➻ *${prefix}sandwriting [teks]*
│➻ *${prefix}quotemaker [|teks|author|theme]*
│➻ *${prefix}nulis [teks]*
│➻ *${prefix}resepmasakan [optional]*
│➻ *${prefix}wiki [query]*
│➻ *${prefix}qrcode [optional]*
│➻ *${prefix}textmaker [teks1|teks2]*
│➻ *${prefix}ssweb [linkWeb]*
│➻ *${prefix}shorturl [linkWeb]*
│➻ *${prefix}animesaran*
│➻ *${prefix}animesaran2*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Mediamenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'othermenu':
					if (isBanned) return reply(mess.only.benned)   
					 if (!isRegister) return reply(mess.only.daftarB)
					const Othermenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 OTHER 」
┴
│➻ *${prefix}sticker*
│➻ *${prefix}stickergif*
│➻ *${prefix}ttp [teks]*
│➻ *${prefix}toimg [replay sticker]*
│➻ *${prefix}thunder [teks]*
│➻ *${prefix}ocr [gambar]*
│➻ *${prefix}meme*
│➻ *${prefix}memindo*
│➻ *${prefix}testime*
│➻ *${prefix}hobby*
│➻ *${prefix}watak*
│➻ *${prefix}beritahoax*
│➻ *${prefix}jsholat [daerah]*
│➻ *${prefix}report*
│➻ *${prefix}hilih [teks]*
│➻ *${prefix}cekjodoh* [nama]
│➻ *${prefix}artinama* [rizky]
│➻ *${prefix}kodenegara*
│➻ *${prefix}listzodiak*
│➻ *${prefix}unta*
│➻ *${prefix}elang*
│➻ *${prefix}anjing*
│➻ *${prefix}randomcat*
│➻ *${prefix}zodiak [zodiak kamu]*
│➻ *${prefix}listsurah*
│➻ *${prefix}dadu*
│➻ *${prefix}bahasa*
│➻ *${prefix}virtex*
│➻ *${prefix}timer*
│➻ *${prefix}pelangi*
│➻ *${prefix}wated*
│➻ *${prefix}triggerd*
│➻ *${prefix}ramalhp*
│➻ *${prefix}ramaljadian*
│➻ *${prefix}primbonjodoh*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Othermenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'funmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Funmenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 FUN 」
┴
│➻ *${prefix}truth*
│➻ *${prefix}dare*
│➻ *${prefix}hilih*
│➻ *${prefix}alay [text]*
│➻ *${prefix}simi [text]*
│➻ *${prefix}bucin*
│➻ *${prefix}tts [bahasa] + [text]*
│➻ *${prefix}quotes*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Funmenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'makermenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Makermenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────
╭──────「 MAKER 」
┴
│➻ *${prefix}tahta* [𝙸𝚀𝙱𝙰𝙻]
│➻ *${prefix}logo* [𝙸𝚀𝙱𝙰𝙻]
│➻ *${prefix}goldbutton* [𝙸𝚀𝙱𝙰𝙻]
│➻ *${prefix}silverbutton* [𝙸𝚀𝙱𝙰𝙻]
│➻ *${prefix}pronlogo* [text|text]
│➻ *${prefix}snow* [text|text]
│➻ *${prefix}marvelogo* [text|text]
│➻ *${prefix}text3d* [text]
│➻ *${prefix}ninjalogo* [text|text]
│➻ *${prefix}wolflogo* [text|text]
│➻ *${prefix}lionlogo* [text|text]
│➻ *${prefix}textscreen* [text
│➻ *${prefix}rtext* [text]
│➻ *${prefix}party* [text]
│➻ *${prefix}light* [text]
│➻ *${prefix}shadow* [text]
│➻ *${prefix}minion* [text]
│➻ *${prefix}neon* [text]
│➻ *${prefix}neongreen* [text]
│➻ *${prefix}neon2* [text]
│➻ *${prefix}3d* [text]
│➻ *${prefix}blackpink* [text]
│➻ *${prefix}sandwriting* [text]
│➻ *${prefix}water* [text|text]
│➻ *${prefix}thunder* [text]
│➻ *${prefix}stiltext* [text|text]
│➻ *${prefix}party* [text]
│➻ *${prefix}galaxtext* [text]
│➻ *${prefix}lovemake* [text]
│➻ *${prefix}walpaperhd* [text]
│➻ *${prefix}fire* [text]
│➻ *${prefix}quotemaker* [tx|tx|random]
│➻ *${prefix}water* [text]
│➻ *${prefix}epep* [text]
│➻ *${prefix}glitch* [text]
│➻ *${prefix}jokerlogo [teks]*
│➻ *${prefix}summer [text]*
│➻ *${prefix}logo*
│➻ *{prefix}galaxtext* [text]
│➻ *${prefix}cslogo* [text]
│➻ *${prefix}coffee* [text]
│➻ *${prefix}husbu*
│➻ *${prefix}husbu2*
│➻ *${prefix}marvellogo* [text]
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Makermenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'soundmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Soundmenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 SOUND 」
┴
│➻ *${prefix}iri*
│➻ *${prefix}baka*
│➻ *${prefix}pale*
│➻ *${prefix}tapi*
│➻ *${prefix}terpesona*
│➻ *${prefix}dsh1*
│➻ *${prefix}dsh2*
│➻ *${prefix}dsh3*
│➻ *${prefix}ara*
│➻ *${prefix}tarik*
│➻ *${prefix}assalamualaikum
│➻ *${prefix}sound*
│➻ *${prefix}sound1*
│➻ *${prefix}sound2*
│➻ *${prefix}sound3*
│➻ *${prefix}sound4*
│➻ *${prefix}sound5*
│➻ *${prefix}sound6*
│➻ *${prefix}sound7*
│➻ *${prefix}sound8*
│➻ *${prefix}sound9*
│➻ *${prefix}sound10*
│➻ *${prefix}sound11*
┬
╰──────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Soundmenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'musicmenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Musicmenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 MUSIC 」
┴
│➻ *${prefix}play*
│➻ *${prefix}joox*
│➻ *${prefix}lirik*
│➻ *${prefix}chord*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Musicmenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					case 'gamemenu':
					if (isBanned) return reply(mess.only.benned)    
					 if (!isRegister) return reply(mess.only.daftarB)
					const Gamemenu = {
				text: ` 
╭──────「 USER ${botName} 」
┴
│➻ Hallo :${pushname}
│➻ nomer : wa.me/${sender.split("@")[0]}
│➻ Xp mu: ${getLevelingXp(sender)}
│➻ Lvl mu: ${getLevelingLevel(sender)}
│➻ user register : ${_registered.length}
│➻ Role : ${role}
│➻ Prefix: 「  ${prefix}  」
│➻ Registered: ✔️
┬
╰──────────────────────

╭──────「 ABOUT 」
┴
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}speed*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
┬
╰────────────────────────

╭──────「 GAME 」
┴
│➻ *${prefix}tebakgambar*
│➻ *${prefix}caklontong*
│➻ *${prefix}family100*
│➻ *${prefix}game*
┬
╰────────────────────────`,

contextInfo: {
  mentionedJid: [sender]
}
  }
  iqbl.sendMessage(from, Gamemenu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})

					break
					
//Limit && Uang && Level
					case 'transfer':
				if (!isRegister) return reply(mess.only.daftarB)
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('62895710073737@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'dompet':
				if (!isPublic) return reply(mess.only.publikG)
				if (!isRegister) return reply(mess.only.daftarB)
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (!isPublic) return reply(mess.only.publikG)
				if (!isRegister) return reply(mess.only.daftarB)
				payout = body.slice(10)
				const koinPerlimit = 15
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran Terimakasih telah Belanja limit Di iqbal Shope\n${createSerial(15)}`)
				} 
				break
				case 'event':
				     if (isBanned) return reply(mess.only.benned)               
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
                                        if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                        if (Number(args[0]) === 1) {
                                                if (isEventon) return reply('*SUDAH AKTIF* !!!')
                                                event.push(from)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*「 SUCCSESS 」 Mengaktifkan EVENT di group ini*')
                                        } else if (Number(args[0]) === 0) {
                                                event.splice(from, 1)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*「 SUCCSESS 」 Menonaktifkan EVENT di group ini*')
                                        } else {
                                                reply(ind.satukos())
                                        }
                                        break
                                        case 'mining':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
				case 'limit':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        checkLimit(sender)
                                        break
                                        case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Name : ${sem}\n┣⊱ User XP :  ${userXp}\n┣⊱ Role :  ${role}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                iqbl.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Boo :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === 'disable') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Ketik perintah 1 untuk mengaktifkan, 0 untuk menonaktifkan* \n *Contoh: ${prefix}leveling 1*')
                }
            break
            case 'giftlimit': 
				if (!isOwner,!isPrem) return reply(ind.premon(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*

• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                break
                case 'leaderboard':
                case 'lb':
			if (isBanned) return reply(mess.only.benned)    
if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					const lvl = getLevelingXp(sender)
                const exp = getLevelingXp(sender)
					random = Math.floor(Math.random() * 150) + 1
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*╠➥ * @${mem.jid.split('@')[0]}\n*╠➥ * XP:${exp}\n*╠➥ * User Level : ${lvl}\n*╠➥ * Random:${random}`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT BERHASIL DI RESET`)
				break
				case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(`Limit berhasil di ubah menjadi : ${limitt}`)
					break 
					case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					memberLimit = args[0]
					reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`)
					break 
					case 'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`Nama Bot berhasil di ubah menjadi : ${name}`)
					break 
					
//Prem
					case 'addprem':
				if (!isOwner) return reply(ind.ownerb())
				expired = "30d"
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				break
				
				
				case 'premlist':
	            case 'listprem':
	                if (!isRegister) return reply(mess.only.daftarB)
	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	                }
	                await reply(listPremi)
	            break
	case 'checkprem':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
				break
				
//Tes Time
					case 'testime':
					setTimeout( () => {
					iqbl.sendMessage(from, 'Waktu habis:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '5 Detik lagi', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '10 Detik lagi', text) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'runtime':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isPublic) return reply(mess.only.publikG)
				iqbl.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
				
//Indo
					case 'indo1':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPrem) return reply(ind.premon(pushname))
					qute1 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute1, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
					break
					case 'indo2':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
					break
					case 'indo3':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute2 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute2, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })
					break
					case 'indo4':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute3 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute3, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })
					break
					case 'indo5':
					if (isBanned) return reply(mess.only.benned)    
				 if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute4 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute4, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })
					break
					case 'indo6':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute5 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute5, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })
					break
					case 'indo7':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute6 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute6, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })
					break
					case 'indo8':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute7 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute7, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })
					break
					case 'indo9':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute8 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute8, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })
					break
					case 'indo10':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute9 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute9, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
					break
					case 'indo11':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute10 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute11, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })
					break
					case 'indo12':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute12 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute12, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })
					break
					case 'indo13':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute11 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute11, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })
					break
					case 'indo14':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute13 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute13, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })
					break
					case 'indo15':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute14 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute14, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })
					break
					case 'indo16':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute15 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute15, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })
					break
					case 'indo17':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute16 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute16, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })
					break
					case 'indo18':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute17 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute17, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })
					break
					case 'indo19':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute18 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute18, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })
					break
					case 'indo20':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute19 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute19, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })
					break
					case 'indo21':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute20 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute20, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })
					break
					case 'indo22':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute21 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute21, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })
					break
					case 'indo23':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute22 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute22, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })
					break
					case 'indo24':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute23 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute23, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })
					break
					case 'indo25':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik *!daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute24 = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Bot.jpg`)
					iqbl.sendMessage(from, qute24, image, { quoted: mek, caption: 'Nih Link Bro Download Sendiri Gan\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })
					break
					
//Add 
					case 'getsticker':
				case 'gets':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					iqbal = body.slice(12)
					result = fs.readFileSync(`./add/sticker/${iqbal}.webp`)
					iqbl.sendMessage(from, result, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
					return reply('Limit terpakai 1')
					await limitAdd(sender)
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					iqbl.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					return reply('Limit terpakai 1')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					iqbal = body.slice(12)
					if (!iqbal) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await iqbl.downloadMediaMessage(boij)
					setiker.push(`${iqbal}`)
					fs.writeFileSync(`./add/sticker/${iqbal}.webp`, delb)
					fs.writeFileSync(`./add/stik.json`, JSON.stringify(setiker))
					iqbl.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
					await limitAdd(sender)
					break
				case 'addvn':
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					return reply('Limit terpakai 1')
					iqbal = body.slice(7)
					if (!iqbal) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await iqbl.downloadMediaMessage(boij)
					audionye.push(`${iqbal}`)
					fs.writeFileSync(`./add/audio/${iqbal}.mp3`, delb)
					fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))
					iqbl.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
					await limitAdd(sender)
					break
				case 'getvn':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				return reply('Limit terpakai 1')
					iqbal = body.slice(7)
					buffer = fs.readFileSync(`./add/audio/${iqbal}.mp3`)
					iqbl.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					await limitAdd(sender)
					break
				case 'listvn':
				case 'vnlist':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					iqbl.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					return reply('Limit terpakai 1')
					iqbal = body.slice(10)
					if (!iqbal) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await iqbl.downloadMediaMessage(boij)
					imagenye.push(`${iqbal}`)
					fs.writeFileSync(`./add/image/${iqbal}.jpeg`, delb)
					fs.writeFileSync('./add/image.json', JSON.stringify(imagenye))
					iqbl.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
					await limitAdd(sender)
					break
				case 'getimage':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				return reply('Limit terpakai 1')
					iqbal = body.slice(10)
					buffer = fs.readFileSync(`./add/image/${iqbal}.jpeg`)
					iqbl.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${iqbal}.jpeg` })
					await limitAdd(sender)
					break
				case 'imagelist':
				case 'listimage':
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					iqbl.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					return reply('Limit terpakai 1')
					iqbal = body.slice(10)
					if (!iqbal) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await iqbl.downloadMediaMessage(boij)
					videonye.push(`${iqbal}`)
					fs.writeFileSync(`./add/video/${iqbal}.mp4`, delb)
					fs.writeFileSync('./add/video.json', JSON.stringify(videonye))
					iqbl.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
					await limitAdd(sender)
					break
				case 'getvideo':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				return reply('Limit terpakai 1')
					iqbal = body.slice(10)
					buffer = fs.readFileSync(`./add/video/${iqbal}.mp4`)
					iqbl.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
					await limitAdd(sender)
break
				case 'listvideo':
				case 'videolist':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					iqbl.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break		
		
//Group Aktif
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
						iqbl.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
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
				if (argz.length === 1) return iqbl.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return iqbl.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						iqbl.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						iqbl.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return iqbl.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						iqbl.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						iqbl.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return iqbl.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return iqbl.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 6285928xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					iqbl.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						iqbl.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						iqbl.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						iqbl.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						iqbl.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
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
				    linkgc = await iqbl.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    iqbl.sendMessage(from, yeh, text, {quoted: mek})
			        break
			case 'kicktime':
			if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isPublic) return reply(mess.only.publikG)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 iqbl.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 iqbl.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 iqbl.sendMessage(from, '_Headshot_', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 iqbl.sendMessage(from, '_bismillah_', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 iqbl.sendMessage(from, '_ciiee calon bakalan dikick..._', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 iqbl.sendMessage(from, '_siap siap ya bot Kick nih_', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
					case 'beban':

					if (!isRegister) return reply(mess.only.daftarB)
		      		if (isBanned) return reply(mess.only.benned)

					membr = []

					const nge = groupMembers

					const tod = groupMembers

					const beb = nge[Math.floor(Math.random() * nge.length)]

					const an = pushname2[Math.floor(Math.random() * tod.length)]

					teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`

					membr.push(beb.jid)

					mentions(teks, membr, true)

					break
			case 'ban':
					iqbl.updatePresence(from, Presence.composing) 
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
					iqbl.updatePresence(from, Presence.composing) 
					if (!isRegister) return reply(mess.only.daftarB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of ban number :\n'
					for (let benn of ban) {
						teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
					iqbl.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
					case 'notif':
if (!isGroupAdmins) return reply(mess.only.admin)
iqbl.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await iqbl.groupMetadata(from);
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
await iqbl.sendMessage(from, options, text)
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
                                        iqbl.sendMessage(from, fku, text, {quoted: mek})
                                        break
                                        
//About
case 'speed':
                case 'ping':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    iqbl.updatePresence(from, Presence.composing) 
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
  iqbl.sendMessage(from, Ping, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
 
                    break
					case 'info':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					me = iqbl.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Author* : *𝙸𝚀𝙱𝙰𝙻*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Public:* ON\n*Total User Premium*: ${premium.length}\n*Total Chat* : ${totalchat.length}\n*Instagram* : *gwlo46*\n*Github* : *github.com/gk punya*\n*Youtube* : *To Gaming*`
					buffer = await getBuffer(me.imgUrl)
					iqbl.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'creator':
			case 'owner':
			if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
                 iqbl.sendMessage(from, {displayname: "Jeff", vcard: ccard}, MessageType.contact, { quoted: mek})
iqbl.sendMessage(from, {displayname: "Jeff", vcard: ncard}, MessageType.contact, { quoted: mek})

                 iqbl.sendMessage(from, 'kenalin ya itu pacar ku >_-',MessageType.text, { quoted: mek} )
                 tod = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Rizki.jpg`)
                 iqbl.sendMessage(from, tod, image, { quoted: mek, caption: '*Itu Anime Ownerku Kau Mau Apa!*'})
                 break
                 
//Menu
					case 'bahasa':
		iqbl.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
                break
					case 'kodenegara':
               iqbl.sendMessage(from, negara(prefix, sender), text, {quoted: mek})
               break
					case 'virtex':
					 if (!isOwner) return reply(mess.only.ownerB)
               iqbl.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break
               case 'murothal':
		iqbl.sendMessage(from, murothal(prefix, sender), text, {quoted: mek})
                break
                case 'afix':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    iqbl.sendMessage(from, afix(prefix), text, { quoted: mek })
                    break
                    case 'bfix':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    iqbl.sendMessage(from, bfix(prefix), text, { quoted: mek })
                    break
                        case 'checkaktif':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    iqbl.sendMessage(from, checkaktif(prefix), text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
                    break
                    case 'daftarmemberselebgram':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    iqbl.sendMessage(from, daftarmemberselebgram(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Screenshot_20210207-023102.png`)
                    iqbl.sendMessage(from, tod, image, { quoted: mek, caption: '*ini Instagram Managementnya*'})
                    break
                    case 'kontakdeveloper':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    iq.sendMessage(from, kontakdeveloper(prefix), text, { quoted: mek })
                    tod = await getBuffer(`https://raw.githubusercontent.com/Rizki0001/img/main/Rizki.jpg`)
                    iqbl.sendMessage(from, tod, image, { quoted: mek, caption: 'Owner Aku Cogans loh!\n Btw! Jangan lupa Subscribe Owner Aku'})
                    break
                    case 'install':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    iqbl.sendMessage(from, install(prefix), text, { quoted: mek })
                    break
                    case 'intro':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isRegister) return reply(mess.only.daftarB)
                    iqbl.sendMessage(from, intro(prefix), text, { quoted: mek })
                    break
                    case 'iklan':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					iqbl.sendMessage(from, iklan(prefix) , text, { quoted: mek })
					break
					case 'animesaran':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					iqbl.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
					case 'listsurah':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					iqbl.sendMessage(from, listsurah(prefix) , text, { quoted: mek })
					break
					case 'tnc':
					if (isBanned) return reply(mess.only.benned)    
					if (!isRegister) return reply(mess.only.daftarB)
					iqbl.sendMessage(from, tnc(prefix) , text, { quoted: mek })
					break
					case 'addsay':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, Kata ${hai} Telah Ditambahkan ke database`)
						break
						case 'saylist':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let awokwkwk of sayrandom) {
						teks += `╠➥ ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					iqbl.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
					
//Anime
					case 'randomanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply(mess.only.premium)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
						bufferzz = await getBuffer(res.result)
						iqbl.sendMessage(from, bufferzz, image, {quoted: mek, caption: 'ni randomanime!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'waifu':
				    try {
						res = await fetchJson(`https://iqball-api.herokuapp.com/api/waifu?apikey=IqbalGanss`, {method: 'get'})
						bufferuu = await getBuffer(res.image)
						iqbl.sendMessage(from, bufferuu, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'waifu2':
			if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					reply(mess.wait)
					anu = await fetchJson(`https://iqball-api.herokuapp.com/api/waifu?apikey=IqbalGanss`, {method:'get'})
					if (anu.error) return reply(anu.error)
					bufferss = await getBuffer(anu.image)
					waifu = `*${anu.desc}`
					iqbl.sendMessage(from, bufferss, image, {quoted: mek, caption: waifu})
					break
					case 'waifu3':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)			
						res = await fetchJson(`https://iqball-api.herokuapp.com/api/waifu?apikey=IqbalGanss`, {method: 'get'})
						bufferee = await getBuffer(res.image)
						iqbl.sendMessage(from, bufferee, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nekonime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
						res = await fetchJson(`https://iqball-api.herokuapp.com/api/nekonime?apikey=IqbalGanss`, {method: 'get'})
						bufferc = await getBuffer(res.result)
						iqbl.sendMessage(from, bufferc, image, {quoted: mek, caption: 'Ingat! Cintai nekonime'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						iqbl.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'wibu':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=AprilRizki`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferhh = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nama* ${anu.result.nama} ➸ *deskripsi* ${anu.result.deskripsi}`
					iqbl.sendMessage(from, bufferhh, image, {quoted: mek, caption: wibu})
					break
					case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await iqbl.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							iqbl.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						tutor = await getBuffer(`https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg`)
						iqbl.sendMessage(from, tutor, image, {quoted: mek, caption: 'nih tutor tod'})
						reply('foto aja')
					}
					break
					case 'inu':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://scrap.terhambar.com/pin?url=https://id.pinterest.com/pin/588916088754108677/`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					nye = await getBuffer(uni)
					iqbl.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: mek })
					break
					
//Gif
					case 'ngewe':
				if (!isRegister) return reply(mess.only.daftarB)
				
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						iqbl.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
	
//All Fitur
					case 'tahta':
                if (!isPublic) return reply(mess.only.publikG)
                if (isBanned) return reply(mess.only.benned)    
				  if (!isRegister) return reply(mess.only.daftarB)
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferrty = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=beli sendiri`, {method: 'get'})
					iqbl.sendMessage(from, bufferrty, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
					case 'infogempa':
               if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)           
                   anu = await fetchJson(`https://iqball-api.herokuapp.com/api/infogempa?apikey=IqbalGanss`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   bufferggg = await getBuffer(anu.map)
                   reply = ` *potensi* \n ${anu.potensi} *lokasi* \n${anu.lokasi} *magnitude* \n${anu.magnitude} *koordinat* \n${anu.koordinat} *kedalaman* \n${anu.kedalaman}`
                   iqbl.sendMessage(from, bufferggg, image, {quoted: mek, caption: hasil})
                   break
					case 'jsholat':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = body.slice(9)
					anu = await fetchJson(`https://iqball-api.herokuapp.com/api/jadwalshalat?daerah=${sholat}&apikey=IqbalGass`, {method: 'get'})
					reply(mess.wait)
					if (anu.error) return reply('[\u2757] Maaf, Daerah yang anda masukan salah!')
					jsol = `Jadwal sholat di ${jsol.sholat} hari ini adalah\n\n*➸ Imsyak :* ${jsol.imsak} WIB\n*➸ Subuh :* ${jsol.subuh} WIB\n*➸ Dzuhur :* ${jsol.dzuhur} WIB\n*➸ Ashar :* ${jsol.ashar} WIB\n*➸ Maghrib :* ${jsol.maghrib} WIB\n*➸ Isya :* ${jsol.isha} WIB`
					iqbl.sendMessage(from, jsol, text, {quoted: mek})
					break
					case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (args.length < 1) return reply('teks nya mana om')
					tels = body.slice(7)
					anu = await fetchJson(`https://iqball-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					reply(anu.result)
					break
					case 'igstalk':
			if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
			
					if (args.length < 1) return reply('Masukan username mu!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://iqball-api.herokuapp.com/api/stalk?username=${ige}&apikey=IqbalGanss`, {method: 'get'})
					buffer7 = await getBuffer(data.result.picture)
					capt = `User Ditemukan!!\n\n*➸ Nama :* ${data.result.name}\n*➸ Username :* ${data.result.username}\n*➸ Followers :* ${data.result.Jumlah_Followers}\n*➸ Mengikuti :* ${data.result.Jumlah_Following}\n*➸ Bio :* ${data.result.Biodata}`
					iqbl.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					break
					case 'brainly':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)  
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://iqball-api.herokuapp.com/api/brainly?q=${body.slice(9)}&apikey=IqbalGanss`, {method: 'get'})
					reply(anu.br)
					break
					case 'join':
            if (args.length == 0) return reply('Jika kalian ingin mengundang bot kegroup silahkan invite atau dengan\nketik ${prefix}join [link group]')
            let linkgrup = body.slice(6)
            let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
            if (!islink) return reply('Maaf link group-nya salah! silahkan kirim link yang benar')
            if (isOwner) {
                await joinGroupViaLink(linkgrup)
                      .then(async () => {
                          await mek.sendText(from, `Berhasil join grup via link!`)
                          await mek.sendText(chekgrup.id, `Hai minn~, Im Rizki BOT. To find out the commands on this bot type ${prefix}menu`)
                      })
            } else {
                let cgrup = await mek.getAllGroups()
                if (cgrup.length > groupLimit) return reply('Sorry, the group on this bot is full\nMax Group is: ${groupLimit}')
                if (cgrup.size < memberLimit) return reply('Sorry, BOT wil not join if the group members do not exceed ${memberLimit} people')
                await mek.joinGroupViaLink(linkgrup)
                      .then(async () =>{
                          await mek.reply(from, `Berhasil join grup via link!`,)
                      })
                      .catch(() => {
                          reply('Gagal!')
                      })
            }
            break
					case 'attp':
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (args.length < 1) return reply(ind.wrongf())
					teks = body.slice(6)
					attp = await getBuffer(`https://api.vhtear.com/textxgif?text=${teks}&apikey=c1d162b46e634f389efa1ac715f03d03`)
					iqbl.sendMessage(from, attp, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Hai ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
					await limitAdd(sender) 
					break
					case 'mutual':
                if (!isRegister) return reply(mess.only.daftarB)
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next':
                if (!isRegister) return reply(mess.only.daftarB)
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
					case 'bitly':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               iqbl.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
                case 'apkpure':			
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'jadwalbola': // Update By Iqbal		
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `➻ *Kick Off* : ${i.kickoff}\n➻ *Pertandingan* : ${i.pertandingan}\n➻ *Stasiuntv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'coronainfo': // Update By Iqbal
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				data = await fetchJson(`https://api.vhtear.com/corona&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Updated* : ${i.updated}\n*Country* : ${i.country}\n*CountryInfo* : \n*ID* : ${i.countryInfo._id}\n*iso2* : ${i.countryInfo.iso2}\n*iso3* : ${i.countryInfo.iso3}\n*lat* : ${i.countryInfo.lat}\n*long* : ${i.countryInfo.long}\n*cases* : ${i.cases}\n*todayCases* : ${i.todayCases}\n*deaths* : ${i.deaths}\n*todayDeaths* : ${i.todayDeaths}\n*recovered* : ${i.recovered}\n*todayRecovered* : ${i.todayRecovered}\n*active* : ${i.active}\n*critical* : ${i.critical}\n*casesPerOneMillion* : ${i.casesPerOneMillion}\n*deathsPerOneMillion* : ${i.deathsPerOneMillion}\n*tests* : ${i.tests}\n*testsPerOneMillion* : ${i.testsPerOneMillion}\n*population* : ${i.population}\n*continent* : ${i.continent}\n*oneCasePerPeople* : ${i.oneCasePerPeople}\n*oneDeathPerPeople* : ${i.oneDeathPerPeople}\n*oneTestPerPeople* : ${i.oneTestPerPeople}\n*activePerOneMillion* : ${i.activePerOneMillion}\n*recoveredPerOneMillion* : ${i.recoveredPerOneMillion}\n*criticalPerOneMillion* : ${i.criticalPerOneMillion}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
		case 'shortlink': //Update By Iqbal
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				iqbl.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink2'://Update By Iqbal
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				iqbl.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink3':		
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				iqbl.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/shorturl?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink4':
				 // Update By Iqbal				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				itsmeiky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=WEMPYGANSS`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink5':
				 // Update By Iqbal				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				itsmeiky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink6':
				 // Update By Iqbal				
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				itsmeiky.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
                case 'pinterest':
					if (!isRegister) return reply(mess.only.daftarB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					iqbl.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					iqbl.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
					await limitAdd(sender)
					break 
					case 'play':
          if (isBanned) return reply(mess.only.benned)   
				var query = body.slice(5)
                data = await fetchJson(`https://iqball-api.herokuapp.com/api/yta?url=${query}&apikey=IqbalGanss`, {metode: 'get'})
               if (data.status == false) return reply(`〘404〙lagu tidak di temukan`)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.title}\nDuration : ${data.result.duration}\nSize : ${data.result.size}`
                buffer = await getBuffer(data.result.image)
                lagu = await getBuffer(data.result.mp3)
                iqbl.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                iqbl.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                  return reply(mess.wait)
                break
					case 'joox':
				if (!isRegister) return reply(mess.only.daftarB)
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                iqbl.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                iqbl.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
                case 'ytmp4':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://iqball-api.herokuapp.com/api/ytv?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
				    iqbl.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer2 = await getBuffer(anu.result)
					iqbl.sendMessage(from, buffer2, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'ytmp3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
                reply(mess.wait)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://iqball-api.herokuapp.com/api/yta?url=${args[0]}&apiKey=IqbalGanss`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					iqbl.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					bufferyyy = await getBuffer(anu.result)
					iqbl.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
					case 'wp':
case 'wallpaper':
  if (!isRegister) return reply(mess.only.daftarB)
  iqbl.updatePresence(from, Presence.composing)
  pw = ["wallpaper aestethic",
"wallpaper tumblr",
"wallpaper lucu",
"wallpaper"]
  nk = pw[Math.floor(Math.random() * pw.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  iqbl.sendMessage(from, pok, image, {
quoted: mek, caption: `keren gak ?`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
case 'chatprank':
iqbl.updatePresence(from, Presence.composing)
if (!isRegister) return reply(mess.only.daftarB)
if (args.length < 1) return reply(`*👉🥺👈* Masukan teks\nContoh : ${prefix}chatprank p/unten`)
tels = body.slice(11)
var teks1 = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
iqbl.sendMessage(from, hasil, text, {
  quoted: mek
})
break
case 'babi':
			         // Fix Bug By Iqbal			
                 if (!isRegister) return reply(mess.only.daftarB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                 const gshizuka = await iqbl.getGroupMembersId(groupId)
                 let gmik = gshizuka[Math.floor(Math.random() * gshizuka.length)]
                 const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                 iqbl.sendTextWithMentions(dari, mmkk, id)
                 break
case 'cerpen': // Update By Iqbal			
                 if (!isRegister) return reply(mess.only.daftarB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cerpen?apikey=WEMPYGANSS`, {method: 'get'})
					reply(anu.result.cerpen)
					await limitAdd(sender)
					break
case 'cyberpunk':
  if (!isRegister) return reply(mess.only.daftarB)
  iqbl.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  iqbl.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break
case 'itsme':
  if (!isRegister) return reply(mess.only.daftarB)
  try {
ppimg = await iqbl.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `➻  *Nama* : ${pushname}
  ➻  *Nomor* : ${sender.split("@")[0]}
  ➻  *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  iqbl.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
  
  break
					case 'happymod':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			iqbl.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			return reply('Limit terpakai 1')
			break
            case 'bitly':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               iqbl.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                return reply('Limit terpakai 1')
                break
                case 'husbu':
				if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						iqbl.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					return reply('Limit terpakai 1')
					break
					case 'setprefix':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi :「* ${prefix} *」`)
					break
					case 'ttp':
				if (isBanned) return reply(mess.only.benned)    
					if (args.length < 1) return reply('*Textnya mana om?*')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=Q7MLdUnVSkXgLmQE9liX`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferhgf = fs.readFileSync(rano)
						iqbl.sendMessage(from, bufferhgf, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break 
					case 'triggered':
					case 'ger':
 if (!isRegister) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await iqbl.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                iqbl.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
  case 'reverse':
    if (!isRegister) return reply(mess.only.daftarB)
  if (isLimit(sender)) return reply(mess.limitend)
if (args.length < 1) return iqbl.sendMessage(from, '*☒* Masukan teks', text, {
  quoted: mek
})
var pc = body.slice(9)
try {
data = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${pc}`)
if (!isRegister) return reply(mess.only.daftarB)
hasil = data.result.kata
reply(hasil)
await limitAdd(sender)
} catch {
  reply(mess.ferr)
}
break
case 'setreply':
					if (!isOwner) return reply(mess.only.ownerB)
                    iqbl.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break
				case 'setthumb':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				const messimagethumb = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				const downiamgethumb = await iqbl.downloadMediaMessage(messimagethumb)
				fs.unlinkSync(`./image/bot.jpeg`)
				await sleep(2000)
				fs.writeFileSync(`./image/bot.jpeg`, downiamgethumb)
				reply('Succes')
				break
					case 'bass':                 
       if (!isRegister) return reply(mess.only.daftarB)
                if (isBanned) return reply(mess.only.benned)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					media = await iqbl.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iqbl.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'tupai':
if (!isRegister) return reply(mess.only.daftarB)
                if (isBanned) return reply(mess.only.benned)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iqbl.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iqbl.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
if (!isRegister) return reply(mess.only.daftarB)
                if (isBanned) return reply(mess.only.benned)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iqbl.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iqbl.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'slow':
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await iqbl.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						iqbl.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
					case 'tts':
				   iqbl.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return iqbl.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
                                   if (!isRegister) return reply(mess.only.daftarB)
                                   if (isLimit(sender)) return reply(ind.limitend(pusname))
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return iqbl.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							iqbl.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
                                        await limitAdd(sender)
					break
					case 'donasi':
				case 'donate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					iqbl.sendMessage(from, '*pulsa :* _6281315995628_\n*gopay :* _6281315995628_\n*saweria :* _https://saweria.co/IqbalRizki_', text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Made with Iqbal ❤️", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
					break
					case 'setpp':
	if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await iqbl.downloadAndSaveMediaMessage(mek)
                    await iqbl.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
                    case 'te':
                                       const asu = body.slice(4)
                                       if (iqbl.lenght >= 1) return iqbl.sendText(from, asu)
                                       break
                case 'apakah':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)  
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					iqbl.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
				case 'nilai':
				if (isBanned) return reply(mess.only.benned)    
			if (!isRegister) return reply(mess.only.daftarB)
					rate = body.slice(1)
					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					iqbl.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
					case 'gantengcek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					iqbl.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
					case 'cantikcek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					iqbl.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break
				case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					iqbl.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break
				case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					iqbl.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
				case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					iqbl.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					iqbl.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
					case 'dadu':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					iqbl.sendMessage(from, ule, text, { quoted: mek })
					break
					case 'toxic':
					if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					kapankah = body.slice(1)
					const toxic =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ole = toxic[Math.floor(Math.random() * toxic.length)]
					iqbl.sendMessage(from, ole, text, { quoted: mek })
					break
					case 'totaluser':
				teks = 'Total User :*\n\n'
				for (let i of _registered) {
					teks += `[${toString()}]\`\`\` @${i.split('@')[0]}`
				}
				teks += `\n*Total : ${_registered.length}`
				iqbl.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": _registered} })
				break
					case 'verify':
if (isRegister) return reply('Akun kamu sudah terverfikasi')
const namaUser = `${pushname}`
const umurUser = `${sender}`
const serialUser = createSerial(20)
try {
								ppimg = await iqbl.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
veri = sender
if (isGroup) {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
 Rizbal = `╭─「 *VERIVIKASI* 」\n│ \`\`\`Pendaftaran berhasil dengan\`\`\` \n│ \`\`\`SN: ${serialUser}\`\`\`\n│\n│\`\`\`Pada ${date} ${time}\`\`\`\n│\`\`\`[Nama]: ${pushname}\`\`\`\n│\`\`\`[Nomor]: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`Untuk menggunakan bot\`\`\`\n│\`\`\`silahkan\`\`\`\n│\`\`\`kirim ${prefix}help/menu\`\`\`\n│\`\`\`\n│Total Pengguna: ${_registered.length} Orang\`\`\`\n╰────────────────────`
reply(Rizbal)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
} else {
	addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
 Rizbal = `╭─「 *VERIVIKASI* 」\n│ \`\`\`Pendaftaran berhasil dengan\`\`\` \n│ \`\`\`SN: ${serialUser}\`\`\`\n│\n│\`\`\`Pada ${date} ${time}\`\`\`\n│\`\`\`[Nama]: ${pushname}\`\`\`\n│\`\`\`[Nomor]: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`Untuk menggunakan bot\`\`\`\n│\`\`\`silahkan\`\`\`\n│\`\`\`kirim ${prefix}help/menu\`\`\`\n│\`\`\`\n│Total Pengguna: ${_registered.length} Orang\`\`\`\n╰────────────────────`
 iqbl.sendMessage(from, daftarimg, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Made with Iqbal ❤️", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/bot.jpeg')} } }})
reply(Rizbal)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
}
break
				case 'blackpink':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (args.length < 1) return reply(mess.blank)
					dimen1 = body.slice(11)
					reply(mess.wait)
					tigaa1 = await getBuffer(`https://api.vhtear.com/blackpinkicon?text=${dimen1}&apikey=beli sendiri`, {method: 'get'})
					iqbl.sendMessage(from, tigaa1, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'resetsay':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						break
                    case 'say':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    break
					case 'nulis':
				case 'tulis':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					bal = body.slice(7)
					reply(mess.wait)
					bokber = await getBuffer(`https://iqball-api.herokuapp.com/nulis?text=${bal}&apikey=IqbalGanss`, {method: 'git'})
					iqbl.sendMessage(from, bokber, image, {quoted: mek, caption: 'Udah jadi kak jangan malas lagi ya kak'})
					await limitAdd(sender)
					break
				case 'pupycut':
				 // Fix Bug By Iqbal
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(8)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=WEMPYGANSS&text=${ct}`)
				iqbl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'galaxstyle':
				 // Fix Bug By Iqbal			
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://iqball-api.herokuapp.com/api/ephoto1/galaxystyle?apikey=IqbalGanss&text=${ct}`)
				iqbl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'hologram':
				 // Fix Bug By Iqbal		
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(9)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=WEMPYGANSS&text=${ct}`)
				iqbl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'textbyname':
				 // Fix Bug By Iqbal			
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/textbyname?apikey=WEMPYGANSS&text=${ct}`)
				iqbl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'herrypoter':
				 // Fix Bug By Iqbal		
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=WEMPYGANSS&text=${ct}`)
				iqbl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'greanneon':
				 // Fix Bug By Iqbal			
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/greenneon?apikey=WEMPYGANSS&text=${ct}`)
				iqbl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'metallogo':
				 // Fix Bug By Iqbal			
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=WEMPYGANSS&text=${ct}`)
				iqbl.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'hartatata':
				 // Fix Bug By Iqbal
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(11)
				reply(ind.wait())
				bh = await getBuffer(`https://mhankbarbar.tech/api/htahta?apiKey=Q7MLdUnVSkXgLmQE9liX&text=${bh}`)
				iqbl.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'hartatata2':
				 // Update By iqbal				
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				reply(ind.wait())
				bh = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${bh}&apikey=benbenz`)
				iqbl.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'hartatata3':
				 // Update By iqbal				
                 if (!isRegister) return reply(mess.only.daftarB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				bh = body.slice(12)
				reply(ind.wait())
				bh = await getBuffer(`https://api.vhtear.com/hartatahta?text=${bh}&apikey=c1d162b46e634f389efa1ac715f03d03`)
				iqbl.sendMessage(from, bh, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
					case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(iqbl.chats.get(ido).presences), iqbl.user.jid]
			    iqbl.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
				case 'delete':
					case 'del':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins)return reply(mess.only.admin)
					iqbl.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'toimg':
				case 'stickertoimg':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await iqbl.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						iqbl.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iqbl.downloadAndSaveMediaMessage(encmedia)
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pusname))
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								iqbl.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await iqbl.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								iqbl.sendMessage(from, buff, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self Bot Iqbal_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/iqbal.jpeg')} } }})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
                                                await limitAdd(sender)
						break
						/*********** CMD ***********/
						case 'sayang':
					iqbl.sendMessage(from, 'Apa sayangku? 🥰',MessageType.text, { quoted: mek} )
					break
					/*********** BADWORD MENU ***********/
					case 'addbadword':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isOwner) return reply(ind.ownerb())
                    if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                    case 'nobadword':
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif sebelum nya*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    
//Game
                    case 'tebakgambar':
if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=beli sendiri`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soalImg)
					setTimeout( () => {
					iqbl.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=beli sendiri`, {method: 'get'})
					setTimeout( () => {
					iqbl.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'family100':
				if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=beli sendiri`, {method: 'get'})
					setTimeout( () => {
					iqbl.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'game'://masih error
if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					iqbl.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					iqbl.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
					
//Sound
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
iqbl.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./assets/pale.mp3')
iqbl.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ara':
const aramp3 = fs.readFileSync('./assets/ara.mp3')
iqbl.sendMessage(from, aramp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'terpesona':
const terpesonamp3 = fs.readFileSync('./assets/terpesona.mp3')
iqbl.sendMessage(from, terpesonamp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tapi':
const tapimp3 = fs.readFileSync('./assets/tapi.mp3')
iqbl.sendMessage(from, tapimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'baka':
case 'bodoh':
case 'onichan':
const bakamp3 = fs.readFileSync('./assets/baka.mp3');
iqbl.sendMessage(from, bakamp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./assets/sound.mp3')
iqbl.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./assets/sound1.mp3');
iqbl.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./assets/sound2.mp3');
iqbl.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./assets/sound3.mp3');
iqbl.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./assets/sound4.mp3');
iqbl.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./assets/sound5.mp3');
iqbl.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./assets/sound6.mp3');
iqbl.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./assets/sound7.mp3');
iqbl.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
delapan = fs.readFileSync('./assets/sound8.mp3');
iqbl.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
const sembilan = fs.readFileSync('./assets/sound9.mp3')
iqbl.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
const sepuluh = fs.readFileSync('./assets/sound10.mp3')
iqbl.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
const sebelas = fs.readFileSync('./assets/sound11.mp3')
iqbl.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dsh1':
if (!isDonatur) return reply('Fitur ini khusus donatur')
dsh1mp3 = fs.readFileSync('./assets/dsh1.mp3');
iqbl.sendMessage(from, dsh1mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'dsh2':
if (!isDonatur) return reply('Fitur ini khusus donatur')
dsh2mp3 = fs.readFileSync('./assets/dsh2.mp3');
iqbl.sendMessage(from, dsh2mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break	
case 'dsh3':
if (!isDonatur) return reply('Fitur ini khusus donatur')
dsh3mp3 = fs.readFileSync('./assets/dsh3.mp3');
iqbl.sendMessage(from, dsh3mp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tarik':
tarikmp3 = fs.readFileSync('./assets/tarik.mp3');
iqbl.sendMessage(from, tarikmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'asalamualaikum':
const asalamualaikummp3 = fs.readFileSync('./assets/asalamualaikum.mp3')
iqbl.sendMessage(from, asalamualaikummp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
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
