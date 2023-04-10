import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  personajes: string[] = [
    'Jill Valentine',
    'Leon Kennedy',
    'Chris Redfield',
    'Claire Redfield',
  ];
}
