const fs = require("fs-extra");

module.exports = {
  config: {
    name: "0bot",
    version: "1.0",
    role: 1,
    author: "Romim",
    description: "goat goibot",
    category: "noprefix",
    guide: "noprefix",
    coolDown: 5
  },
  onChat: async function ({ api, event, args, Threads, Users }) {
    var { threadID, messageID, reason } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
    var idgr = `${event.threadID}`;
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);

    var tl = [
      "বেশি bot Bot করলে leave নিবো কিন্তু😒😒 ",
      "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺",
      "আমি আবাল দের সাথে কথা বলি না,ok😒",
      "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈",
      "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 ",
      "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑",
      "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?",
      "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬",
      "I love you janu🥰",
      "আরে Bolo আমার জান ,কেমন আছো?😚 ",
      "Bot বলে অসম্মান করিস,😰😿",
      "Hop beda😾,Boss বল boss😼",
      "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু",
      "Bot না , জানু বল জানু 😘 ",
      "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋",
      "বোকাচোদা এতো ডাকিস কেন🤬",
      "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 ",
      "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒",
      "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘",
      "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣",
      "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 ",
      "আমাকে ডেকো না,আমি ব্যাস্ত আছি",
      "কি হলো , মিস্টেক করচ্ছিস নাকি🤣",
      "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏",
      "কালকে দেখা করিস তো একটু 😈",
      "হা বলো, শুনছি আমি 😏",
      "আর কত বার ডাকবি ,শুনছি তো",
      "হুম বলো কি বলবে😒",
      "বলো কি করতে পারি তোমার জন্য",
      "হুম  জান বলো🐸 😎",
      "Bot না জানু,বলো 😌",
      "বলো জানু 🌚",
      "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒"
    ];
    var rand = tl[Math.floor(Math.random() * tl.length)];

    if ((event.body.toLowerCase() == "কি") || (event.body.toLowerCase() == "ki")) {
      return api.sendMessage(
        "╭──────────────────╮                   কিছু বুঝো না 😒 খালি কি কি কর 😪 চিপায় চলো বুজাই দিতাছি 😾৷   ╰──────────────────╯",
        threadID
      );
    }

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "!!!?")) {
      return api.sendMessage(
        "╭──────────────────╮                   কিস দিও না জান 🥀 আমার লজ্জা লাগে তো ╰──────────────────╯",
        threadID
      );
    }

    if ((event.body.toLowerCase() == "👍//") || (event.body.toLowerCase() == "lik888e")) {
      return api.sendMessage(
        "╭──────────────────╮                   কিরে বোকাচোদা গুরুপে রমিমের অনুমতি ছাড়া লাইক চোদাও কেন 🐸 থাপ্পড় দিয়ে দাত ফলাই দিমু 🦷   ╰──────────────────╯",
        threadID
      );
    }

    if ((event.body.toLowerCase() == "@Aris E") || (event.body.toLowerCase() == "Romim")) {
      return api.sendMessage("bolo sunsi", threadID);
    }

    if (
      (event.body.toLowerCase() == "@Ariyan") ||
      (event.body.toLowerCase() == "@tiny") ||
      (event.body.toLowerCase() == "hlw777") ||
      (event.body.toLowerCase() == "hel777o!")
    ) {
      return api.sendMessage("Hum sunsi 😒   ", threadID);
    }

    if ((event.body.toLowerCase() == "oi") || (event.body.toLowerCase() == "jan")) {
      return api.sendMessage(
        "╭──────────────────╮                     এই তো জান আমি 🙃 কি বলবা বলো 🐸 বেশি দরকার হলে রমিমের ইনবক্সে জাও 😚 ╰──────────────────╯",
        threadID
      );
    }

    if ((event.body.toLowerCase() == "l/") || (event.body.toLowerCase() == "leg8888end")) {
      return api.sendMessage(
        "╭──────────────────╮                    কিরে বোকাচুদা নিজেরে কি লিজেন্ড মনে করস নাকি 😂  ╰──────────────────╯",
        threadID
      );
    }

    if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "dud morning")) {
      return api.sendMessage("হাই  প্রিয় শুভ সকাল 🥰 তোমার দিনটি ভালো হোক ❤️", threadID);
    }

    if ((event.body.toLowerCase() == "না") || (event.body.toLowerCase() == "na")) {
      return api.sendMessage(
        "╭──────────────────╮                    বেশি না না করস কেন 🐸👉  ╰──────────────────╯",
        threadID
      );
    }

    if (
      (event.body.toLowerCase() == "romim") ||
      (event.body.toLowerCase() == "রমিম") ||
      (event.body.toLowerCase() == "admin") ||
      (event.body.toLowerCase() == "bow-owner")
    ) {
      return api.sendMessage(
        "╭──────────────────╮                    আমার বস রমিম কে ডাকছো কেনো 🙈 GF দিবা নাকি 🤔  ╰──────────────────╯",
        threadID
      );
    }

    if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
      return api.sendMessage(
        "‎[𝐎𝐖𝐍𝐄𝐑:☞𝗥𝗢𝗠𝗜𝗠(✷‿✷)☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐑𝟒𝐌!𝐌.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/Sexy jinis\nContact Him on WhatsApp :- +880182*5****8",
        threadID
      );
    }

    if ((event.body.toLowerCase() == "ki koro") || (event.body.toLowerCase() == "কি করো")) {
      return api.sendMessage(
        "╭──────────────────╮                    এইতো GF  খুজতাছি 😏 তুমি কি করছো গো 😀 ╰──────────────────╯",
        threadID
      );
    }

    if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot er admin")) {
      return api.sendMessage(
        "╭──────────────────╮                    এইজে নাও বসের আইডি লিংক - https://www.facebook.com/Aris E ╰──────────────────╯",
        threadID
      );
    }

    if ((event.body.toLowerCase() == "kamon aco") || (event.body.toLowerCase() == "kemon acen")) {
      return api.sendMessage(
        "╭──────────────────╮                      জি আলহামদুলিল্লাহ ভালো 🥰 আপনি?   ╰──────────────────╯",
        threadID
      );
    }

    return api.sendMessage(rand, threadID);
  },
  onStart: async function ({ api, event, args, Threads, Users }) { }
};
