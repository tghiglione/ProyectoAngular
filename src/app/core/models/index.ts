export interface Estudiantes {
    name: string;
    lastName: string;
    email: string;
  } 

export interface NavLinks{
  path:string,
  title:string
}

export interface Cursos{
  curso:string,
  comision:number
}

export interface LogInFormValue {
  email: string;
  password:string
}

export interface Usuario{
  id: number,
  nombre: string,
  apellido: string,
  email: string,
  password: string,
  token: string,
}