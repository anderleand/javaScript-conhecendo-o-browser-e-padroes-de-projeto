let numeros = [3,2,11,20,8,7];
let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);
console.log(novosNumeros);


//array.map(function(currentValue, index, arr), thisValue)


let dobro = numeros.map(num => num * 2);
let metade = numeros.map(num => num/2);
let raiz = numeros.map(num => Math.sqrt(num);