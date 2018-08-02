import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesCardsComponent } from './services-cards/services-cards.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [ServicesCardsComponent],
  exports: [ServicesCardsComponent]
})
export class ServicesModule { }
