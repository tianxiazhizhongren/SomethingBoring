/*var jade = require('jade');

// Compile a function
var fn = jade.compile('br', {doctype: 'xml'});

// Render the function
var html = fn({});
// => '<img src="foo.png"></img>'
console.log(html)
// Compile a function
var fn = jade.compile('br', {doctype: '1.1'});

// Render the function
var html = fn({});
console.log(html)*/


var data = {
  a:{
    b:'b'
  },
  c:'c'
}

function test(data){
  data.c = 'd';

}

test(data);
console.log(data)
// => '<img src="foo.png">'