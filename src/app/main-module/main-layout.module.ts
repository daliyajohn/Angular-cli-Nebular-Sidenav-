import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    NbSidebarModule,
    NbLayoutModule
  ],
  declarations: [MainLayoutComponent],
  providers: [NbSidebarService]
})
export class MainLayoutModule {}
