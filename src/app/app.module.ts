import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { DevicesModule } from "./devices/devices.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DevicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
