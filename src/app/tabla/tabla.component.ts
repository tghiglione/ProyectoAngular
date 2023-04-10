import { Component } from '@angular/core';
export interface PeriodicElement {
  nombre: string;
  id: number;
  apellido: number;
  email: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nombre: 'Hydrogen', apellido: 1.0079, email: 'H'},
  {id: 2, nombre: 'Helium', apellido: 4.0026, email: 'He'},
  {id: 3, nombre: 'Lithium', apellido: 6.941, email: 'Li'},
  {id: 4, nombre: 'Beryllium', apellido: 9.0122, email: 'Be'},
  {id: 5, nombre: 'Boron', apellido: 10.811, email: 'B'},
  {id: 6, nombre: 'Carbon', apellido: 12.0107, email: 'C'},
  {id: 7, nombre: 'Nitrogen', apellido: 14.0067, email: 'N'},
  {id: 8, nombre: 'Oxygen', apellido: 15.9994, email: 'O'},
  {id: 9, nombre: 'Fluorine', apellido: 18.9984, email: 'F'},
  {id: 10, nombre: 'Neon', apellido: 20.1797, email: 'Ne'},
];
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email'];
  dataSource = ELEMENT_DATA;
}
