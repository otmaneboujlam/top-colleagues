import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WelcomePage } from './pages/welcome/welcome.page';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
import { CreateColleagueReactiveModule } from './pages/create-colleague-reactive/create-colleague-reactive.module';
import { AppRoutingModule } from './app-routing.module';
import { DetailModule } from './pages/detail/detail.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    WelcomeModule,
    HttpClientModule,
    CreateColleagueModule,
    CreateColleagueReactiveModule,
    AppRoutingModule,
    DetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
