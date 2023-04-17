import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormularioModule } from './formulario/formulario.module';
import { UserLogComponent } from './user-log/user-log.component';
import { UserLogModule } from './user-log/user-log.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DashboardModule,
    FormularioModule,
    UserLogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
