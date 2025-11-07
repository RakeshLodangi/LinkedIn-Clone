export const success = (res, status = 200, data = null) => {
  return res.status(status).json({ success: true, data });
};

export const fail = (res, status = 400, error = "Bad Request") => {
  return res.status(status).json({ success: false, error });
};
