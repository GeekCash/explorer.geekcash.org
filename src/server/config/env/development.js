// Invoke 'strict' JavaScript mode
"use strict";

// Set the 'development' environment configuration object
module.exports = {
  www: {
    port: 8080,
    host: 'localhost'    
  },
  db: "mongodb://localhost/geek",
  secret: "759776f2c5a009079aec1bf3bd0fa844c5df42bca549335214229cfa8d5f5260",
 
  site: {
    title: 'geek',
    description: 'geek'
 }
};
