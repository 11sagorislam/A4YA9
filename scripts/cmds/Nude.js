module.exports = {
  config: {
    name: "nude",
    role: 0,
    author: "Romim",
    countDown: 5,
    longDescription: "Randomvideo",
    category: "randomvideo",
    guide:{
      en: "{pn} <video>"
    } 
  },
   onStart: async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var romim = ["https://a6-video-api.onrender.com/images/sex","https://a6-video-api.onrender.com/images/nude"]
  var romim1 = romim[Math.floor(Math.random() * romim.length)]
  axios.get(romim1).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let romim2 = res.data.romim;
  let callback = function () {
          api.sendMessage({
            body: `𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙰𝙿𝙸 𝚂𝙴𝙽𝙳 𝙽𝚄𝙳𝙴 𝙿𝙸𝙲\n\n｢ 𝚁𝙾𝙼𝙸𝙼 𝙰𝙷𝙼𝙴𝙳 ｣`,
            attachment: fs.createReadStream(__dirname + `/cache/Romim.mp3`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/Romim.mp3`), event.messageID);
        }
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/Romim.mp3`)).on("close", callback);
      })
   } 
}
