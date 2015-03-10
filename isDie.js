var child_process = require('child_process');

var appName = 'node';
var exec_SH = 'ps -ef |grep "' + appName + '" |grep -v "grep"';
var count = 0;

function isDie() {
  var child = child_process.exec(exec_SH, function(err, stdout, stderr) {
    count++;
    if (err || !stdout || stderr) {
      console.log(appName + ' is died');
      return;
    }

    console.log(appName + ' is living ' + count);
    
    setTimeout(isDie, 6000);
  });

}

isDie();