// error 문구 console.log()
module.exports = (req, error) => {
  console.log(`METHOD: ${req.method}, URL: ${req.originalUrl}, Error: ${error}`);
}