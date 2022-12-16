import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions,Navigation,Pagination } from 'swiper';
SwiperCore.use([Navigation,Pagination]);

@Component({
  selector: 'app-swiper-container',
  templateUrl: './swiper-container.component.html',
  styleUrls: ['./swiper-container.component.scss']
})
export class SwiperContainerComponent implements OnInit {
  @Input() cards:any
  constructor() { }
  config: SwiperOptions = {
    slidesPerView: 1,
   // spaceBetween: 100,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints:{
      1000:{
        slidesPerView:3
      },
      700:{
        slidesPerView:2
      }
    },
  };

  ngOnInit(): void {
  }

}
