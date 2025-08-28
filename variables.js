let contador; 

const url ="http//miapi.com";

let edad = 19;
let acceso = " "

if (edad < 16) {
    acceso = 'prohibido';
    console.log(acceso);

} else if (edad <= 16 && edad <= 18) {
    acceso = 'permitido sòlo acompañado con un mayor';
    console.log(acceso);

} else {
    acceso = 'permitido';
   
}
 console.log(acceso);