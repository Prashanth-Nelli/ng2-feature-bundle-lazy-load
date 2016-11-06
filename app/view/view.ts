import { NgModule } from '@angular/core';

import { ViewComponent }   from './view.component';

import { ViewRouteModule } from './view.routes';

@NgModule({
    imports: [ViewRouteModule],
    exports: [],
    declarations: [ViewComponent],
    providers: [],
})
export class ViewModule {

}