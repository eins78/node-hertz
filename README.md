# *require*("**hertz**")

[![fanart](http://upload.wikimedia.org/wikipedia/commons/e/ea/Wave_frequency.gif)](https://en.wikipedia.org/wiki/Hertz)

sick of writing `setTimeout(fn, (1000/freq))`?

use this:

```js
var hz = require('hertz');
setTimeout(fn, hz(1));
```
### async

async version, because `node`:

```js
var hz = require('hertz/async');
hz(1, function (err, wait) {
  setTimeout(fn, wait);
});
```

##### Build Status

Travis: [![travis ci](https://travis-ci.org/eins78/node-hertz.svg)](https://travis-ci.org/eins78/node-hertz)

[![cider ci](http://cider.zrh.kiste.li/cider-ci/ui/public/node-hertz/master/test/summary.svg?respond_width_200)](http://cider.zrh.kiste.li/cider-ci/ui/public/node-hertz/master/test/summary.html)
