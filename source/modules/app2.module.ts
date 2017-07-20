import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppTwoComponent } from '../components/app2/app2.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppTwoComponent
    ],

    bootstrap: [
        AppTwoComponent
    ]
})
export class App2Module { }