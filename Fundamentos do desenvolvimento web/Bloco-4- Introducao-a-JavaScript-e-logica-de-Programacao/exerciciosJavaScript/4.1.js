const a = 3;
const b = 9;
const c = 2;
const valor = "-10";

let adição = (a + b);
let subtração = (a - b);
let multiplicação = (a * b);
let divisão = (a / b);
let módulo = (a % b); 

   if(c > a && c > b) {
     console.log(c);
    
}
   if(a > b && a > c) {
     console.log(a);
}
   if(b > a && b > c ) {
     console.log(b);
}

switch(valor) {
    case "100":
     console.log("positive");
     break;
    
    case "-100":
     console.log("negative");
     break;

    default:
     console.log("zero");
}