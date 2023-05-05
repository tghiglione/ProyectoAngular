import {  TestBed } from '@angular/core/testing';

import { UserLogComponent } from './user-log.component';
import { LoginService } from '../core/services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginServiceMock } from '../core/services/login.service.mock';
import { MatIconModule } from '@angular/material/icon';

describe('Pruebas del UserLogComponent', () => {
  let component: UserLogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLogComponent ],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        PipesModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatIconModule
      ],
      providers: [
        {
          provide: LoginService,
          useClass: LoginServiceMock,
        }
      ]
    })
    .compileComponents();

    const fixture = TestBed.createComponent(UserLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Si el campo email esta vacio, debe ser invalido',()=>{
    component.logInForm.setValue({email: null, password: null});
    expect(component.emailControl.invalid).toBeTrue();
  });

  it('Si el campo password esta vacio, debe ser invalido',()=>{
    component.logInForm.setValue({email: null, password: null});
    expect(component.passwordControl.invalid).toBeTrue();
  });

  it('Si el loginForm es invalido, deben pintarse ambas campos invalidos',()=>{
      component.logInForm.setValue({email: null, password: null});
      const spyOnMarkAllAsTouched= spyOn(component.logInForm, 'markAllAsTouched');
      component.logIn();
      expect(component.logInForm.invalid).toBeTrue();
      expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
  });

  it('Si el loginForm es valido, debe llamarse al login del LoginService',()=>{
    component.logInForm.setValue({email:'test@mail.com', password: '12345'});
    const spyOnService= spyOn(TestBed.inject(LoginService), 'login');
    component.logIn();
    expect(component.logInForm.valid).toBeTrue(); //esta linea me sale false
    expect(spyOnService).toHaveBeenCalled();
});
});
