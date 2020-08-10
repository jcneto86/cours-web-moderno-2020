// Armazenar uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
};
imprimirSoma(1, 2);

// Armazenar função arrow em uma variável
const soma = (a, b) => {
    return a + b;
};
console.log(soma(1, 2));

// Retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2, 1));
const funcaoComUmParametro = a => a ;
console.log(funcaoComUmParametro(2));