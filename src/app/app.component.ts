import { ChildComponent } from './_components/child/child.component';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'sample';
  message:string;
  @ViewChild(ChildComponent, {static: true}) child : ElementRef<any>;
  ngAfterViewInit(){
    //this.message = this.child.message;
  }
  receiveMessage($event) {
    this.message = $event
  }
}
