

// Figuras geometricas


//Codigo del cuadrado

console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = Math.pow(ladoCuadrado, 2);
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();


//Codigo del triangulo

console.group("Triangulo")
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm"
);

console.log(
    "La altura del triangulo es de: " + alturaTriangulo + "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();


//Codigo del circulo

console.group("Circulo");
const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + "cm");

const diametroCirculo = 2 * radioCirculo;
console.log("El diametro del circulo mide: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

const areaCirculo = Math.pow(radioCirculo, 2) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm2");
console.groupEnd();