import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DevicesPageComponent } from './devices-page.component';

const routes: Routes = [
  {
    path: "devices",
    component: DevicesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule {}