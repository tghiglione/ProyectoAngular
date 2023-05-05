import { BehaviorSubject, Observable, of } from "rxjs";
import { LogInFormValue, Usuario } from "../models/index";

export const USUARIO_ADMIN_MOCK: Usuario = {
  id: 1,
  apellido: 'testapellido',
  email: 'test@mail.com',
  nombre: 'testnombre',
  role: 'admin',
  token: 'fasfasfds23fsfsdfs',
  password: '12345',
}

export class LoginServiceMock {

  private authUser$ = new BehaviorSubject<Usuario | null>(null);

  login(formValue: LogInFormValue): void {
    this.authUser$.next(USUARIO_ADMIN_MOCK);
  }

  verificarToken(): Observable<boolean> {
    return of(true);
  }
}