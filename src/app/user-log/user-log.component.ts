import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Observable, map } from 'rxjs';
import { Estudiantes } from '../formulario/formulario.component';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent {
  
  usuario$: Observable<Estudiantes> | undefined=undefined;

  logInForm:FormGroup;

  nombreControl=new FormControl("",[Validators.required]);
  apellidoControl=new FormControl("",[Validators.required]);
  mailControl=new FormControl("",[Validators.email, Validators.required]);

  mostrarBienvenida:boolean=false;

  constructor(private LoginService:LoginService){
    this.usuario$= this.LoginService.obtenerUsuario()
    this.logInForm= new FormGroup({
      nombre:this.nombreControl,
      apellido:this.apellidoControl,
      mail:this.mailControl
    });
    
  }
  
  logIn(): void {
    if(this.logInForm.valid){
      this.mostrarBienvenida=true;
      this.LoginService.login({
        name: this.logInForm.value.nombre,
        lastName: this.logInForm.value.apellido,
        email: this.logInForm.value.mail
      }) 
      this.logInForm.reset();
    }   
  }

  logOut():void{
    this.mostrarBienvenida=false;
  }
  
}
