export default (err, req, res, next) => {
  const status = 500;
  res.status(status).json({ success: false, error: "Server Error" });
};
