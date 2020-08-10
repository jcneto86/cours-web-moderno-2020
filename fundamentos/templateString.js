const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";
const template1 = `Olá ${nome}!`;
const template2 = `
    Olá
    ${nome}!
`;
console.log(concatenacao);
console.log(template1);
console.log(template2);
// Operaçôes
console.log(`1 + 1 = ${1 + 1}`);

const up = testo => testo.toUpperCase();
console.log(`Ei... ${up("cuidado")}`)
