if(process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: 'mongodb://localhost/MEANSTACK'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/MEANSTACK'}
  }