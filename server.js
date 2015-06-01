// Require Modules
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs')

// Object of Mime Types
var mimeTypes = {
    "html" : "text/html",
    "jpeg" : "image/jpeg",
    "jpg" : "image/jpeg",
    "png" : "image/png",
    "js" : "text/javascript",
    "css" : "text/css"
};

// Create Server
http.createServer(function(){
    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(),unescape(uri))
    console.log();
});

