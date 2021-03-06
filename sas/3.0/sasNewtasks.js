var sas = require('../sas-debug2');
var fs = require('fs');
var dir = __dirname + '/data/root' + Date.now();//根目录名字: root+当前时间

function _mkTree(data) { //iterator


  return function(t) {
    var fspath = dir + '/' + t.fspath().join('');
    console.log(t.fspath())
    console.log(fspath)
    if (t.index === 0) { //根据this 的index 判定是否为目录
      fs.mkdir(fspath, 777, function(err, result) {
        if (err) {
          //return cb('$STOP');
        }
        t.go();
      });
    } else { //创建文件并写入。
      fs.writeFile(fspath, data, function(err) {
        if (err) {
          return t.go();
        }
        t.go();
      });
    }
  }
}

var plan = [
  null, {
    '/1': [null, {
      '/1-1': 'hello!1-1',
      '/1-2': 'hello!1-2',
      '/1-3': 'hello!1-3'
    }],
    '/2': [null, {
      '/2-1': 'hello!2-1',
      '/2-2': 'hello!2-2',
      '/2-3': 'hello!2-3'
    }],
    '/3': [null, {
      '/3-1': 'hello!3-1',
      '/3-2': 'hello!3-2',
      '/3-3': 'hello!3-3'
    }]
  }
];
//console.log('message');
var time = Date.now();
sas(plan, {
  iterator: _mkTree
});