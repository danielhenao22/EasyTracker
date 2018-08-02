import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackCardsComponent } from './track-cards/track-cards.component';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardsComponent } from './track-cards/cards/cards.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsComponent } from './track-cards/details/details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatChipsModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [TrackCardsComponent, CardsComponent, DetailsComponent, DetailsComponent, AccountComponent],
  entryComponents: [DetailsComponent]
})
export class DashboardModule { }
