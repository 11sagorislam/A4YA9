module.exports.config = {
  name: "autotimer",
  version: "2.0",
  role: 0,
  author: "Dipto",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const arrayData = {
    "12:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 12 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "01:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 01:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "02:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 02:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "03:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 03:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "04:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 04:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "05:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 05:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "06:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 06:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "07:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 07:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "08:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 08:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "09:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 09:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "10:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 10:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "11:00:00 AM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 11:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "12:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 12:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "01:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 01:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "02:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 02:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "03:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 03:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "04:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 04:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "05:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 05:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "06:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 06:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "07:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 07:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "08:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 08:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "09:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 09:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "10:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 10:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    },
    "11:00:00 PM": {
      message: '✿︎𝙷𝙴𝚈 𝙱𝙱𝙴 𝙽𝙾𝚆 𝚃𝙸𝙼𝙴 11:00 𝙰𝙼 𝙽𝙾𝚃𝙸 𝙵𝚁𝙾𝙼 ✵'
    }
  };

  const checkTimeAndSendMessage = () => {
    const currentTime = new Date(Date.now() + 25200000 - 3600000)
      .toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).split(/,/).pop().trim();

    const messageData = arrayData[currentTime];

    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async(threadID, index) => {
        api.sendMessage({ body: messageData.message/*, attachment: await global.utils.getStreamFromURL("https://telegra.ph/file/505d213c154f978c81e6d.png") */}, threadID);
      });
    }
    const now = new Date();
    const delay = 1200 - now.getMilliseconds(); 
    setTimeout(checkTimeAndSendMessage, delay); 
  };
  checkTimeAndSendMessage();
};

module.exports.onStart = () => {};
