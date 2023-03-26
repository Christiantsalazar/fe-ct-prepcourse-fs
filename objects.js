 var deportes = { 
     conBalon: ['Football' , 'Basquetball', 'Rugby'], 
     sinBalon: ['Boxeo', 'Surf', 'Trekking']
};

//ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador: true} };
// console.log(persona.edad)

//ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: {esProgramador: true} };
persona.nombre = "Martin";
//console.log(persona.nombre);

//CREAR
var autos = {}
autos.marcas = ['Ford', 'Ferrari', 'Audi']
//DELETE
delete autos.marcas;
//console.log(autos)

var misFunciones = {
    saludar: function () { 
        //console.log("Hola")
    },
};

//misFunciones.saludar();

var atuendos = { manos: ['piernas', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };
atuendos["piernas"] = ["Bermudas", "Pantalones"];
//console.log(atuendos)

//BRACKETNOTATION
var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
    comidas[propUno] = ['Frutas', 'Vegetales'];
    comidas[propDos] = ['Hamburguesa', 'Papas Fritas'];
};
diferenciaDeNotaciones('saludable', 'noSaludable');
//console.log(comidas);

var libro = { autor: 'Borges', genero: 'Policial', ano: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');
//console.log(tienePropiedad)

var todasLasPropiedades = Object.keys(libro);
//console.log(todasLasPropiedades)

//BUCLEFORIN
var mundo = { continentes: 7, paises: 195, oceanos: 5 }
for(var prop in mundo){
    //console.log('Esta es la propiedad: ' + prop);
    //console.log('Este es el valor: ' + mundo[prop]);
}

var mascota = { 
    animal: 'Perro' , 
    raza: 'Ovejero Aleman', 
    amistoso: true, 
    duena: 'Maria Lopez', 
    info: function() {
        console.log("Mi perro es un " + this.raza)
    },
};

mascota.info();