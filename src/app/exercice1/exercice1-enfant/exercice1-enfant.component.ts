import {Component, Input, OnInit, Output,  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  public readonly CHANGE_FACTOR = 1;
  @Input() public counter: number;
  @Output() public counterChangeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  changeCounterEvent(value: number) {
    this.counterChangeEvent.emit(value);
  }
}
