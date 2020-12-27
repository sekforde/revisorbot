module.exports = function (req, res, next) {
  console.log("Time: ", Date.now());
  console.log("URL:  ", req.url);
  next();
};
