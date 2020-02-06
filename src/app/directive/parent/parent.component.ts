import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dataChange: boolean;
  @Input() parentData: string;
  @Output() statusBtn: boolean;
  @Input() parentBtn: boolean;

  constructor() {
    this.dataChange = false;
  }

  ngOnInit() {
    this.parentData = 'Parent Data';
    this.parentBtn = false;
    this.statusBtn = true;
  }

  statusChildBtn() {
    this.statusBtn = !this.statusBtn;
  }

  statusChangeEvent($event) {
    if (this.parentBtn === $event) {
      this.parentBtn = !$event;
    } else {
      this.parentBtn = $event;
    }
  }
}
