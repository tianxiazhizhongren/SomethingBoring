/*
 *出题：如何保证一个程序一直在执行？
 *https://cnodejs.org/topic/54fda3241e9291e16a7b35a2#54fee9c8c1749396754897c9
 *Linux 的实现
 *
 */
var _exec = require('child_process').exec;
var command = 'node'; //命令
var appName = '/home/www/express/bin/www'; //你的app路径
var start_sh = command + ' ' + appName;
var isDie_sh = 'ps -ef |grep "' + start_sh + '" |grep -v "grep"';
var count = 0;

function isDie() {
  _exec(isDie_sh, function(err, stdout, stderr) {
    count++;
    if (err || !stdout) {
      console.error(appName + ' is died! start attempt.');
      _exec(start_sh,function(err,stdout,stderr){
        if(err){
          console.error(err); //死透了?
        }
      });
    }
    console.log(appName + ' is living ' + count);
    setTimeout(isDie, 6000);
  });
}
isDie();