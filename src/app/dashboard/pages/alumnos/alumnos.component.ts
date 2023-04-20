import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Estudiantes } from 'src/app/core/models';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  dataSource: Estudiantes[] = [];
  
  registerForm:FormGroup;

  emailControl=new FormControl("",[Validators.email, Validators.required]);
  nameControl=new FormControl("",[Validators.required, this.pepeValidator()]);
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
      this.dataSource.push(this.registerForm.value);
      this.registerForm.reset();
    }
  };

  pepeValidator(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null=>{
      if(control.value?.toLowerCase().includes("pepe")){
        return{
          pepe:true,
        }
      }
      return null;
    }
  }
 
}
export { Estudiantes };

