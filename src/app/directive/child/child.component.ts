import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  dataChange: boolean;

  @Input() childData: string;
  @Input() clickEvent: boolean;
  @Output() changeStatusParent = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.childData = 'Child Data';
    this.dataChange = false;
    this.clickEvent = true;
  }

  statusChangeEvent() {
    this.changeStatusParent.emit(true);
  }
}
