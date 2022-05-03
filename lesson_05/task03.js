'use strict';

{
  const reverseWord = (str) => {
    console.log(str);
    let reversed = '';
    for (let i = 0; i <= str.length - 1; i++) {
      reversed += str[str.length - 1 - i];
    }
    return reversed;
  };

  console.log(reverseWord('Palace'));
}
