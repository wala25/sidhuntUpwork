import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor() { }
   
  cards=[
    {color:"#EBB8B3",text:"A healthy life"},
    {color:"#C2DAFF",text:"A creative life"},
    {color:"#B7E0C2",text:"A meaningful life"},
    {color:"#FFD702",text:"Knowledge Map"},
  ]
  ngOnInit(): void {
  }

}
