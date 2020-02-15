import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  routers: any = [];
  constructor(private httpClient: HttpClient) { 
  }

  getAllRouters(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/all');
  }
}
