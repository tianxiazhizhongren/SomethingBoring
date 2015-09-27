var fs = require('fs');
/*var CRLF = fs.readFileSync('./CRLF').toString();
var LF = fs.readFileSync('./LF').toString();*/

//程序入口
function jade_out(text, opts) {
  opts = opts || {};
  var test = new jade_out.Min(text, opts);
}

//静态

jade_out.LINE_END = /\n|\r\n/; //换行符
jade_out.EQ = /\(| |=/; //换行符

jade_out.DOCTYPE = {
    'default': '<!DOCTYPE html>'
  , 'xml': '<?xml version="1.0" encoding="utf-8" ?>'
  , 'transitional': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
  , 'strict': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
  , 'frameset': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'
  , '1.1': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">'
  , 'basic': '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">'
  , 'mobile': '<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">'
}

jade_out._lineArr = function(text) {
  return text.split(this.LINE_END);
}

//如果行第一个字符等于 tab 或 空格
jade_out._isIndent = function(str) {
    return str === '\t' || str === ' ';
}

jade_out.firstWord = function(str) {
    return str.search(this.EQ);
}

jade_out.firstChar = function(line){
  switch(line[0]){
    case '.':
    case '#':
      return line = 'div'+line;
      break;
    case '-':
      break;
    case '|':
      return line.substr(1);
      break;
    case '=':
      break;
    case '!':
      break;
    case '<':
      return line;
      break;

  }
}

jade_out._data_tag = [
  'if',
  'else',
  'else if',
  'when',
  'case',
  ''
  'each'

]
  //静态end

//动态
jade_out.Min = function(text, opts) {
  this._text = text;
  this._glo = opts || {};
  this.pretty = '';
  this._lineArr = jade_out._lineArr(text);
  this._indent; //缩进是空格还是tab
  this._indentArr = [{
    indentLen: -1
  }];
  this._isCompile = false;
  
  this._closure = ['function(){','','}'];
  this.parse();

  //console.log(this._lineArr.join('\n'))

  var html = this._lineArr.join(this.pretty);
  for (var i = 1, len = this._indentArr.length; i < len; i++) {
    html += this._indentArr.pop().domEnd;
  }
  return html;

}



jade_out.Min.prototype.fn = function(){
}

//解析
jade_out.Min.prototype.parse = function() {
  for (var i = 0, len = this._lineArr.length; i < len; i++) {
    var line = this._lineArr[i],
      lineLen = line.length;

    var indentIndex = this._indentCount(line, lineLen);
    this._lineArr[i] = this._domCreate(line.substr(indentIndex), lineLen - indentIndex, indentIndex);
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
      throw new Error('Invalid indentation, you can use tabs or spaces but not both\nat line '+i);
    } else {
      return i;
    }
  } else {
    return 0;
  }
}


jade_out.Min.prototype._domCreate = function(line, lineLen, indentIndex) {
  var lastIndex = this._indentArr.length - 1;
  var indentArrLast = this._indentArr[lastIndex];
  var lineHead = line.search(jade_out.EQ);
  var lineStart = line[0];
  var lineLast = line[lineLen - 1];

  if (indentArrLast.lastPoint && indentIndex > indentArrLast.indentLen) {
    console.log(line);
    return line;
  }

  var prevInfo = {
    indentLen: indentIndex,
    domEnd: ''
  }
  if (lineLast === '.') {
    prevInfo.lastPoint = true;
  }

  //如果缩进小于上一行缩进

  if (indentIndex > indentArrLast.indentLen) {
    this._indentArr.push(prevInfo);

  } else {

    line = this._domEnd(indentIndex, lastIndex, line, prevInfo);

    /*    line = line + indentArrLast.domEnd;
        this._indentArr[lastIndex] = prevInfo;*/
  }
  return line;
}

jade_out.Min.prototype._domEnd = function(indentIndex, lastIndex, line, prevInfo) {
  var indentArrLast = this._indentArr[lastIndex];
  while (indentIndex < indentArrLast.indentLen) {
    line = line + indentArrLast.domEnd;
    this._indentArr.pop();
    lastIndex = lastIndex - 1;
    indentArrLast = this._indentArr[lastIndex];
  }
  line = line + indentArrLast.domEnd;
  this._indentArr[lastIndex] = prevInfo;
  return line;
}

jade_out.Min.prototype._eval = function(){
  this._closure[1] = this._text;
  eval(this._closure.join(''));
  
}
//######### nodejs 绑定 ######### 
if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = jade_out;
}