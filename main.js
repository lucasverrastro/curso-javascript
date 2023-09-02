//let nombre = "Lucas";
//let edad = 28;

//const texto1 = "Hola soy ";
//const texto2 = " y tengo ";
//const texto3 = " años.";

//alert(texto1 + nombre + texto2 + edad + texto3);

function sumar(valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}
function restar(valor1, valor2){
    const resultado = valor1 - valor2;
    return resultado;
}
function multiplicar(valor1, valor2){
    const resultado = valor1 * valor2;
    return resultado;
}
function dividir(valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}
function calculadora(){
    const valor1 = parseInt(prompt("Ingrese el 1er valor:"));
    const valor2 = parseInt(prompt("Ingrese el 2do valor:"));
    const operacion = prompt("Que operacion queres hacer? (+ - * /)");

    switch(operacion){
        case "+":
            alert("El resultado es " + sumar(valor1, valor2));
        break;
        case "-":
            alert("El resultado es " + restar(valor1, valor2));
        break;
        case "*":
            alert("El resultado es " + multiplicar(valor1, valor2));
        break;
        case "/":
            alert("El resultado es " + dividir(valor1, valor2));
        break;
    }
}
console.log (calculadora());