function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || min >= max) {
    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomFloat(min, max, numberOfDecimal) {
  if (min < 0 || max < 0 || min >= max) {
    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }
  let floatNumber =  Math.random() * (max - min + 1) + min;
  return floatNumber.toFixed(numberOfDecimal);
}
