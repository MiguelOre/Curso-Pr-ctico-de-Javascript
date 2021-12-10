

//Descuentos

// const precioOriginal = 120;

// const descuento = 20;

// const porcentajePrecioConDescuento = 100 - descuento;

// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });


//Aqui interactuamos con el HTML

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const valuePrice = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
};