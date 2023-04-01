const argumentosBasic = require("./index");
const dataPelis = require("./pelis.json");
const fs = require("fs");

console.log(dataPelis)

exports.buscarCriterios = function (criterios) {
    let busquedaTemprana = dataPelis();
  
    if (criterios.buscar) {
        busquedaTemprana = buscar(criterios.buscar, busquedaTemprana);
    }
  
    if (criterios.ordenar) {
        busquedaTemprana = ordenar(criterios.ordenar, busquedaTemprana);
    }
    if (criterios.genero) {
        busquedaTemprana = genero(criterios.genero, busquedaTemprana);
    }
    if (criterios.hasOwnProperty("no-format")) {
        busquedaTemprana = JSON.stringify(busquedaTemprana);
    }
  
    return busquedaTemprana;
};




