import { Component, Input } from '@angular/core';
import { Cursos } from 'src/app/core/models';

@Component({
  selector: 'app-cursos-tabla',
  templateUrl: './cursos-tabla.component.html',
  styleUrls: ['./cursos-tabla.component.css']
})
export class CursosTablaComponent {
  @Input() 
  items:Cursos[]=[];

  eliminarDato(item: any) :void{
    let index = this.items.findIndex(x => x.comision === item.comision)
    this.items.splice(index,1);
  }
}
