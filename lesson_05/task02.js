'use strict';

{
  //Делает все буквы строчными, а одну случайную прописной.

  const randomUppercase = (str) => {
    str = str.toLowerCase();
    let randomIndex = Math.floor(Math.random() * str.length);
    let replacebleLetter = str[randomIndex];
    let newLetter = str[randomIndex];
    newLetter = newLetter.toUpperCase();
    str = str.replace(replacebleLetter, newLetter);
    return str;
  };
  console.log(randomUppercase('аБЫрВаЛг'));
}
