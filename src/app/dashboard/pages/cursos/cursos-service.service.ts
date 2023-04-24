import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cursos } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {
  private cursos$= new BehaviorSubject<Cursos[]>([
    {
      curso:"Angular",
      comision:41563
    }
  ]);

  constructor() { }

  obtenerCursos():Observable<Cursos[]>{
    return this.cursos$.asObservable()
  }
}
