import { Component, OnInit } from '@angular/core';
import {robotics, fintech, edtech, medtech} from './cards.dto'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  active=0;
  specialities=[
    robotics,
    fintech,
    edtech,
    medtech

  ]

  changeSpeciality(speciality:number){
    this.cards=this.specialities[speciality]
    this.active=speciality;
  }
  cards=this.specialities[0]

  ngOnInit(): void {
  }

}
