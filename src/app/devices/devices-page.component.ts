import { Component, OnInit } from '@angular/core';
import { DeviceService } from './services/device.service';
import { Device } from './models/device.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-devices-page',
  templateUrl: './devices-page.component.html',
  styleUrls: ['./devices-page.component.scss']
})
export class DevicesPageComponent implements OnInit {
  devices: Device[];
  closeResult: string;
  constructor(private deviceService: DeviceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.deviceService.getAllDevices().subscribe((res)=>{
      this.devices = res;
    });
  }

  handleDeleteDeviceClick(deviceId: string) {
    this.devices = this.devices.filter(device => device.Id !== deviceId);
  }

  addDevice() {

  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
