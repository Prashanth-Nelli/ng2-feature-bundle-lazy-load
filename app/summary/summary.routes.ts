import { NgModule } from "@angular/core";

import {  RouterModule } from "@angular/router";

import { SummaryComponent } from './summary.component';

const routes = RouterModule.forChild([
    { path: 'summary',component : SummaryComponent }
]);

@NgModule({
    imports : [routes],
    exports : [RouterModule]
})
export class SummaryRouteModule{

}