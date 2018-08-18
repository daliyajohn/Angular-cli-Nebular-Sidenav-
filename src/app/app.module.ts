import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { MainLayoutModule } from './main-module/main-layout.module';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingRoutingModule } from './app-routing-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({ name: 'default' }),
    MainLayoutModule,
    RouterModule,
    AppRoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
