import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../core/services/login.service';
import { Observable, map } from 'rxjs';
import { Estudiantes, LogInFormValue, Usuario } from 'src/app/core/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent {

  hide = true;

  emailControl = new FormControl('', [Validators.email,Validators.required],);
  passwordControl= new FormControl('', [Validators.required]);
  logInForm = new FormGroup({
    email: this.emailControl,
    password:this.passwordControl,
  });

  constructor(private LoginService:LoginService, private activatedRoute: ActivatedRoute){
    
  }
  
  logIn(): void {
    if(this.logInForm.valid){
      this.LoginService.login(this.logInForm.value as Usuario)
    }else{
      this.logInForm.markAllAsTouched();
    } 
    this.logInForm.reset();
  }   
  
}


