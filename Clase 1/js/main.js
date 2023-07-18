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

let usuario1 = "Nico";
let usuario2 = "Nicovidd";

let nombreUsuario =prompt("Ingresa tu nombre de usuario");

// if(nombreUsuario== "Nico") {
//     alert("Bienvenido" + " " + nombreUsuario);
// }else if (nombreUsuario == "Nicovid") {
//     alert("Bienvenido" + " " + nombreUsuario);
// }else{
//     alert("Detectamos un intruso")
// }

if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert("Bienvenido " + nombreUsuario);
} else {
    alert("Vete de mi web");
}