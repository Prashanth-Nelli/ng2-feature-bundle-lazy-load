var path           = require('path');
var featureModules = [];
var mainModule     = [];

/**
 * Main Module config.
 */

mainModule.push({
    name : 'dist/bundle.js',
    path : path.resolve(__dirname + '/app/main.js')
});

/**
 * View Feature Module 
 */

featureModules.push({
    name : 'dist/view.js',
    path : path.resolve(__dirname + '/app/view/view.js')
});

/**
 * Create Feature Module 
 */

featureModules.push({
    name : 'dist/create.js',
    path : path.resolve(__dirname + '/app/create/create.js')
});

module.exports = {
    main : mainModule,
    featureModules : featureModules
};