// Par nome/valor
const saudacao = "Opa"; // Contexto léxico 1

function exec() {
    const saudacao = "Fala"; // Contexto léxico 1
    return saudacao;
}

// Objetos são grupos aninhados de pares  nome/valor
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua muito legal",
        numero: 340,
    },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);

// Contexto léxico 1
