// // Lista de compras
// listaDeCompras[3] = 'Tomates';
// listaDeCompras[1] = 'Lechuga';

// // Ver lista de compras
// var elementoDelArray = listaDeCompras[1];
// console.log(elementoDelArray);

// // Lenght
// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);

// // PUSH y UNSHIFT
// var colores = ['Amarillo', 'Azul'];
// colores.push('Rojo');
// colores.unshift('Verde');

// console.log(colores);

// // POP y SHIFT
// colores.shift();
// colores.pop();

// console.log(colores);

// // INCLUDES
// var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
// var existeDali = pintores.includes('Dalí');

// console.log(existeDali);

// // EVERY
// var numeros = [ 1, 6, 8, 9, 43 ];
// var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

// console.log(cumplenCondicion);

// // SPLIT
// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');

// console.log(palabraSeparada);

// // JOIN
// var palabraArreglada = palabraSeparada.join('');

// console.log(palabraArreglada);
// // FOREACH
// var numeros = [ 1, 2, 3, 4 ];
// numeros.forEach( (num) => { console.log(num) } )

// // MAP
// var numeros = [ 1, 2, 3, 4 ];
// var masUno = numeros.map( (num) => { return num + 1 } );

// console.log(masUno);

//SPLIT
// var palabra = "Henri";
// var palabraSeparada = palabra.split('')
// palabraSeparada.pop()
// palabraSeparada.push("y")
// //console.log(palabraSeparada)
// var palabraArreglada = palabraSeparada.join('')
// console.log(palabraArreglada)

var stringDePalabras = "palabras";
   var palabraSeparada = stringDePalabras.split('')
   palabraSeparada.pop()
   //console.log(palabraSeparada)
   var palabraArreglada = palabraSeparada.join('')
   console.log(palabraArreglada)
