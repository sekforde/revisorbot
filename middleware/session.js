module.exports = async function (req, res, next) {
  const { message } = req.body;
  if (message && message.chat) {
    const chatId = message.chat.id;
    const data = await req.rGet(chatId);
    req.chat = {
      id: message.chat.id,
      fullName: `${message.chat.first_name} ${message.chat.last_name}`,
      data
    };
    // console.log(req.chat);
    next();
  }
};
