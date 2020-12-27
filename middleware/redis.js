require("dotenv").config();
const redis = require("redis");
const redisClient = redis.createClient({
  password: process.env.TELEGRAM_SESSION_PASSWORD
});

const rSet = function (key, value) {
  const v = JSON.stringify(value);
  return new Promise((resolve, reject) => {
    redisClient.set(key, v, function (err) {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

const rGet = function (key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
};

module.exports = function (req, res, next) {
  req.rSet = rSet;
  req.rGet = rGet;
  next();
};
