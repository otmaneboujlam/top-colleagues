import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePage } from './pages/welcome/welcome.page';
import { CreateColleagueFormsComponent } from './shared/components/create-colleague-forms/create-colleague-forms.component';
import { CreateColleagueReactiveFormsComponent } from './shared/components/create-colleague-reactive-forms/create-colleague-reactive-forms.component';
import { DetailPage } from './pages/detail/detail.page';
import { LoginPage } from './pages/login/login.page';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginPage},
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: 'colleagues', component: WelcomePage},
      { path: 'form-template', component: CreateColleagueFormsComponent},
      { path: 'form-reactive', component: CreateColleagueReactiveFormsComponent},
      { path: 'colleagues/:pseudo', component: DetailPage},
      { path: '', pathMatch: 'full', redirectTo: '/colleagues'},
      { path: '**', component: WelcomePage},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
