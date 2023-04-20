import { Pipe, PipeTransform } from '@angular/core';
import { Estudiantes } from 'src/app/core/models';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(value:Estudiantes, ...args: unknown[]): unknown {
    const newValue = `${value.name} ${value.lastName}`;
    return newValue;
  }

}
