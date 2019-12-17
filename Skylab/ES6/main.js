const soma = (a = 0, b = 0) => a + b;

console.log(`Sem parâmetro: ${soma()}`);
console.log(`Com o primeiro parâmetro: ${soma(1)}`);
console.log(`Com os dois parâmetros: ${soma(1, 2)}`);