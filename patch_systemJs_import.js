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

        if(name.indexOf('bundle') != -1){

            var host = window.location.host;

            name = name.split('.js')[0] + '.js';

            if(System.has(bundleMap[name] || name)){
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

    function initialModuleLoad(name){
        
        return loadFile(getFullURL(name))
        .then(function(text){
            var script = document.createElement("script");
            script.innerHTML = text;
            document.head.appendChild(script);
            return getModule(name);
        });

        function getModule(name){

            return new Promise(function(resolve,reject){

                setTimeout(function(){
                    name = bundleMap[name] || name;
                    resolve(importFunc(name));
                });

            });
            
        }

    }

}());