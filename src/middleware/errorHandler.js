module.exports = (err, req, res, next) => {
  console.error(err && err.stack ? err.stack : err);
  // Basic error shaping
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });
};
