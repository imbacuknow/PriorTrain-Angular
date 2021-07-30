import {MaterialModule} from './material.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [MaterialModule],
})
export class SharedModule {}
