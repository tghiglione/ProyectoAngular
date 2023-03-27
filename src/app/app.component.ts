import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyecto_angular';

  load:boolean= true;

  estilo:boolean=true;

  alumnos:string[]=[
    "Tomas",
    "Juan",
    "Matias",
    "Maria",
    "Eugenia",
    "Camila"
  ]

  ngOnInit(): void {
    setTimeout(() => {
      this.load=false;
      setTimeout(()=>{
        this.estilo=false;
      },1000)
    }, 3000);
  }
}
