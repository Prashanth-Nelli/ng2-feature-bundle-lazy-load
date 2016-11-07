import { NgModule } from "@angular/core";


import { RouterModule } from "@angular/router";

const routes = RouterModule.forRoot([
    {
        path : '',
        pathMatch : 'full',
        redirectTo : 'summary'
    },
    { path: 'view', loadChildren: 'app/view/view.js#ViewModule' },
    { path: 'create', loadChildren: 'app/create/create.js#CreateModule' }
]);

@NgModule({
    imports : [routes],
    exports : [RouterModule]
})
export class RoutingModule{

}