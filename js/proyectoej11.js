let numero1 = parseInt(prompt("ingrese el numero"));

let divisiblepordos = 0;
let divisibleportres = 0;
let divisibleporcinco = 0;
let divisibleporsiete = 0;

if (numero1 % 2 == 0) {
  divisiblepordos = 1;
}
if (numero1 % 3 == 0) {
  divisibleportres = 1;
}
if (numero1 % 5 == 0) {
  divisibleporcinco = 1;
}
if (numero1 % 7 == 0) {
  divisibleporsiete = 1;
}

if (divisiblepordos == 1) {
  document.write("Es divisible por 2 ");
}
if (divisibleportres == 1) {
  document.write("Es divisible por 3 ");
}
if (divisibleporcinco == 1) {
  document.write("Es divisible por 5 ");
}
if (divisibleporsiete == 1) {
  document.write("Es divisible por 7 ");
}
if (
  divisiblepordos == 0 &&
  divisibleportres == 0 &&
  divisibleporcinco == 0 &&
  divisibleporsiete == 0
) {
  document.write("No es divisible por ninguno de estos numeros");
}
