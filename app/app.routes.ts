import { NgModule } from "@angular/core";


import { RouterModule } from "@angular/router";

const routes = RouterModule.forRoot([
    {
        path : '',
        pathMatch : 'full',
        redirectTo : 'summary'
    },
    { path: 'view', loadChildren: 'view#ViewModule' },
    { path: 'create', loadChildren: 'create#CreateModule' }
]);

@NgModule({
    imports : [routes],
    exports : [RouterModule]
})
export class RoutingModule{

}