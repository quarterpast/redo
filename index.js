var spawn = require('child_process').spawn;

function redo(deps, cb) {
  spawn('redo', deps, {stdio: 'inherit'}).on('close', function(code) {
    if(code !== 0) return process.exit(code);
    cb();
  });
}

function redoIfChange(deps, cb) {
  spawn('redo-ifchange', deps, {stdio: 'inherit'}).on('close', function(code) {
    if(code !== 0) return process.exit(code);
    cb();
  });
}

redo.ifChange = redoIfChange;
module.exports = redo;