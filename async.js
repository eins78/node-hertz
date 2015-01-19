var hertzSync = require('./hertz');

module.exports = function hertz(frequency, callback) {
  var res = hertzSync(frequency);
  if (typeof callback === 'function') {
    if (res == null) return callback(true);
    callback(null, res);
  }
}
