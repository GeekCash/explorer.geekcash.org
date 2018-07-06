"use strict";

require('./cluster')('app', () => {

  var Hapi = require("hapi"),
    config = require("./config"),
    mongoose = require("mongoose");

  const server = Hapi.server(Object.assign(config.www, {
    router: {
      isCaseSensitive: true,
      stripTrailingSlash: true
    }
  }));

  (async () => {
    await require("./register")(server);

    server.route([].concat(require('./router/www')));

    await server.start();

    //global.db = await mongoose.connect(config.db, { promiseLibrary: global.Promise });
    global.db = mongoose.connect(config.db);

    console.log("Worker %s started and running at: %s", process.pid, server.info.uri);
  })();

});