var exec = require('child_process').exec;

function start(rsp){
  console.log('RequestHandler - start was called');

  exec('find /', {timeout: 10000, maxBuffer: 20000*1024}, function(error, sdout, stderr){
    rsp.writeHead(200,{'Content-Type': 'text/plain'});
    rsp.write(sdout);
    rsp.end();
  });
}

function upload(rsp){
  console.log('RequestHandler - upload was called');

  rsp.writeHead(200,{'Content-Type': 'text/plain'});
  rsp.write('hello upload');
  rsp.end();
}

exports.start = start;
exports.upload = upload;
