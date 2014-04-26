var spawn = require('child_process').spawn;
var bins = require('./package.json').bin;

function factory(cmd) {
  function redo(deps, cb) {
    spawn('./bin/'+cmd, deps, {stdio: 'inherit'}).on('close', function(code) {
      if(code !== 0) return process.exit(code);
      cb();
    });
  }

  if(cmd === 'redo') {
    module.exports = redo;
  } else {
    var subCmd = cmd.split('-').pop();
    module.exports[subCmd] = redo;
  }
}

for(var bin in bins) {
  factory(bin);
}