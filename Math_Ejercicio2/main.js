function ejercicio1(){
    let vari = Math.round(Math.random());
    if(vari === 1){
        console.log(vari);
        return "Cara";
    }
    else{
        console.log(vari);
        return "Cruz";
    }

}

console.log(">>> Ejercicio 1");
console.log(ejercicio1());
