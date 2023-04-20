import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Cursos } from 'src/app/core/models';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  dataSource: Cursos[] = [];
  
  registerForm:FormGroup;

  cursoControl=new FormControl("",[Validators.required]);
  comisionControl=new FormControl("",[Validators.required, this.comisionValidator()]);

  constructor(){
    this.registerForm= new FormGroup({
      curso:this.cursoControl,
      comision:this.comisionControl
    });
  };

  onSubmit(): void {
    if(this.registerForm.valid){
      this.dataSource.push(this.registerForm.value);
      this.registerForm.reset();
      console.log(this.dataSource)
    }
  };

  comisionValidator(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null=>{
      if(control.value?.toString().length!=5){
        return{
          comision:true,
        }
      }
      return null;
    }
  }
}
