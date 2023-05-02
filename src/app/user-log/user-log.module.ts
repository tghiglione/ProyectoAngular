import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLogComponent } from './user-log.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{
  path: 'auth',
  component:UserLogComponent,
  loadChildren:()=>import('../dashboard/dashboard.module').then(m=>m.DashboardModule)
}]

@NgModule({
  declarations: [UserLogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    UserLogComponent
  ]
})
export class UserLogModule { }
