let palabra1 = prompt("ingrese una palabra")
let contadorvocales = 0; // creamos una variable para contar las vocales 

for (x=0; x<palabra1.length; x++){
    if (palabra1.charAt(x) == "a"){ //preguntamos si la letra en el indice x es vocal
        contadorvocales++;
    }
    else if (palabra1.charAt(x) == "e"){ //preguntamos si la letra en el indice x es vocal
        contadorvocales++;
    }
    else if (palabra1.charAt(x) == "o"){ //preguntamos si la letra en el indice x es vocal
        contadorvocales++;
    }
    else if (palabra1.charAt(x) == "u"){ //preguntamos si la letra en el indice x es vocal
        contadorvocales++;
    }
    else if (palabra1.charAt(x) == "i"){ //preguntamos si la letra en el indice x es vocal
        contadorvocales++;
    }
}
document.write("la palabra tiene vocales: " + contadorvocales)


// mostramos la cantidad de vocales en pantalla




