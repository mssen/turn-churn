import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VictimListComponent } from './victim-list/victim-list.component';
import { AddVictimComponent } from './add-victim/add-victim.component';

@NgModule({
  declarations: [
    AppComponent,
    VictimListComponent,
    AddVictimComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
