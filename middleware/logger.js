// This middleware logs every request (just for info!)

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`); // shows method and route like GET /drivers
    next(); // keep going to the next function
  };
  
  module.exports = logger;
  