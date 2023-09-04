function sumar(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function restar(valor1, valor2) {
    const resultado = valor1 - valor2;
    return resultado;
}

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

function dividir(valor1, valor2) {
    const resultado = valor1 / valor2;
    return resultado;
}

function calculadora() {
    while (true) {
        const valor1 = parseInt(prompt("Ingrese el 1er valor:"));
        const operacion = prompt("Que operación queres hacer? (+ - * /) o 'salir' para salir:");
        const valor2 = parseInt(prompt("Ingrese el 2do valor:"));
        

        if (operacion === 'salir') {
            alert("Saliendo de la calculadora.");
            break;
        }

        switch (operacion) {
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
            default:
                alert("Operación no válida. Intente de nuevo.");
        }
    }
}

calculadora();
