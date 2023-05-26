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

export interface Subject {
  id: number;
  nombre: string;
  description?: string;
}

export interface Inscripcion {
  id: number;
  studentId: number;
  courseId: number;
  subjectId: number;
}

export interface InscripcionWithStudent extends Inscripcion {
  student: Estudiantes;
}

export interface InscripcionWithSubject extends Inscripcion {
  subject: Subject;
}

export interface InscripcionWithCourse extends Inscripcion {
  course: Cursos;
}

export interface CreateInscripcionData {
  studentId: number;
  courseId: number;
  subjectId: number;
}

export type InscripcionWithAll = InscripcionWithStudent & InscripcionWithSubject & InscripcionWithCourse;