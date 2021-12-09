

// Figuras geometricas


//Codigo del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
};

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
};


//Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
};

function areaTriangulo(base, altura){
    return (base * altura) / 2;
};


//Codigo del circulo

function diametroCirculo(radio){
    return radio * 2;
};

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); //llamada de una funcion dentro de una funcion
    return diametro * PI;
};

function areaCirculo(radio){
    return PI * (Math.pow(radio, 2));
};



/////// Aqui interactuamos con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value; //para obtener el valor que los usuarios ingresan
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value; //para obtener el valor que los usuarios ingresan
    const area = areaCuadrado(value);
    alert(area);
};

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    const valueLado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("inputLado2");
    const valueLado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("inputBase");
    const valueBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
};

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("inputAltura");
    const valueAltura = inputAltura.value;
    const inputBase = document.getElementById("inputBase");
    const valueBase = inputBase.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
};


function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
};

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
};

