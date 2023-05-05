import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LogInFormValue, Usuario } from '../models';
import { Router } from '@angular/router';
import { skip } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;
  let hhtpController:HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    }).compileComponents();
    service = TestBed.inject(LoginService);
    hhtpController=TestBed.inject(HttpTestingController)
  });

  it('El login debe funcionar', (done)=>{ //para ver cuando finalizar la prueba
    const loginFake:LogInFormValue={email:"test@mail.com",password:"1234"};
    
    const mock_result:Usuario[]=[
      {
        id: 1,
        apellido: 'testapellido',
        email: loginFake.email,
        nombre: 'testnombre',
        role: 'admin',
        token: 'fasfasfds23fsfsdfs',
        password: loginFake.password,
      }
    ];

    spyOn(TestBed.inject(Router), 'navigate');

    service.obtenerUsuario().pipe(skip(1)).subscribe(usuario=>{
      console.log(usuario);
      expect(usuario).toBeTruthy();   //valida que el valor recibido no sea ni null ni undefined ni false
      done() 
    });

    service.login(loginFake);

    hhtpController.expectOne({
      url:'http://localhost:3000/usuarios?email=test@mail.com&password=1234',
      method:'GET'
    }).flush([mock_result]) //lo que espera que devuelva, en este caso un array de Usuario
  });

  it('el logout debe funcionar',()=>{
    const mock_result:Usuario={
      id: 1,
      apellido: 'testapellido',
      email: 'test@gmail.com',
      nombre: 'testnombre',
      role: 'admin',
      token: 'fasfasfds23fsfsdfs',
      password: '12345',
    };

    service.establecerUserAuth(mock_result);

    const spyOnNavigate= spyOn(TestBed.inject(Router), 'navigate');

    service.logout();

    const tokenLs= localStorage.getItem('token')

    expect(tokenLs).toBe(null);
    expect(spyOnNavigate).toHaveBeenCalled();
  })
});
