let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let numero3 = parseInt(prompt("ingrese el tercer numero"));
console.log(numero1);
console.log(numero2);
console.log(numero3);
if (numero1 > numero2) {
  document.write("el numero mas grande es el numero 1: " + numero1);
} else if (numero2 > numero3) {
    document.write("el numero mas grande es el numero 2: " + numero2);
} else if (numero3 > numero1 ) {
    document.write("el numero mas grande es el numero3: " + numero3);
} else if (numero1 == numero2) {
  document.write("los numeros son iguales, numero ingresado: " + numero1);
} else if (numero2 == numero3){
    document.write("los numeros son iguales, numero ingresado: " + numero2)
} else {
    document.write("los numero son iguales, numero ingresado: " + numero1)
} 
