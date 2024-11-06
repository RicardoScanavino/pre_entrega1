//Calcular edad promedio de una cantidad determinada de personas

function calcualarEdad(){

    let cantidadPesonas = parseInt(prompt("ingrese la cantidad de persona que desea registrar y calcular el promedio de edad"));

    //validando que no se ingrese un string
    while (Number.isNaN(cantidadPesonas)) {
        cantidadPesonas = parseInt(prompt("ingrese la cantidad de persona que desea registrar y calcular el promedio de edad"));
    }

    let sumaEdades = 0;
    for (let i=1; i<=cantidadPesonas; i++){
        let edad = parseInt(prompt("ingrese la edad de la persona"));
        
        //validando que no se ingrese un string ni la edad menor a 0
        while(Number.isNaN(edad) || edad < 0){
            edad = parseInt(prompt("ingrese la edad de la persona correctamente"));
        }
        
        sumaEdades = sumaEdades + edad;
    }

    let promedio = sumaEdades / cantidadPesonas;
    return "El promedio de edad es: "+promedio

}

console.log(calcualarEdad());