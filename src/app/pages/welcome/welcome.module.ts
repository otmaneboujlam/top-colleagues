import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePage } from './welcome.page';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    WelcomePage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
  ],
  exports: [
    WelcomePage
  ]
})
export class WelcomeModule { }
