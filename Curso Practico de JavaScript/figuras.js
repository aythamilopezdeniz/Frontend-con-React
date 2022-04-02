// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura){
    return(base * altura) / 2;
};

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrada() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

function alturaTriangulo(ladoA, ladoB, base) {
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const ladoPequenoB = base / 2;
        const ladoPequenoBase = ladoA;

        const ladoPequenoBCuadrado = ladoPequenoB * ladoPequenoB;
        const ladoPequenoBaseCuadrado = ladoPequenoBase * ladoPequenoBase;

        const ladoPequenoA = Math.sqrt(ladoPequenoBaseCuadrado - ladoPequenoBCuadrado);
        const trianguloAltura = ladoPequenoA;
        return trianguloAltura;
    }
}