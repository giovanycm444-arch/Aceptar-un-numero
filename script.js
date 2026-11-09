// Pedimos el número por teclado (el prompt devuelve un texto, por lo que usamos Number o parseInt para convertirlo)
let numero = parseInt(prompt("Ingrese un número positivo:"));

// Verificamos si es un número válido y positivo
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingrese un número positivo válido.");
} else {
    // Usamos el operador módulo (%) para ver si el residuo de dividir entre 2 es 0
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es PAR.");
    } else {
        console.log("El número " + numero + " es IMPAR.");
    }
}