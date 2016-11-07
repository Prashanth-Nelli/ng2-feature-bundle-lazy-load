/**
 * 
 * Bundle generated using this script will have all the neccessary stuff to 
 * run the app,eagarly loaded routes.
 * 
 */

var path           = require("path");
var Builder        = require('systemjs-builder');
var config         = require('./module-config');
var builder        = new Builder('./', 'systemjs.config.js');
var mainModule     = config.main[0];
var featureModules = config.featureModules;

builder
.bundle(mainModule.path,mainModule.name)
.then(function(){
  console.log('main module bundle is done');

  var featureModuleBundleP = featureModules.map(function(config){
    return bundleFeatureModule(config,mainModule);
  });

  return Promise.all(featureModuleBundleP);

})
.then(function(res){
  console.log('feature module bundling is done');
})
.catch(function(err){
  console.log(err);
  console.log(err.stack);
  console.log('Bundling main module failed');
});

function bundleFeatureModule(config,parent){
  console.log(config,parent);
  return builder.bundle(config.path + ' - ' +  parent.path,config.name)
  .then(function(){
    console.log(config.name  +  ' module bundle is done');
    return Promise.resolve();
  })
  .catch(function(err){
    console.log(err);
    console.log(err.stack);
    console.log('Bundling main module failed');
    return Promise.reject(err);
  });
}