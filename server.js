#!/bin/env node

/**
 * Module dependencies.
 */

/* GLOBAL VARIABLES */
GLOBAL.config = require('./config');

// initial variable and dependencies
var SocketServer
 ,  App = require('./app')
 ,  config = require('./config')
 ,  debug = require('debug')('marketplace:server')
 ,  http = require('http');
var Server = new App();

// start the server
Server.start();
        
