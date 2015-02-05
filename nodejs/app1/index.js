var server = require("./server");
var router = require("./router");
var handler = require('./requestHandlers');

var handle = {};
handle['/'] = handler.start
handle['/start'] = handler.start
handle['/upload'] = handler.upload

server.start(router.route, handle);
