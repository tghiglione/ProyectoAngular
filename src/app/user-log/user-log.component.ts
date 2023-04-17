import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';
import { Estudiantes } from '../formulario/formulario.component';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent{

  usuario$: Observable<Estudiantes> | undefined

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
      this.LoginService.login({
        name: this.logInForm.value.nombre,
        lastName:this.logInForm.value.apellido,
        email:this.logInForm.value.mail
      })
      this.mostrarBienvenida=true;
      console.log(this.mostrarBienvenida) 
      this.logInForm.reset();
    }   
  }

  logOut():void{
    this.mostrarBienvenida=false;
    this.usuario$=undefined;
    console.log(this.mostrarBienvenida)
  }
  
}
