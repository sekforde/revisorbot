const axios = require("axios");

const token = process.env.BOT_TOKEN_DEV;
const baseUrl = `https://api.telegram.org/bot${token}`;

class TelegramAPI {
  post(path, data) {
    const url = `${baseUrl}${path}`;
    console.log("post to", url);
    return axios.post(url, data);
  }
  sendMessage(chat_id, text) {
    console.log("sendMessage to", chat_id);
    console.log(text);
    return this.post("/sendMessage", {
      chat_id,
      text
    });
  }
}

module.exports = TelegramAPI;
