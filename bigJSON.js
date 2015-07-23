var fs = require('fs');
var sas = require('../sas');

var path = '../package.json';

var start = 0;
var len = 100;
var max = 8 * 1024 * 0.1;
var encoding = 'utf-8';


var j_tpl = {
  objStart: '{',
  objEnd: '}',
  arrStart: '[',
  arrEnd: ']',
  keyStart: '"',
  is: ':'
}
var result = [];

var startTmp = ['['];
var endTmp = [']'];

var dirReg = /\{|\[/g;
var dirReg = /\[/g;

var teststr = fs.readFileSync('./test').toString()
teststr = '['
console.log(teststr.search(dirReg));


///////////////////////////////////////////////////////

/*fs.stat(path,function(err,stat){
  console.log(stat);
})*/

/*fs.createReadStream(path, {
  start: 0,
  end: start + len,
  encoding: 'utf-8'
}).on('data', function(buffer) {
  var i = buffer.search(dirReg);
  if (i !== -1) {
    console.log(buffer[i]);

    startTmp.push(buffer[i]);
  } else {

  }
})

var firstTask = function(cb) {
  fs.stat(path, function(err, stat) {
    if (err) {
      return cb("$STOP", err);
    }
    cb(stat.size);
  })
}

var startTask = function(cb) {

  fs.createReadStream(path, {
    start: 0,
    end: start + len,
    encoding: 'utf-8'
  }).on('data', function(buffer) {

    var _len = startTmp.length - 1;

    if (_len !== -1 && startTmp[_len] !== '"') {
      var dirType = buffer.search(dirReg);

      var objIndex = buffer.indexOf(j_tpl.objStart);
      var arrIndex = buffer.indexOf(j_tpl.arrStart);
      if (dirType !== -1) {
        startTmp.push(buffer[dirType]);

        if(endTmp[0 ]){

        }
        if (buffer[dirType] === j_tpl.objStart) {
          t[i] = {};
        } else if (buffer[dirType] === j_tpl.arrStart) {
          t[i] = [];
        } 
      }

    }

    var objIndex = buffer.indexOf(j_tpl.objStart);
    var arrIndex = buffer.indexOf(j_tpl.arrStart);
    //var keyIndex = buffer.indexOf(j_tpl.keyStart);


    if (dirType)

      if (objIndex !== -1) {
        if (objIndex < arrIndex && objIndex < keyIndex) {

        }
      }


    if (keyIndex !== -1) {
      if (keyIndex < objIndex && keyIndex < arrIndex) {

      }
    }



    if (i !== -1) {
      console.log(buffer[i]);
      startTmp.push(buffer[i]);
    } else {

    }
  })

}*/