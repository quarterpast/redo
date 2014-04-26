var spawn = require('child_process').spawn;
var bins = require('./package.json').bin;

function factory(cmd) {
  function redo(deps, cb) {
    deps = [].concat(deps);
    spawn('./bin/'+cmd, deps, {stdio: 'inherit'}).on('close', function(code) {
      if(code !== 0) return process.exit(code);
      if(typeof cb === 'function') cb();
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