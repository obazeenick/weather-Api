const errorHandler = (err, req, res, next) => {
    console.error(err);
  
    // Default error if no other error code was found.
    res.status(err.status || 500).json({
      status: 'error',
      message: err.message || 'Internal server error'
    });
  };
  
  export default errorHandler;
  