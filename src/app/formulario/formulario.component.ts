import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  listado: any[]=[];

  registerForm:FormGroup;

  emailControl=new FormControl("",[Validators.email, Validators.required]);
  nameControl=new FormControl("",[Validators.required]);
  lastNameControl=new FormControl("",[Validators.required]);

  

  constructor(){
    this.registerForm= new FormGroup({
      email:this.emailControl,
      name:this.nameControl,
      lastName:this.lastNameControl
    });
  };

  onSubmit(): void {
    if(this.registerForm.valid){
      this.listado.push(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}
