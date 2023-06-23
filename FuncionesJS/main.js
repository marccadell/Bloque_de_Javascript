const ejercicio1  = (name, surname) => {  
    return name + surname;
}

console.log(ejercicio1('Marc ', 'Adell Fernandez'));
console.log("");


function ejercicio2(edad, localidad){
    edad = 23;
    localidad = "Barcelona";
    if(true){
        console.log(edad)
        console.log(localidad)
    };
}

ejercicio2();
console.log("");


const ejercicio3 = function(...valores){ 
    valores.forEach(element => {
        console.log(element)
    });
}

ejercicio3(1, 2, 3, 4, 5);
console.log("");


//--------------------------------------------
// Ejercicios de la Página .75

console.log("__________________________");
console.log("Segunda Parte de Ejercicios de Funciones:");

function ejercicio4(num1, num2, num3){
    let resultado = num1+num2+num3;
    return console.log(resultado);
}

console.log("");
console.log("Ejercicio 4:");
ejercicio4(2, 2, 18);


function ejercicio5(name, surname1, surname2){
    let resultado = name+surname1+surname2;
    return console.log(resultado+"");
}

console.log("");
console.log("Ejercicio 5:");
ejercicio5("Marc ","Adell ","Fernandez");


function ejercicio6(num1, num2){
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
console.log("Ejercicio 5:");
ejercicio6(6,9);
