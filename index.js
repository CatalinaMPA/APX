
const dataPelis = require("./pelis.json");


//arranca con --
function parsearArgumentos(argv) {
    const respuesta = {};

    argv.forEach(function (item, ind) {
        // indica el índice
        if (item.startsWith("--")) {
            const nombreSinGuiones = item.slice(2).toLowerCase();
            respuesta[nombreSinGuiones] = argv[ind + 1];
        }
    });
    return respuesta;
};


//buscar pelis
const buscar = function (texto, arrayPeliculas) {
    return arrayPeliculas.filter(function (pelis) {
      let pelisMinisculas = pelis.title.toLowerCase();
      return pelisMinisculas.includes(texto.toLowerCase());
    });
};


//ordenar resultados
const ordenar = function (tittle, arrayPeliculas) {
    return arrayPeliculas.sort(function (a, b) {
      if (a.tittle > b.tittle) {
        return 1;
      }
      if (a.tittle < b.tittle) {
        return -1;
      }
      return 0;
    });
};


//genero
const genero = function (texto, arrayPeliculas) {
    let resultado1 = [];
    arrayPeliculas.forEach(function (elemento) {
      if (elemento.tags.includes(texto)) {
        resultado1.push(elemento);
      }
    });
    return resultado1;
};


function main() {
    const comandosEject = parsearArgumentos(process.argv);
  
    const resultado = dataPelis.buscarCriterios(comandosEject);
  
    console.table(resultado);
}
  
main();




