module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by A6
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `☢︎︎🂱𝙷𝙴𝙻𝙻𝙾 𝙸'𝙼 𝙰𝚁𝚈𝙰𝙽 ♕︎\n𝙼𝚈 𝙿𝚁𝙴𝙵𝙸𝚇 [ . ]\n𝙼𝚈 𝙾𝚆𝙽𝙴𝚁 𝙰𝚁𝚈𝙰𝙽 𝚁𝙰𝙹❁☦︎ \n 𝚃𝚈𝙿𝙴 ☞︎︎︎ 𝙷𝙴𝙻𝙿 𝚃𝙾 𝚅𝙸𝙴𝚆 𝙰𝚁𝚈𝙰𝙽 𝙰𝙻𝙻 𝙲𝙼𝙳𝚂 ☔︎🂱\n␈𝚃𝙽𝚇 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 𝙰𝚁𝚈𝙰𝙽 𒊹︎︎︎`,
 attachment: await global.utils.getStreamFromURL("http://g-v1.onrender.com/8PYFM1iJ0.jpg")
 });
 }
 }
}
