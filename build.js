/**
 * 
 * Bundle generated using this script will have all the neccessary stuff to 
 * run the app,eagarly loaded routes.
 * 
 */

var path    = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder('./', 'systemjs.config.js');

builder
.bundle('app/main.js', 'bundle.js')
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});