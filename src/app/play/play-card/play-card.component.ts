import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-card',
  templateUrl: './play-card.component.html',
  styleUrls: ['./play-card.component.scss']
})
export class PlayCardComponent implements OnInit {
@Input() playCard:any
  constructor() { }

  ngOnInit(): void {
  }

}
