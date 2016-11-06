"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var summary_routes_1 = require('./summary.routes');
var summary_component_1 = require('./summary.component');
var SummaryModule = (function () {
    function SummaryModule() {
    }
    SummaryModule = __decorate([
        core_1.NgModule({
            imports: [summary_routes_1.SummaryRouteModule],
            exports: [],
            declarations: [summary_component_1.SummaryComponent],
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], SummaryModule);
    return SummaryModule;
}());
exports.SummaryModule = SummaryModule;
//# sourceMappingURL=summary.js.map