// Função sem retorno(saida)
function imprimirSoma(a, b) {
    console.log(a + b);
}
imprimirSoma(1, 2);
imprimirSoma(2);
imprimirSoma(1, 12, 5, 6, 3, 9, 8);
imprimirSoma();

// Função com retorno(saida)
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3));
