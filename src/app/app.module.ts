import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomePage } from './pages/welcome/welcome.page';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    WelcomeModule,
    HttpClientModule,
    CreateColleagueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
