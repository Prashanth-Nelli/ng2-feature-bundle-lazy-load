import { NgModule } from "@angular/core";

import {  RouterModule } from "@angular/router";

import { ViewComponent } from './view.component';

const routes = RouterModule.forChild([
    { path: '',component : ViewComponent }
]);

@NgModule({
    imports : [routes],
    exports : [RouterModule]
})
export class ViewRouteModule{

}