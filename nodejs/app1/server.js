var http = require('http');
var url = require('url');

function start(route, handle){
  function onRequest(req, rsp){
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received");

    route(handle, pathname);

    rsp.writeHead(200, {"Content-Type": "text/plain"});
    console.log("request received");
    rsp.write("Hello node world!!!");
    rsp.end();
  };

  http.createServer(onRequest).listen(8888);
  console.log("Server has started");
}

exports.start = start;
