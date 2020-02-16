import { NgModule } from "@angular/core";

import { SharedModule } from './../shared/shared.module';

import { DevicesPageComponent } from './devices-page.component';
import { DevicesTableComponent } from './devices-table/devices-table.component';

import { DevicesRoutingModule } from "./devices-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DevicesPageComponent, DevicesTableComponent],
  imports: [SharedModule, DevicesRoutingModule, FormsModule]
})
export class DevicesModule {}