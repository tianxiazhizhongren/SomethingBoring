var fs = require('fs');
/*var CRLF = fs.readFileSync('./CRLF').toString();
var LF = fs.readFileSync('./LF').toString();*/

//程序入口
function jade_out(text) {
  var test = new jade_out.Min(text);
}

//静态
jade_out.LINE_END = /\n|\r\n/; //换行符
jade_out._lineArr = function(text) {
  return text.split(this.LINE_END);
}

//如果行第一个字符等于 tab 或 空格
jade_out._isIndent = function(str) {
    return str === '\t' || str === ' ';
  }
  //静态end

//动态
jade_out.Min = function(text) {
  this.text = text;
  this._lineArr = jade_out._lineArr(text);
  this._indent; //缩进是空格还是tab
  this._indentArr = [{len:0}];
  this.parse();
}

//解析
jade_out.Min.prototype.parse = function() {
  for (var i = 0, len = this._lineArr.length; i < len; i++) {
    var line = this._lineArr[i],
      lineLen = line.length;

    var indentIndex = this._indentCount(line, lineLen);

    this._lineArr[i] = this._domCreate(line.substr(indentIndex), lineLen-indentIndex, indentIndex);
  }
}

//缩进计数,返回不是缩进的第一个字符的位置
jade_out.Min.prototype._indentCount = function(line, lineLen) {
  if (jade_out._isIndent(line[0])) {
    if (this._indent === undefined) {
      this._indent = line[0];
    }
    var i = 0;
    for (; i < lineLen; i++) {
      if (line[i] !== this._indent) {
        break;
      }
    }
    if (jade_out._isIndent(line[i])) {
      throw new Error('Invalid indentation, you can use tabs or spaces but not both');
    } else {
      return i;
    }
  } else {
    return 0;
  }
}


jade_out.Min.prototype._domCreate = function(line, lineLen, indentIndex) {

  var  indentArrLast = this._indentArr[this._indentArr.length - 1],
    lineHead = line.search(/\(| /);
    lineLast = line[lineLen - 1];
    console.log(lineHead)
/*    if(lineLast !=='.'){
      switch(lineFirst){
        case '#':
      }
    }*/

  if (indentIndex > indentArrLast.len) {
    this._indentArr.push({
      len: indentIndex
    });
  } else if (indentIndex < indentArrLast.len) {
    this._indentArr.pop();
  } else {

  }
  return line;
  console.log('indentArrLast=' + indentArrLast.len + ' indentIndex=' + indentIndex);
}

//######### nodejs 绑定 ######### 
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = jade_out;
}