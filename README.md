# node-hertz

sick of writing `setTimeout(fn, (1000/freq))`?
use this:

```js
var hz = require('hertz');
setTimeout(fn, hz(freq));
```
