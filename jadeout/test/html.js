var _dw_data = {}

eval('_dw_data.test = "test"');
eval('(function(){var glo_test = "glo_test".substr(3); console.log(glo_test)})()');

function test(){
  this.glo = {a:'a'};
  this.init = false;
  this.t2 = null;
}

test.prototype.t = function(){
  if(!this.init){
    this.init = true;
 
  }
  eval('this.t2 = function test(){console.log(this.glo)}');
}



var t = new test();
t.t();

console.log(typeof t.t2)
t.t2()
