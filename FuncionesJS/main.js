const ejercicio1  = (name, surname) => {  
    return name + surname;
}

function ejercicio2(edad, localidad){
    edad = 23;
    localidad = "Barcelona";
    if(true){
        console.log(edad)
        console.log(localidad)
    };
}

const ejercicio3 = function(...valores){ 
    valores.forEach(element => {
        console.log(element)
    });
}

console.log(ejercicio1('Marc ', 'Adell Fernandez'));
ejercicio2();
ejercicio3(1, 2, 3, 4, 5);
