'use strict';

{
  const productName = 'Кресло';
  const productAmount = 5;
  const productCategory = 'Мебель';
  const productPrice = 14000;

  // console.log(productName);
  // console.log('Общая сумма товара: ' + productAmount * productPrice + '₽');
}

{
  const productName = 'Пылесос';
  const productAmount = 14;
  const productCategory = 'Бытовая техника';
  const productPrice = 8000;
}

{
  const productNameFromUser = prompt('Введите наименование товара') + '';
  console.log(typeof productNameFromUser);

  const productAmountFromUser = +prompt('Введите количество товара');
  console.log(typeof productAmountFromUser);

  const productCategoryFromUser = prompt('Введите категорию товара') + '';
  console.log(typeof productCategoryFromUser);

  const productPriceFromUser = +prompt('Введите стоимость товара');
  console.log(typeof productPriceFromUser);

  console.log(
    `На складе ${productAmountFromUser} единиц товара "${productNameFromUser}" категории "${productCategoryFromUser}" на сумму ${
      productPriceFromUser * productAmountFromUser
    } деревянных.`
  );
}
