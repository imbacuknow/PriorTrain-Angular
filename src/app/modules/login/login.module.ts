import { MatTableDataSource } from "@angular/material/table";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './component/table/table.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    TableComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
