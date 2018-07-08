// Wrapper for catching async / await errors
exports.catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

// If a route isn't found, mark it 404 and pass it along to the next handler
exports.notFound = (req, res, next) => {
  const err = new Error('Endpoint Not Found');
  err.status = 404;
  next(err);
};

// Handle development errors (i.e. show additional information for debugging)
exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || '';
  const errorDetails = {
    message: err.message,
    status: err.status,
    error: err,
    stack: err.stack
  };
  res.status(err.status || 500);
  res.send(errorDetails);
  return;
};

// Handle production errors (i.e. avoid showing stack traces)
exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
  return;
};