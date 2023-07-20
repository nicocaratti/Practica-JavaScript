// ==           Es igual
// ===          Es estrictamente igual
// !=           Es distinto
// !==          Es estrictamente distinto
// < <= > >=    Menor / Mayor / Menor o igual / Mayor o igual

// &&           Operador AND (y)
// ||           Operador OR (o)
// !            Operador NOT (no)

// let edad = prompt("Ingresa tu edad");

// if (edad >= 18){
//     alert("Podes tomar")
// }else {
//     alert ("No podes tomar")
// }

// let hora = prompt ("Ingrea la hora");

// if(hora>6 && hora<12) {
//     alert("Buenos dias");
// }else if (hora >=12 && hora<20){
//     alert("Buenas tardes");
// }else{
//     alert("Anda a dormir")
// }

// let usuario1 = "Nico";
// let usuario2 = "Nicovidd";

// let nombreUsuario =prompt("Ingresa tu nombre de usuario");

// // if(nombreUsuario== "Nico") {
// //     alert("Bienvenido" + " " + nombreUsuario);
// // }else if (nombreUsuario == "Nicovid") {
// //     alert("Bienvenido" + " " + nombreUsuario);
// // }else{
// //     alert("Detectamos un intruso")
// // }

// if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
//     alert("Bienvenido " + nombreUsuario);
// } else {
//     alert("Vete de mi web");
// }




// CLASE 3


//for
// for (let x = 0; x < 10; x= x + 1) {
//     console.log("Ciclo numero " + x);
// }

//for anidado

// for (let x = 0; x < 10; x= x + 1) {
//     console.log("Ciclo numero " + x);

//     for (let y= 0; y < 5; y ++){
//         console.log("Ciclo secundario " + y);
//     }
// }

//while
// let x = 0;
// while(x < 10) {
//     alert("Ahora x vale " + x);
//     console.log("Ciclo numero " + x);
//     x = x + 1;
// }

//do while...

// let z= 0;
// do{
//     console.log("Ciclo numero " + z)
//     z++;
// } while(z< 10);

//switch

let diaDeLaSemana = Number(prompt("Ingrese dia de la semana con numeros")); 

switch (diaDeLaSemana) {
    case 1:
    console.log("Lunes");
    break;
    case 2:
    console.log("Martes");
    break;
    case 3:
    console.log("Miercoles");
    break;
    case 4:
    console.log("Jueves");
    break;
    case 5:
    console.log("Viernes");
    break;
    case 6:
    console.log("Sabado");
    break;
    case 7:
    console.log("Domingo");
    break;
default:
    console.log("No existe ese día");
    break;
}
