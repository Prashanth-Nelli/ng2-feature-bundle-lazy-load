import { NgModule } from '@angular/core';

import { CreateComponent }   from './create.component';

import { CreateRouteModule } from "./create.routes";

@NgModule({
    imports: [CreateRouteModule],
    exports: [],
    declarations: [CreateComponent],
    providers: [],
})
export class CreateModule {

}
