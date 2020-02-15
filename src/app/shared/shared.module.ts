import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { AsideComponent } from './layout/main/aside/aside.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent, AsideComponent],
  imports: [CommonModule, RouterModule, NgbModule, HttpClientModule],
  exports: [
    CommonModule,
    RouterModule,
    HeaderComponent, 
    MainComponent, 
    AsideComponent
  ]
})
export class SharedModule {}