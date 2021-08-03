import {RegisterComponent} from './register/register.component';
import {LanguageListComponent} from './../trainee/language-list/language-list.component';
import {LoginComponent} from './login.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MapComponent } from './component/map/map.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'languageList', component: LanguageListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'map', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
