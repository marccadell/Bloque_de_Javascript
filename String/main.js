function ejercicio1(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
       if(str[i] === "a"){
        newStr += "o";
       }else{
        newStr += str[i];
       }
    }
    console.log("String original: " + str)
    console.log("String modificado: " + newStr);
}

function ejercicio2(str){
    if(str.startsWith("aca")){
        console.log(true);
    }else{
        console.log(false);
    } 
}

function ejercicio3(str){
    if(str === "hola"){
        console.log("Hola ".repeat(3));
    }else{
        console.log(false);
    } 
}

console.log(">>> Ejercicio 1");
ejercicio1("adgagagadgad");
console.log("");
console.log(">>> Ejercicio 2");
ejercicio2("academia");
ejercicio2("escuela");
console.log("");
console.log(">>> Ejercicio 3");
ejercicio3("hola");



