import { TrackCardsComponent } from './dashboard/track-cards/track-cards.component';
import { PresentationComponent } from './about-us/presentation/presentation.component';
import { CarouselComponent } from './start/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInComponent } from './login/sing-in/sing-in.component';
import { SingUpComponent } from './login/sing-up/sing-up.component';
import { ServicesCardsComponent } from './services/services-cards/services-cards.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'start', component: CarouselComponent },
  { path: 'aboutUs', component: PresentationComponent },
  { path: 'services', component: ServicesCardsComponent },
  { path: 'login', component: SingInComponent },
  { path: 'register', component: SingUpComponent },
  { path: 'trackCards', component: TrackCardsComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
