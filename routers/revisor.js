const express = require("express");
const RevisorService = require("./RevisorService");
const router = express.Router();

const service = new RevisorService();

router.post("/new-message", async function (req, res) {
  try {
    await service.newMessage(req);
    res.end("ok");
  } catch (err) {
    res.end(`Error: ${err}`);
  }
});

module.exports = router;
