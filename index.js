require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const redisStore = require("./middleware/redis");
const session = require("./middleware/session");
const revisorRoutes = require("./routers/revisor");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(redisStore);
app.use(session);
app.use("/", revisorRoutes);

app.listen(process.env.PORT, function () {
  console.log(`Bot Server Listening on port ${process.env.PORT}`);
});
