System.registerDynamic("app/view/view.component.js", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var ViewComponent = function () {
        function ViewComponent() {}
        ViewComponent.prototype.ngOnInit = function () {};
        ViewComponent = __decorate([core_1.Component({
            moduleId: module.id,
            templateUrl: 'view.html'
        }), __metadata('design:paramtypes', [])], ViewComponent);
        return ViewComponent;
    }();
    exports.ViewComponent = ViewComponent;
    

    return module.exports;
});
System.registerDynamic("app/view/view.routes.js", ["@angular/core", "@angular/router", "./view.component"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var router_1 = $__require("@angular/router");
    var view_component_1 = $__require("./view.component");
    var routes = router_1.RouterModule.forChild([{ path: '', component: view_component_1.ViewComponent }]);
    var ViewRouteModule = function () {
        function ViewRouteModule() {}
        ViewRouteModule = __decorate([core_1.NgModule({
            imports: [routes],
            exports: [router_1.RouterModule]
        }), __metadata('design:paramtypes', [])], ViewRouteModule);
        return ViewRouteModule;
    }();
    exports.ViewRouteModule = ViewRouteModule;
    

    return module.exports;
});
System.registerDynamic("app/view/view.js", ["@angular/core", "./view.component", "./view.routes"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var view_component_1 = $__require("./view.component");
    var view_routes_1 = $__require("./view.routes");
    var ViewModule = function () {
        function ViewModule() {}
        ViewModule = __decorate([core_1.NgModule({
            imports: [view_routes_1.ViewRouteModule],
            exports: [],
            declarations: [view_component_1.ViewComponent],
            providers: []
        }), __metadata('design:paramtypes', [])], ViewModule);
        return ViewModule;
    }();
    exports.ViewModule = ViewModule;
    

    return module.exports;
});