var UglifyJS = require("uglify-js");
var fs = require("fs");

var result = UglifyJS.minify("template.js");
/*console.log(result.code); // minified output
console.log(result.map);*/


fs.writeFileSync("template.js", result.code);