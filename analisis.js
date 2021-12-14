

//Analisis de salarios

const salariosPer = peruSalarios.map(function(personita){
    return personita.salary;
});

const salariosSorted = salariosPer.sort(function(a,b){
    return a-b;
}); //sort no genera un nuevo array, arregla el array existente


//Utils o Helpers

function esPar(numerito){
    return (numerito % 2 === 0);
};

function calcularMediaAritmetica (lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

//Calculando mediana general

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};

//Calculando la mediana del top 10% salarios



const spliceStart = (salariosSorted.length * 90) / 100;
const spliceCount = (salariosSorted.length - spliceStart);

const salariosPeruTop10 = salariosSorted.splice(spliceStart, spliceCount);
//cambia el contenido del array, no genera nuevo array

//para extraer el 10% sin alterar el arreglo original usamos SLICE

//.slice(inicio, final), es decir, .slice(spliceStart, salariosSorted.length)

const medianaGeneralPeru = medianaSalarios(salariosSorted);
const medianaTop10Peru = medianaSalarios(salariosPeruTop10);

console.log(medianaGeneralPeru, medianaTop10Peru);
