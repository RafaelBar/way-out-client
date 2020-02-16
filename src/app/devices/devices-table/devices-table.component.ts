import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Device, DeviceType, Location } from "../models/device.model";

@Component({
  selector: 'app-devices-table',
  templateUrl: './devices-table.component.html',
  styleUrls: ['./devices-table.component.scss']
})
export class DevicesTableComponent {
  @Input() devices: Device[];
  @Output() deleteDeviceClick = new EventEmitter<string>();

  deviceIconMapping: {} = {
    [DeviceType.CAMERA]: "../../assets/images/camera.png",
    [DeviceType.DOORSWITCH]: "../../assets/images/door_switch.png",
    [DeviceType.MOTIONDETECTOR]: "../../assets/images/motion_detector.png",
    [DeviceType.PLUG]: "../../assets/images/plug.png",
    [DeviceType.SMOKEDETECTOR]: "../../assets/images/smoke_detector.png",
    [DeviceType.THERMOSTAT]: "../../assets/images/thermostat.png",
  };
  deviceLocationMapping: {} = {
    [Location.BATHROOM]: "Bathroom",
    [Location.HALL]: "Hall",
    [Location.KITCHEN]: "Kitchen",
    [Location.LIVINGROOM]: "LivingRoom"
  }

  constructor() { }

  deleteDevice(deviceId: string) {
    this.deleteDeviceClick.emit(deviceId);
  }
}
