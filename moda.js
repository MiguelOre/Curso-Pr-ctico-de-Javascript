

//Moda

const lista1 = [1,2,3,1,2,3,4,2,2,2,1];
const lista2 = ["platano", "manzana", "durazno", "pera", "pera", "pera", "pera", "pera"];


const lista1Count = {};


lista1.map(function(elemento){ //con el map hacemos que la lista1Count contenga el numero de veces que se repite
    //cada elemento en la lista1
    if (lista1Count[elemento]){
        lista1Count[elemento] += 1;
        //lista1Count[x] es el valor de ese atributo, carro[marca] = toyota

    } else {
        lista1Count[elemento] = 1;
    }
    }
);




const listArray = Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = listArray[listArray.length - 1];

const modita = moda[1];


