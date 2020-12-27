const TelegramAPI = require("./Telegram");
const cards = require("../data/macro.json");

class RevisorServce {
  constructor() {
    this.api = new TelegramAPI();
  }
  wait(delay = 2000) {
    return new Promise(resolve => {
      setTimeout(resolve, delay);
    });
  }
  async newMessage(req) {
    const { message } = req.body;
    if (!message) {
      return;
    }

    const chatId = message.chat.id;
    const incomingText = message.text.toLowerCase();
    let outgoingText = "";

    if (incomingText === "flash") {
      console.log("flash", chatId);
      const index = Math.floor(Math.random() * cards.length);
      const card = cards[index];
      await this.api.sendMessage(chatId, card.term);
      await this.wait(500);
      await this.api.sendMessage(chatId, "see if you can guess");
      req.rSet(chatId, card);
    }

    if (incomingText === "reveal") {
      console.log("reveal", chatId);
      console.log(req.chat);
      if (req.chat.data) {
        const text = req.chat.data.answers.join("\n");
        await this.api.sendMessage(chatId, text);
      }
    }
    return;
  }
}

module.exports = RevisorServce;
