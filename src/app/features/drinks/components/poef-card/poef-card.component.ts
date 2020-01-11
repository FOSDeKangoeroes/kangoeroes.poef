import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';

@Component({
  selector: 'app-poef-card',
  templateUrl: './poef-card.component.html',
  styleUrls: ['./poef-card.component.scss']
})
export class PoefCardComponent implements OnInit {
  @Input() leaderName: string;
  @Input() amountOfDrinks: number;
  @Input() abbrevation: string;

  @Output() plus = new EventEmitter();
  @Output() minus = new EventEmitter();

  amountPluralMapping = {
    '=0': 'Geen streepjes',
    '=1': '1 streepje',
    other: '# streepjes'
  };

  constructor() {}

  ngOnInit() {}
}
