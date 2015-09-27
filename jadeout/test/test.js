var fs = require('fs');
var jade = require('jade');


//var tpl = fs.readFileSync('./tpl.jade', 'utf-8');


/*var data = {
  title: 'JadeOut',
  name: 'JadeOut_test',
  detail:[
    'hello',
    'world',
    'test',
    '哈哈'
  ]
};*/




data = {
  cache:true
}

var path = './tpl.jade';
var jsFunctionString = jade.compileFileClient(path, data);

var key = ''

for(var i in jade.cache){
 key = i;
  
}
console.log('key= '+key);


console.log(jade.cache[key]);
jade.cache[key] = null
console.log(jade.cache[key]);
var jsFunctionString = jade.compileFileClient(path, data);
console.log(jade.cache[key]);


//fs.writeFileSync("template.js", jade.cache[path+':client']);


/*var Dependencies = jade.compileClientWithDependenciesTracked(tpl, data);
fs.writeFileSync("Dependencies.js", JSON.stringify(Dependencies));*/