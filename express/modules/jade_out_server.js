var fs = require('fs');
var jade = require('jade');
var crypto = require('crypto');

var dir = __dirname.indexOf('node_modules');
dir = dir > 0 ? __dirname.substr(0,dir-1) : __dirname;

var jade_opts = {
  data:data.data,
  dwT:{},
  cache:true,
  Session:{}
}

module.exports = function(req, res, next) {
    var path = dir + req.path;
    var cache_key = path + ':client';
    if(!jade.cache[cache_key]){
      jade.compileFileClient(path, data);
    }

  }
}