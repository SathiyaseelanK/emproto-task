import { Component, Input, OnInit } from '@angular/core';
import { CountCards } from 'src/app/models/covid-response.model';

@Component({
  selector: 'emproto-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss']
})
export class CountCardComponent implements OnInit {
  @Input() countType: CountCards = CountCards.Confirmed;
  @Input() count: number = 0;
  countCards = CountCards
  constructor() { }

  ngOnInit(): void {
  }

  numberWithCommas(count: number) {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
