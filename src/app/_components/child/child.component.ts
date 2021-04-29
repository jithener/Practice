import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  message: string = "i am good!!";
  pass: boolean = true;
  list = ['a', 'b', 'c', '']
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
