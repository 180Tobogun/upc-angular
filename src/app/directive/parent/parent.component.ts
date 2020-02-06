import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMessage = 'parent message works';

  outputParentMesage: string;

  constructor() {
  }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.outputParentMesage = $event;
  }

  mouseEvent(e) {
    console.log(e.type);
  }

  mouseEnter(word: string) {
    console.log('mouse enter : ' + word);
  }

  mouseLeave(word: string) {
    console.log('mouse leave :' + word);
  }

  clickBtn() {
    console.log('clicked');
  }


}
