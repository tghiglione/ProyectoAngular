import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosTablaComponent } from './cursos-tabla.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [CursosTablaComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatTableModule
  ],
  exports:[
    CursosTablaComponent
  ]
})
export class CursosTablaModule { }
