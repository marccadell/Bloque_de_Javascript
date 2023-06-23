
function ejercicio1(num1, num2, num3){
    let resultado = num1+num2+num3;
    return console.log(resultado);
}

console.log("");
console.log("Ejercicio 1:");
ejercicio1(2, 2, 18);


function ejercicio2(name, surname1, surname2){
    let resultado = name+surname1+surname2;
    return console.log(resultado+"");
}

console.log("");
console.log("Ejercicio 2:");
ejercicio2("Marc ","Adell ","Fernandez");


function ejercicio3(num1, num2){
    if(num1 > num2){
        console.log("La variable 'num1' es la mayor -> " + num1);
        return num1;
    }
    else{
        console.log("La variable 'num2' es la mayor -> " + num2);
        return num2;
    }
}

console.log("");
console.log("Ejercicio 3:");
ejercicio3(6,9);
