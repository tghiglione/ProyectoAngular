import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../core/services/login.service';
import { Observable } from 'rxjs';
import { Estudiantes, LogInFormValue } from 'src/app/core/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent {

  emailControl = new FormControl('', [Validators.email,Validators.required],);
  nombreControl = new FormControl('', [Validators.required]);
  apellidoControl = new FormControl('', [Validators.required]);
  logInForm = new FormGroup({
    email: this.emailControl,
    name: this.nombreControl,
    lastName: this.apellidoControl
  });

  constructor(private LoginService:LoginService, private activatedRoute: ActivatedRoute){
    
  }
  
  logIn(): void {
    if(this.logInForm.valid){
      this.LoginService.login(this.logInForm.value as Estudiantes)
    }else{
      this.logInForm.markAllAsTouched();
    } 
    this.logInForm.reset();
  }   
  
}


