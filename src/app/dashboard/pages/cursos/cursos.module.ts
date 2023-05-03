import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { CursosTablaModule } from '../cursos-tabla/cursos-tabla.module';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CursosTablaModule
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
