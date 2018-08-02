import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkDA8Dc6Q16zm7nuStL5KaivvEvVK3ryc'
    })
  ],
  declarations: [PresentationComponent]
})
export class AboutUsModule { }
