// Desafio 11
function generatePhoneNumber(numbers) {
  let numbersSize = numbers.length;
  if (numbersSize > 11 || numbersSize < 11){
    return "Array com tamanho incorreto.";
  }
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] < 0 || numbers[index] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    } 
  }
  
  let telephoneNumber = '(' + numbers[0] + numbers[1] + ')' + ' ' + numbers[2] + numbers[3] +
  numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];

  numberSorted = numbers.sort();
  for (let i = 0; i < numberSorted.length; i += 1){
    if (numberSorted[i] === numberSorted[i+1] && numberSorted[i] === numberSorted[i+2]){
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  return telephoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(stringReceived) {
  let numberRemover = /\d+/;
  let numberContainer = stringReceived.match(numberRemover);
  if(numberContainer === 1){
    return (numberContainer) + ' ' + 'copo de água';
  } else if (numberContainer > 1 && numberContainer <= 9){
    return (numberContainer + 1) + ' ' + 'copo de água';
  } else {
    return 'Pedido inválido';
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
