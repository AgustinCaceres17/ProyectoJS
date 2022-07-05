let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
console.log(numero1);
console.log(numero2);
if (numero1 > numero2) {
  document.write("el numero mas grande es el numero 1: " + numero1);
} else if (numero1 == numero2) {
  document.write("ambos numeros son iguales, numero ingresado: " + numero1);
} else {
  document.write("el segundo numero es mayor: " + numero2);
}