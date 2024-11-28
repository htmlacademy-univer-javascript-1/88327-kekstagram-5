function checkStringLength( str, count ){
  return str.length <= count;
}

function isPalindrom( str ){

  str = str.replaceAll( /\s/g, '' ).toLowerCase()
  var checkStr = ""

  for ( let i = str.length-1; i>=0 ; i--){
    checkStr += str[i]
  }

  return checkStr == str
}

function getNumbersFromString( str ){

  str = str.toString().replaceAll( /\D/g, '' ).toLowerCase()
  str = parseInt(str)
  return str

}

// console.log( checkStringLength( 'Абдулнасир', 9 ) )
// console.log( checkStringLength( 'Абдулнасир', 10 ) )
// console.log( checkStringLength( 'Абдулнасир', 13 ) )

// console.log( isPalindrom( '-saippuak  ivikaUpp ias-' ) )
// console.log( isPalindrom( 'asdassasdasxc' ) )

// getNumbersFromString('2023 год');            // 2023
// getNumbersFromString('ECMAScript 2022');     // 2022
// getNumbersFromString('1 кефир, 0.5 батона'); // 105
// getNumbersFromString('агент 007');           // 7
// getNumbersFromString('а я томат');           // NaN
// getNumbersFromString(2023); // 2023
// getNumbersFromString(-1);   // 1
// getNumbersFromString(1.5);  // 15
