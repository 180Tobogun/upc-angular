import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string;

  messageToParentFromChild = 'Send to parent component';

  @Output() public messageEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  sendMessageToParent() {
    this.messageEvent.emit(this.messageToParentFromChild);
  }
}
