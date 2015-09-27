function a (){
  console.log('aaa')
}

var obj = {
  a: function a(){
    console.log('obj.a')
  }
}

obj.a();
a();
obj.a();
a();