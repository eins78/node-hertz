# *require*("**hertz**")

[![fanart](http://upload.wikimedia.org/wikipedia/commons/e/ea/Wave_frequency.gif)](https://en.wikipedia.org/wiki/Hertz)

sick of writing `setTimeout(fn, (1000/freq))`?

use this:

```js
var hz = require('hertz');
setTimeout(fn, hz(freq));
```
#### async

async version, because `node`/`io.js`:

```js
var hz = require('hertz/async');
hz(freq, function (err, wait) {
  setTimeout(fn, wait);
});
```
