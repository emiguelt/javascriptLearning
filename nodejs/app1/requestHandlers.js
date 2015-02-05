function start(){
  console.log('RequestHandler - start was called');
}

function upload(){
  console.log('RequestHandler - upload was called');
}

exports.start = start;
exports.upload = upload;
