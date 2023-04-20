import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-alumnos-tabla',
  templateUrl: './alumnosTabla.component.html',
  styleUrls: ['./alumnosTabla.component.css']
})
export class AlumnosTablaComponent {

  @Input() 
  items:any[]=[];

  eliminarDato(item: any) :void{
    let index = this.items.findIndex(x => x.email === item.email)
    this.items.splice(index,1);
  }
}
