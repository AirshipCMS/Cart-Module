var concat = require('concat-files');
concat([
  './dist/inline.bundle.js',
  './dist/polyfills.bundle.js',
  './dist/vendor.bundle.js',
  './dist/main.bundle.js'
], './dist/airship-cart.min.js', function(err) {
  if (err) throw err
  console.log('done');
});
concat([
  './dist/styles.bundle.css',
], './dist/airship-cart.min.css', function(err) {
  if (err) throw err
  console.log('done');
});