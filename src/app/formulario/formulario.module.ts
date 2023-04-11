import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';
import {BrowserModule} from '@angular/platform-browser';
import { TablaModule } from '../tabla/tabla.module';


@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    TablaModule
  ],
  bootstrap: [FormularioComponent],
  exports:[
    FormularioComponent
  ]
})
export class FormularioModule { }
