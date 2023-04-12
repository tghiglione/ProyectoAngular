import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla.component';
import { SharedModule } from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [TablaComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatTableModule
  ],
  exports:[
    TablaComponent,
  ]
})
export class TablaModule { }
