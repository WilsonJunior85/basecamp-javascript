// Import stylesheets
import './style.css';

function validaArray(arr, num) {
  if (!arr && !num) throw new ReferenceError('Envie os parâmetros');

  if (typeof arr !== 'object')
    throw new TypeError('O array precisa ser do tipo object');

  if (typeof num !== 'number')
    throw new TypeError('O array precisa ser do tipo number');

  if (arr.length !== num) throw new RangeError('Tamanho inválido');
}
