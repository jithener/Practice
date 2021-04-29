import { SharedService } from './../../_services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.scss']
})
export class RegistorComponent implements OnInit {
  public data;  
  constructor(_dataService: SharedService) {
    this.data = _dataService.getOption();  
   }

  ngOnInit() {
  }

}
