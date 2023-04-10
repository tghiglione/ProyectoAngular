import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre.component';
import { HijoModule } from '../hijo/hijo.module';



@NgModule({
  declarations: [
    PadreComponent
  ],
  imports: [
    CommonModule,
    HijoModule
  ],
  exports:[
    PadreComponent
  ]
})
export class PadreModule { }
