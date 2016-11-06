/**
 * 
 * Bundle generated using this script will have all the neccessary stuff to 
 * run this feature module.
 * 
 * we allow adding module to this bundle only if that module is not 
 * there in the root bundle by doing this way we reduce the final bundle size of this feature module.
 * 
 */


var path     = require("path");
var Builder  = require('systemjs-builder');
var builder  = new Builder('../../', '../../systemjs.config.js');
var file     =  __dirname + '/create.js';
var homeDir  =  path.resolve('../../');
var libPath  =  path.join(homeDir,'bundle.js');

builder
.bundle(file + ' - ' + libPath , 'bundle.js')
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});