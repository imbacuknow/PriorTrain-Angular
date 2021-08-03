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
import { MapComponent } from './component/map/map.component';
import { MarkerService } from "./component/map/marker.service";

@NgModule({
  declarations: [
    LoginComponent,
    TableComponent,
    RegisterComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [MarkerService]
})
export class LoginModule { }
