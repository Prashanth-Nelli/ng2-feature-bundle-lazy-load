var bundleMap = {
    "app/create/create.js" : "create.js",
    "app/view/view.js"     : "view.js"
};
/**
 *  Problem :- SystemJS won't recognize bundled modules using SystemJS builder'
 * 
 *  Has been solved using the following hack.
 * 
 *  Here the idea is to load the bundle which is defined through System.register calls.
 *  
 *  Assumptions :- we will try to fetch file using xhr request if the file name contains `bundle` text in the path.
 * 
 *  Then we will manually append the script text to head by doing this we will push all the modules in bundle into
 *  SystemJS registry.
 * 
 *  After this we try to fetch the modules of interest in the next event loop
 * 
 */

(function pathSystemJSImport(){

    function loadFile(file){

        return new Promise(function(resolve,reject){
            
            var host = window.location.host;

            file = file.split('.js')[0] + '.js';

            file =  file;

            var xhr = new XMLHttpRequest();

            xhr.open("GET",file, true);

            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        resolve('');
                    }
                }
            };
            
            xhr.onerror = function (e) {
                resolve('');
            };
            
            xhr.send(null);

        });


    }

    function getFullURL(name){
        var protocol = window.location.protocol;
        var host     = window.location.host;

        return protocol + '//' + host + '/' + name;

    }

    var importFunc = System.import.bind(System);

    System.import = function(name){

        if(bundleMap[name]){

            name = name.split('.js')[0] + '.js'

            if(System.has(name)){
                console.info('from cache');
                return importFunc(name);
            }else{
                console.info('initial load of ' , name);
                return initialModuleLoad(name);
            }

        }else{

            return importFunc(name);
        
        }

    }

    function initialModuleLoad(moduleName){

        var file = moduleName;

        if(bundleMap[file]){
            file = bundleMap[file];
        }
        
        return loadFile(getFullURL(file))
        .then(function(text){
            var script = document.createElement("script");
            script.innerHTML = text;
            document.head.appendChild(script);
            return getModule(moduleName);
        });

        function getModule(moduleName){

            return new Promise(function(resolve,reject){

                setTimeout(function(){
                    resolve(importFunc(moduleName));
                });

            });
            
        }

    }

}());
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
