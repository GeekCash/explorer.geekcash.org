var _ = require("mix-utils"),
  fs = require("fs");

  
module.exports = [

  {
    method: 'GET',
    path: '/www/{file*}',

    handler: {
      directory: {
        path: './www'
      }
    }
  },

  {
    method: "GET",
    path: "/{p*}",
    options: {
      auth: false
    },
    handler: async (request, h) => {
        return h.file("./www/index.html");
    }
  }
];

