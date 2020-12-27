require("dotenv").config();
const axios = require("axios");

const main = async () => {
  const token = process.env.BOT_TOKEN_DEV;
  const webhookUrl = "https://44f6c2fd5a3e.ngrok.io";
  const telegramUrl = `https://api.telegram.org/bot${token}/setWebhook`;
  const data = `url=${webhookUrl}/new-message`;

  const response = await axios.post(telegramUrl, data);

  console.log(response);
};

main().catch(console.error);
