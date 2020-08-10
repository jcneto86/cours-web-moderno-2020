function rand({ min = 0, max = 1000 }) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const array = [50,80];
console.log(rand(array));
console.log(rand([60, 30]));
console.log(rand([, 10]));
console.log(rand([]));
console.log(rand());
