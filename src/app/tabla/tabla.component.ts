import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  displayedColumns: string[] = ['name', 'lastName', 'email'];
  @Input() 
  items:any[]=[];

  eliminarDato(item: any) :void{
    let index = this.items.findIndex(x => x.email === item.email)
    this.items.splice(index,1);
  }
}
