import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';
import { Device, DeviceType, Location } from './models/device.model';

@Component({
  selector: 'app-devices-page',
  templateUrl: './devices-page.component.html',
  styleUrls: ['./devices-page.component.scss']
})
export class DevicesPageComponent implements OnInit {
  devices: Device[];
  deviceToAdd: any = {};
  closeResult: string;
  MAC: number;
  deviceName: string;
  deviceLocation: Location;
  serverStatus: string;
  deviceTypeResponse: any;
  successMSG: string;
  deviceMACMapping: {} = {
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
    });
  }

  handleDeleteDeviceClick(deviceId: string) {
    this.devices = this.devices.filter(device => device.Id !== deviceId);
  }

  getDeviceTypeByMac(id) {
    this.deviceService.getDeviceTypeById(id).subscribe((res)=>{
      if(res.toString() == "1"){
        this.serverStatus = res.toString();
        this.deviceTypeResponse = "Same device alredy exist on the list";
      }
      else if(res.toString() == "2"){
        this.serverStatus = res.toString();
        this.deviceTypeResponse = "No such device type";
      }
      else if(this.isDeviceIdExist(id) !== undefined){
        this.serverStatus = "1";
        this.deviceTypeResponse = "Same device alredy exist on the list";
      }
      else{
        this.serverStatus = "100"; //device can be added to the list
        this.deviceTypeResponse = res;
      }
    });
  }

  isDeviceIdExist(id){
    return this.devices.find(x => x.Id == id);
  }

  addDevice() {
    this.deviceToAdd = {};
    this.deviceToAdd.Id = this.MAC.toString();
    this.deviceToAdd.Location = this.deviceLocation;
    this.deviceToAdd.Name = this.deviceName;
    this.deviceToAdd.DeviceType = this.deviceTypeResponse;
    this.deviceToAdd.Status = true;
    this.deviceToAdd.Battery = 100;
    this.deviceToAdd.LastSuccessfulConnection = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    this.devices.push(this.deviceToAdd);
    this.MAC = null;
    this.deviceLocation = null;
    this.deviceName = null;
    this.successMSG = "Added to list";
    this.deviceTypeResponse = null;
    this.serverStatus = "0"; //status 1 meaning device added succesfuly
  }
}
