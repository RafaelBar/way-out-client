import { RoutersList } from './../../models/routersList.model';
import { Component, OnInit } from '@angular/core';
import { RoutersListService } from 'src/app/shared/services/routersList.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  routersData: RoutersList;
  constructor(private routersService: RoutersListService, private routersList: RoutersList) { }

  ngOnInit(): void {
    this.routersService.getAllRouters().subscribe((res)=>{
      this.routersData = res;
      console.log(this.routersData);
    });
  }

}
