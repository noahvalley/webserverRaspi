'use strict';

var express = require('express');
var vhost = require('vhost')

// vhost apps
var frontend = require('../festival-jups/servers/frontend');
var backend = require('../festival-jups/servers/backend');
var api = require('../festival-jups/servers/api');

//start server
var server = express();

// apply the vhost middleware
server.use(vhost('festival-jups.ch', frontend));
server.use(vhost('www.festival-jups.ch', frontend));
server.use(vhost('admin.festival-jups.ch', backend));
server.use(vhost('api.festival-jups.ch', api));
server.use((req, res, next) => {
  res.sendStatus(404);
});

// start server
server.listen(80);