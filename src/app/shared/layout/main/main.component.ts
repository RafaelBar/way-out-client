import { Device } from './../../models/device.model';
import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/shared/services/device.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  device: Device;
  constructor(private routersService: DeviceService) { }

  ngOnInit(): void {
    this.routersService.getAllRouters().subscribe((res)=>{
      this.device = res;
      console.log(this.device);
    });
  }

}
