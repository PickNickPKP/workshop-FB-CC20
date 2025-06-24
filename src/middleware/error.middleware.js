export default (err, req, res, next) => {
  console.error(err);
  err.customMsg = "CC20 drag to hell";
  err.statusCode = 500;
  res.status(500).json({
    errorMsg: err.message,
    errorName: err.name,
    customMsg: err.customMsg,
    statusCode: err.statusCode,
  });
}