// This catches any errors and sends a friendly message instead of crashing

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // print the error
    res.status(500).send('Something went wrong!'); // friendly message to user
  };
  
  module.exports = errorHandler;
  