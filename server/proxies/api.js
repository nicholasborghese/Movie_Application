'use strict';

const proxyPath = '/api';

module.exports = function(app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  let proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res){
    // include root path in proxied request
    proxy.web(req, res, { 
      changeOrigin: true,
      target: {
        protocol: 'http',
        host: 'www.omdbapi.com'
      } 
    });
  });
};
