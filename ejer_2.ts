class Alumnos {
    nombre: string;
    edad: number;
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  
  class Cursos {
    nombre: string;
    alumnos: Alumnos[];
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.alumnos = [];
    }
  
    adquirirAlumno(alumno: Alumnos) {
      this.alumnos.push(alumno);
    }
  }
  
  class Escuela {
    cursos: Cursos[];
  
    constructor() {
      this.cursos = [];
    }
  
    crearCurso(nombre: string) {
      const curso = new Cursos(nombre);
      this.cursos.push(curso);
      return curso;
    }
  }
  
 
  const escuela = new Escuela();
  
  const curso1 = escuela.crearCurso("Programacion");
  const curso2 = escuela.crearCurso("practica");
  
  const alumno1 = new Alumnos("Denis", 16);
  const alumno2 = new Alumnos("David", 15);
  const alumno3 = new Alumnos("Jesus", 17);
  
  curso1.adquirirAlumno(alumno1);
  curso1.adquirirAlumno(alumno2);
  curso2.adquirirAlumno(alumno3);
  
  console.log(curso1.alumnos); // [Alumno { nombre: 'Denis', edad: 19 }, Alumno { nombre: 'David', edad: 22 }]
  console.log(curso2.alumnos); // [Alumno { nombre: 'Jesus', edad: 28 }]