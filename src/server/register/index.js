// Invoke 'strict' JavaScript mode
"use strict";

// http://www.bigeng.io/oauth-authentication-and-session-management-in/
// https://github.com/adambrault/hapi-bell-twitter-cookie/blob/master/index.js

// Load the module dependencies

var config = require("../config");

module.exports = async (server, options) => {
  await server.register([
    { plugin: require("inert") },
    { plugin: require("hapi-auth-cookie") },
    { plugin: require("bell") },
    // { plugin: require("hapi-bodyparser") },
  ]);

}
