let isAtivo = true;
console.log(isAtivo);
isAtivo = 1;
console.log(!!isAtivo);
//Valores que podem ser resolvidos como boolean em JS
console.log("Os verdadeiros");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"testo");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsos");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log("Para finalizar....");
console.log(!!("" || null || 0 || " "));

const nome1 = "";
const nome2 = "João";
console.log(nome1 || "Desconhecido");
console.log(nome2 || "Desconhecido");
