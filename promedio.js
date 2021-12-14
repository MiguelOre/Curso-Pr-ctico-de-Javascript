

//Promedio


// let sumaLista1 = 0; // let es una variable que admite cambios futuros en un ciclo loop por ejemplo

// for (let i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista1 + lista1[i];
// };

// const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica (lista){
    // let sumaLista = 0; 

    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // };

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

//Aprendiendo reduce
// function vamosaver (actual, nuevo){
//     return actual + nuevo;
// };

// function aprendiendoReduce (lista){
//     const sumita = lista.reduce(vamosaver);
//     return sumita;
// }