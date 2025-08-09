//Punto 1 - convertidorTemp

function convertidorTemp(temperaturaC){
    let tf = (temperaturaC * 9/5) + 32;
    return tf;
}

console.log(convertidorTemp(-40));

//Punto 2 - resolvedor

function resolvedor(a,b,c,select){
    let x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
    let x2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);

    if(select === 1){
        return x1;
    }else if(select === 2){
        return x2;
    }else{
        return "Error";
    }
}
console.log(resolvedor(1,5,4,2));


//Punto 3 - mejorParidad

function mejorParidad(num){
    if(num % 2 === 0){
        return "El numero es par";
    }else{
        return "El numero es impar";
    }
}
console.log(mejorParidad(1));



//Punto 4 - peorParidad
function peorParidad(num){
    if(num === 0){
        return "El numero es par";
    }else if(num === 1){
        return "El numero es impar";
    }else if(num === 2){
        return "El numero es par";
    }else if(num ===  3){
        return "El numero es impar";
    }else if(num === 4){
        return "El numero es par";
    }else if(num === 5){
        return "El numero es impar";
    }else if(num === 6){
        return "El numero es par";
    }else if(num === 7){
        return "El numero es impar";
    }else if(num === 8){
        return "El numero es par";
    }else if(num === 9){
        return "El numero es impar";
    }else if(num === 10){
        return "El numero es par";
    }else{
        return "Error, se salió del rango";
    }
}
console.log(peorParidad(2));








