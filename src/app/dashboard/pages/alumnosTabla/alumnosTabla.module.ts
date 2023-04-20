import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosTablaComponent } from './alumnosTabla.component';
import { SharedModule } from '../../../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [AlumnosTablaComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatTableModule
  ],
  exports:[AlumnosTablaComponent]
})
export class AlumnosTablaModule { }
