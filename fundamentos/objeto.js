const prod1 = {};
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.9;
prod1["Desconto legal"] = 0.4; // Evitar atributos com espaços
console.log(prod1);
const prod2 = {
    ome: "Celular Ultra Mega",
    preco: 79.9,
    obj: {
        blabla: 1,
        obj: {
            blabla: 1,
        },
    },
};

// JSON =\ de JS Object
// '{ "nome": "Celular Ultra Mega", "preco": "4998.9", "Desconto legal": "0.4" }'

console.log(prod2);
