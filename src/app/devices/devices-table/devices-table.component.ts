import { Component, Input } from '@angular/core';
import { Device, DeviceType } from "../models/device.model";

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.scss']
})
export class DevicesTableComponent {
  @Input() devices: Device[];
  deviceIconMapping: {} = {
    [DeviceType.CAMERA]: "../../assets/images/camera.png",
    [DeviceType.DOORSWITCH]: "../../assets/images/door_switch.png",
    [DeviceType.MOTIONDETECTOR]: "../../assets/images/motion_detector.png",
    [DeviceType.PLUG]: "../../assets/images/plug.png",
    [DeviceType.SMOKEDETECTOR]: "../../assets/images/smoke_detector.png",
    [DeviceType.THERMOSTAT]: "../../assets/images/thermostat.png",
  };

  constructor() { }

}
