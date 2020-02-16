import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private httpClient: HttpClient) { 
  }

  getAllDevices(): Observable<Device[]> {
    return this.httpClient.get<Device[]>('http://localhost:3000/all');
  }

  getDeviceTypeById(id): Observable<Device[]> {
    return this.httpClient.get<Device[]>('http://localhost:3000/id/' + id);
  }
  
}
