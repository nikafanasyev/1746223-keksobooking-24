const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//getRandomNumber(1, 10);

const getRandomPFloat = (min, max, numberOfDecimal) => {
  if (min < 0 || max < 0 || min >= max) {
    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }
  const floatNumber =  Math.random() * (max - min + 1) + min;
  return floatNumber.toFixed(numberOfDecimal);
}
//getRandomFloat(1, 10, 3);


//4 модуль
//Генерация объектов
const AVATAR = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
];
const TITLE = [
  'Первый заголовок',
  'Второй заголовок',
  'Третий заголовок',
];
const TYPE = [
  'place',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const CHECKINOUT = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTION = [
  'Красивый вид',
  'Лучшие удобства',
  'Кровать king-size',
  'Панорамные окна'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

//Объект с локацией

const createLocation =  () => {
  return {
    lat: Number(getRandomFloat(35.65000, 35.70000, 5)),
    lng: Number(getRandomFloat(139.70000, 139.80000, 5)),
  };
};

//Объект, описывающий автора

const createAuthor = () => {
  const randomAvatarIndex = getRandomNumber(0, AVATAR.length - 1);
  return {
    avatar: 'img/avatars/user' + AVATAR[randomAvatarIndex] + '.png',
  };
};

//Создание предложения

const createOffer = () => {
  const randomTitleIndex = getRandomNumber(0, TITLE.length - 1);
  const randomTypeIndex = getRandomNumber(0, TYPE.length -1);
  const randomCheckInIndex = getRandomNumber(0, CHECKINOUT.length -1);
  const randomCheckOutIndex = getRandomNumber(0, CHECKINOUT.length -1);
  const randomDescriptionIndex = getRandomNumber(0, DESCRIPTION.length -1);

  return {
    title: TITLE[randomTitleIndex],
    address: createLocation() + '',
    price: getRandomNumber(),
    type: TYPE[randomTypeIndex],
    rooms: getRandomNumber(),
    quests: getRandomNumber(),
    checkin: CHECKINOUT[randomCheckInIndex],
    checkout: CHECKINOUT[randomCheckOutIndex],
    features: Array.from({length: getRandomNumber(1, FEATURES.length)}, FEATURES[0, getRandomNumber(1, FEATURES.length - 1)]),
    desctiption: DESCRIPTION[randomDescriptionIndex],
    photos: Array.from({length: getRandomNumber(1, PHOTOS.length)}, PHOTOS[0, getRandomNumber(1, PHOTOS.length - 1)]),
  };
};
