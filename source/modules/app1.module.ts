import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppOneComponent } from '../components/app1/app1.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppOneComponent
    ],

    bootstrap: [
        AppOneComponent
    ]
})
export class App1Module { }