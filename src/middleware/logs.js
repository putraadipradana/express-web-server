const logRequest = (req, res, next) => {
  console.log("Terjadi request di PATH :", req.path);
  next();
};

module.exports = logRequest;
