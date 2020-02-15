import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../shared/services/device.service';
import { Device, DeviceType } from "../../shared/models/device.model";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  devices: Device[];
  deviceIconMapping: {} = {
    [DeviceType.CAMERA]: "../../assets/images/camera.png",
    [DeviceType.DOORSWITCH]: "../../assets/images/door_switch.png",
    [DeviceType.MOTIONDETECTOR]: "../../assets/images/motion_detector.png",
    [DeviceType.PLUG]: "../../assets/images/plug.png",
    [DeviceType.SMOKEDETECTOR]: "../../assets/images/smoke_detector.png",
    [DeviceType.THERMOSTAT]: "../../assets/images/thermostat.png",
  };

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.getAllDevices().subscribe((res)=>{
      this.devices = res;

      console.log('image url', this.deviceIconMapping[this.devices[0].DeviceType]);
      console.log(this.devices);
    });
  }
}
