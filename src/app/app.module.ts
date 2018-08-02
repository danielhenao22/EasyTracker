import { DashboardModule } from './dashboard/dashboard.module';
import { AboutUsModule } from './about-us/about-us.module';
import { StartModule } from './start/start.module';
import { ServicesModule } from './services/services.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    BrowserModule,
    SharedModule,
    ServicesModule,
    StartModule,
    AboutUsModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
