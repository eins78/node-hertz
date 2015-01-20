# *require*("**hertz**")

[![fanart](http://upload.wikimedia.org/wikipedia/commons/e/ea/Wave_frequency.gif)](https://en.wikipedia.org/wiki/Hertz)

sick of writing `setTimeout(fn, (1000/freq))`?

use this:

```js
var hz = require('hertz');
setTimeout(fn, hz(1));
```
### async

async version, because `node`/`io.js`:

```js
var hz = require('hertz/async');
hz(1, function (err, wait) {
  setTimeout(fn, wait);
});
```

##### Build Status

[![travis ci](https://travis-ci.org/eins78/node-hertz.svg)](https://travis-ci.org/eins78/node-hertz)

[![cider ci](http://ci2.zhdk.ch/cider-ci/ui/public/node-hertz/master/Test/summary.svg?respond_width_200)](http://ci2.zhdk.ch/cider-ci/ui/public/node-hertz/cider/test/summary.html)
