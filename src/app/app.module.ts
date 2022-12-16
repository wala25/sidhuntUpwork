import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {SwiperModule} from 'swiper/angular';
import { SwiperContainerComponent } from './portfolio/swiper-container/swiper-container.component';
import { CardComponent } from './portfolio/card/card.component';
import { PlayComponent } from './play/play.component';
import { PlayCardComponent } from './play/play-card/play-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    AboutMeComponent,
    PortfolioComponent,
    SwiperContainerComponent,
    CardComponent,
    PlayComponent,
    PlayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
