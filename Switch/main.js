function ejercicio1(mesAnual){   
    switch(mesAnual){
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        case 6:
            console.log("Junio");
            break;
        case 7:
            console.log("Julio");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Septiembre");
            break;
        case 10:
            console.log("Ocutbre");
            break;
        case 11:
            console.log("Noviembre");
            break;
        case 12:
            console.log("Diciembre");
            break;
        default:
            console.log("No es un mes del año.");
            break;
    }
}

function ejercicio2(numString){ 
    console.log("Before is a " + typeof numString);
        switch(numString){
            case "1":
                numString = 1;
                console.log(numString);
                console.log("And NOW is a " + typeof numString);
                break;
            case "2":
                numString = 2;
                console.log(numString);
                console.log("And NOW is a " + typeof numString);
                break;
            case "3":
                numString = 3;
                console.log(numString);
                console.log("And NOW is a " + typeof numString);
                break;
            case "4":
                numString = 4;
                console.log(numString);
                console.log("And NOW is a " + typeof numString);
                break;
            case "5":
                numString = 5;
                console.log(numString);
                console.log("And NOW is a " + typeof numString);
                break;
            default:
                console.log("El valor no esta dentro del rango.")
        }  
    }

    
console.log(">>> Ejercicio 1");
ejercicio1(8);
console.log("");
console.log(">>> Ejercicio 2");
ejercicio2("1");
console.log("");
ejercicio2("2");
console.log("");
ejercicio2("3");
console.log("");
ejercicio2("4");
console.log("");
ejercicio2("5");
