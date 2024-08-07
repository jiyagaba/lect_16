const fs = require('fs');
const { Createerror } = require('./errorhandlingmiddleware');
module.exports = function loggerMiddleware(req, res, next) {
  const log = `${new Date().getTime()} ${req.method} - ${req.url}`;
  console.log(log);
  req.log = log;

  fs.writeFile("logger-txt", log + "\n", { flag: "a" }, (err) => {
    if (err) {
      next(Createerror(500,"Error Ocurred while maintaing logs"));
    } else {
      next();
    }
  });
};
