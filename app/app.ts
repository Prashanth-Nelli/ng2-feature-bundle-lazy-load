import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { RoutingModule } from './app.routes';

import { HostComponent } from './host/host';

import { SummaryModule } from './summary/summary';


@NgModule({
    imports: [
        BrowserModule,
        RoutingModule,
        SummaryModule
    ],
    declarations : [HostComponent],
    bootstrap    : [HostComponent]
})
export class AppModule { 

}