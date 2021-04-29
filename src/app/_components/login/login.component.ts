import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _dataService: SharedService, public route: Router) {
  
  }

  ngOnInit() {
    this._dataService.setOption('name', 'jithender'); 
  }
  submit() {
    this.route.navigate[''];

  }

}
