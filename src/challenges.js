// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  areaTotal = (base * height) / 2;
  return areaTotal;
}

// Desafio 3
function splitSentence(name) {
  return name.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  return stringArray[stringArray.length-1] + ', ' + stringArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let counter = 0;
  let max = Math.max.apply(null, array);
  for (let index = 0; index < array.length; index += 1){
    if (array[index] === max){
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse,  cat1, cat2) {
  let distancecOfCat1 = Math.abs(mouse - cat1);
  let distanceOfCat2 = Math.abs(mouse - cat2);
  if (distancecOfCat1 < distanceOfCat2){
    return 'cat1';
  } else if (distancecOfCat1 > distanceOfCat2){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayFizz) {
  let fizzNewArray = [];
  for (let index = 0; index < arrayFizz.length; index += 1 ){
    if (arrayFizz[index] % 3 == 0 && arrayFizz[index] % 5 != 0) {
      fizzNewArray.push('fizz');
    } else if (arrayFizz[index] % 3 != 0 && arrayFizz[index] % 5 == 0){
      fizzNewArray.push('buzz');
    } else if (arrayFizz[index] % 3 == 0 && arrayFizz[index] % 5 == 0){
      fizzNewArray.push('fizzBuzz');
    } else if (arrayFizz[index] % 3 != 0 && arrayFizz[index] % 5 != 0){
      fizzNewArray.push('bug!');
    }
  }
  return fizzNewArray;
}

// Desafio 9
function encode(arrayToBeCodificated) {
    let encodificator = arrayToBeCodificated
    .replace(/a/g,'1')
    .replace(/e/g,'2')
    .replace(/i/g,'3')
    .replace(/o/g,'4')
    .replace(/u/g,'5');
    return encodificator;
}
function decode(arrayToBeDecodificated) {
  let decodificator = arrayToBeDecodificated
    .replace(/1/g,'a')
    .replace(/2/g,'e')
    .replace(/3/g,'i')
    .replace(/4/g,'o')
    .replace(/5/g,'u');
    return decodificator;
}

// Desafio 10
function techList(tech, name) {
  tech.sort();
  let objectStore = [];
  if(tech.length > 0){
    for (let index = 0; index < tech.length; index += 1) {
      objectStore.push({tech: tech[index], name: name})
    }
    return objectStore;
  } else {
    return 'Vazio!';
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
