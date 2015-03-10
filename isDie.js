var child_process = require('child_process');

var exec_SH = 'ps -ef |grep "node" |grep -v "grep"';

var count = 0;
function isDie(){
var child = child_process.exec(exec_SH, function(err, stdout, stderr) {
  count++;
  if(err || !stdout || stderr){
    console.log('die');
    return;
  }
  console.log('live');
  console.log('count=='+count);
  setTimeout(isDie,6000);
});
}
isDie();