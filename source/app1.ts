import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

//import 'rxjs/Rx';
import { App1Module } from './modules/app1.module';


if (process.env.ENV === 'production') {
  enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(App1Module);
