// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var pessoa = {
  corCabelo: 'loiro',
  idade: 36,
};
console.log(pessoa.corCabelo);



var meuArray = ['Maria', 1, -23];
console.log(pessoa['idade'], meuArray[0]);
console.log(meuArray.length);



function soma(a, b) {
  return a + b;
}
var resultado = soma(1, 2);
console.log(resultado);



var cachorros = ['Dobermam', 'vira-lata', 'Rotweiller'];
for (let modelos in cachorros) {
  console.log(cachorros[1]);
}



var carros = ['Onix', 'OnixPlus', 'EcoSport'];
for (let modelos = 0; modelos < carros.length; modelos++) {
  console.log(carros[modelos]);
}



let marcas = ['Nike', 'Osklen', 'Volcom'];
marcas.forEach(function (item, index) {
  console.log(item, index);
});
