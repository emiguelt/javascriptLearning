var queryString = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

function start(rsp){
  console.log('RequestHandler - start was called');

  var body = '<html>' +
    '<head>' + 
      '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post" enctype="multipart/form-data">'+
      '<input type="file" name="upload1" multiple="multiple"/>' + 
      '<input type="submit" value="Upload file"/>'+
     '</form>'+
    '</body>'+
    '</html>';

  rsp.writeHead(200,{'Content-Type': 'text/html'});
  rsp.write(body);
  rsp.end();
}

function upload(rsp, request){
  console.log('RequestHandler - upload was called');

  var form = new formidable.IncomingForm();
  console.log("about to parse");
  console.log(request);

  form.parse(request, function(error, fields, files){
    if(error){
      console.log(error);
    }
    console.log(fields);
    console.log(files);
    console.log("parsing done");

    fs.rename(files.upload1.path, "/tmp/test.png", function(error){
      if(error){
        fs.unlink("/tmp/test.png");
        fs.rename(files.upload1.path, "/tmp/test.png");
      }
    })
  });

  rsp.writeHead(200,{'Content-Type': 'text/html'});
  rsp.write("received image: <br/>");
  rsp.write("<img src='/show'/>");
  rsp.end();
}

function show(rsp){
  console.log('Request handler "show" was called');

  fs.readFile('/tmp/image.png', 'binary', function(error, file){
    if(error){
      rsp.writeHead(500, {'Content-Type': 'text/plain'});
      rsp.write(error + '\n');
      rsp.end();
    }else{
      rsp.writeHead(200, {'Content-Type': 'image/png'});
      rsp.write(file, "binary");
      rsp.end();
    }
  });

}

exports.start = start;
exports.upload = upload;
exports.show = show;
