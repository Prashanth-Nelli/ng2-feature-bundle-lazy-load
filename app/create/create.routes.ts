import { NgModule } from "@angular/core";

import {  RouterModule } from "@angular/router";

import { CreateComponent } from './create.component';

const routes = RouterModule.forChild([
    { path: '',component : CreateComponent }
]);

@NgModule({
    imports : [routes],
    exports : [RouterModule]
})
export class CreateRouteModule{

}