var jade = require('jade');

// Compile a function
var fn = jade.compile('img(src="foo.png")', {doctype: 'xml'});

// Render the function
var html = fn({});
// => '<img src="foo.png"></img>'

// Compile a function
var fn = jade.compile('img(src="foo.png")', {doctype: 'html'});
console.log(fn.toString())
// Render the function
var html = fn({});
// => '<img src="foo.png">'