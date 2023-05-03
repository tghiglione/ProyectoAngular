import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos.component';
import {BrowserModule} from '@angular/platform-browser';
import { AlumnosTablaModule } from '../alumnosTabla/alumnosTabla.module';

@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AlumnosTablaModule
  ],
  bootstrap: [AlumnosComponent],
  exports:[
    AlumnosComponent
  ]
})
export class AlumnosModule { }
