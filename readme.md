redo.js
=======

node.js wrapper for the [redo](https://github.com/apenwarr/redo) build system. For declaring dependencies in JavaScript `.do` files.

install
-------

```
npm install redo
```

using
-----

See the [redo docs](https://github.com/apenwarr/redo#readme) for an overview of the build system itself.

### default.upper.do

```javascript
#!/usr/bin/env node
var redo = require('redo');
var fs = require('fs');

redo.ifChange(process.argv[2] + '.lower', function() {
  process.stdout.write(
    fs.readFileSync(process.argv[2] + '.lower', 'utf8').toUpperCase()
  );
});
```

### default.js.do
It's a bit nicer in Livescript:

```livescript
#!/usr/bin/env lsc
require! [redo, fs, LiveScript]

<- redo.if-change process.argv.2 + '.ls'

fs.read-file-sync process.argv[2] + '.lsc', \utf8
|> LiveScript.compile
|> process.stdout.write

});
```

licence
-------
MIT. &copy 2014 Matt Brennan