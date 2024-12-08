function checkStringLength(str, count){
  return str.length <= count;
}

function isPalindrom(str){
  const normalizedStr = str.replaceAll(/\s/g, '').toLowerCase();
  let checkStr = '';
  for (let i = normalizedStr.length - 1; i >= 0 ; i--){
    checkStr += normalizedStr[i];
  }

  return checkStr === normalizedStr;
}

function getNumbersFromString(str){
  const normalizedStr = str.toString().replaceAll(/\D/g, '').toLowerCase();
  return parseInt(normalizedStr, 10);
}

checkStringLength('Абдулнасир', 9);
isPalindrom('-saippuak  ivikaUpp ias-');
getNumbersFromString('2023 год');

// console.log(checkStringLength('Абдулнасир', 9)); //false
// console.log(checkStringLength('Абдулнасир', 10)); //true
// console.log(checkStringLength('Абдулнасир', 13)); //true

// console.log(isPalindrom('-saippuak  ivikaUpp ias-')); //true
// console.log(isPalindrom('asdassasdasxc')); // false

// console.log(getNumbersFromString('2023 год')); // 2023
// console.log(getNumbersFromString('ECMAScript 2022')); // 2022
// console.log(getNumbersFromString('1 кефир, 0.5 батона')); // 105
// console.log(getNumbersFromString('агент 007')); // 7
// console.log(getNumbersFromString('а я томат')); // NaN
// console.log(getNumbersFromString(2023)); // 2023
// console.log(getNumbersFromString(-1)); // 1
// console.log(getNumbersFromString(1.5)); // 15
