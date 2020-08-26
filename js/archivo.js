//Esto arroja el valor de una variable
class Persona {
nombre = null;
edad = null;
}

var persona = new persona();
persona.nombre = "albert";
persona.edad = 20;

console.log(persona.nombre + persona.edad);

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });
