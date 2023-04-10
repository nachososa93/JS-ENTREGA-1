// EJERCICIO 1

const parOimpar = (num1) => {
    if (num1 % 2 === 0) {
        console.log(`El numero ${num1} es par`);
    }
    else
    return console.log(`El numero ${num1} es impar`);

}

parOimpar(2);

// EJERCICIO 2

const CualEsMayor = (num1, num2) => {
    if (num1 > num2) {
        console.log(` ${num1} es mayor que ${num2}`);
    }
    else if (num1 < num2) {
        console.log(`${num1} es menor que ${num2}`)
    }
    return console.log("Ambos numeros son iguales");
}

CualEsMayor(6, 6);

// EJERCICIO 3

const multiplo = (num1) => {
    if (num1 % 5 === 0) {
        console.log(`${num1} es multiplo de 5`);
    }
    else return
}
multiplo(135)

// EJERCICIO 4

const numero = (num1) => {
    for (i = 0; i <= num1; i++) {
        console.log(i);
    }
    return
}
numero(32)

// // EJERCICIO 5
const numeroYpalabra = (num1, palabra) => {
    for (i = 0; i < num1; i++) {
        console.log(palabra);
    }
    return
}

numeroYpalabra(5, "pepe")

// // EJERCICIO 6

let arrayUno = [1, 2, 3, "perro", "gato", true, false]

const ejercicioSeis = () => {
    for (let i = 0; i < arrayUno.length; i++) {
        console.log(arrayUno[i]);
    }
    return
}
ejercicioSeis(arrayUno)

// EJERCICIO 7

let arrayNumeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const recorridoArray = () => {
    for (let i = 0; i < arrayNumeros.length; i++) {

        if ([i] == 4) {

            continue
        }
        console.log(arrayNumeros[i]);
    }
    return
}
recorridoArray(arrayNumeros)

// // EJERCICIO 8
let numeros = [1, 6, 3, 123, 73, 1878, 321, 2, -123]
const ejercicioOcho = (numeros, num1) => {
    for (let i = 0; i < numeros.length; i++) {
        console.log(`${numeros[i]}` * ` ${num1}`);
    }
    return

}
ejercicioOcho(numeros, 2)
