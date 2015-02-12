var queryString = require('querystring');

function start(rsp, postData){
  console.log('RequestHandler - start was called');

  var body = '<html>' +
    '<head>' + 
      '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
      '<textarea name="text" rows="20" cols="60"></textarea>'+
      '<input type="submit" value="Submit-text"/>'+
     '</form>'+
    '</body>'+
    '</html>';

  rsp.writeHead(200,{'Content-Type': 'text/html'});
  rsp.write(body);
  rsp.end();
}

function upload(rsp, postData){
  console.log('RequestHandler - upload was called');

  rsp.writeHead(200,{'Content-Type': 'text/plain'});
  rsp.write('You have sent: ' +  queryString.parse(postData).text);
  rsp.end();
}

exports.start = start;
exports.upload = upload;
