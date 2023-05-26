import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import { InscripcionDialogComponent } from './inscripcion-dialog/inscripcion-dialog.component';



@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InscripcionesComponent
  ]
})
export class InscripcionesModule { }
