import { NgModule } from '@angular/core';

import { SummaryRouteModule } from './summary.routes';

import { SummaryComponent }   from './summary.component';

@NgModule({
    imports: [SummaryRouteModule],
    exports: [],
    declarations: [SummaryComponent],
    providers: [],
})
export class SummaryModule {

}