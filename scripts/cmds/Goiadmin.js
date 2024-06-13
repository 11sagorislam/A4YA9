module.exports.config = {
  name: "auto_reply",
  version: "1.0.0-beta-fixbyDungUwU",
  role: 0,
  author: "ZyrosGenZ-fixbyDungUwU",
  shortDescription: "BOT Send Reply If Admin Mentioned",
  longDescription: "BOT Send Reply If Admin Mentioned",
  category: "Extra - Files",
  usePrefix: false, // Changed from string to boolean
  guide: "Mention Admin",
  countdown: 1
};

module.exports.onStart = async function ({ event, api }) {
  if (event.senderID !== "100071009500533" && event.senderID !== "") {
    var aid = ["100071009500533", ""];
    for (const id of aid) {
      if (Object.keys(event.mentions).includes(id)) {
        var msg = [
          "What happened brother, why are you calling so much?..🙄","yea brother,what happened?"
        ];
        return api.sendMessage({ body: msg[Math.floor(Math.random() * msg.length)] }, event.threadID, event.messageID);
      }
    }
  }
};
