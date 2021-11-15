import {
  getRandomPositiveFloat,
  getRandomPositiveInteger
} from './utils.js';

function getRandomNumber(min, max) {
  if (min < 0 || max < 0 || min >= max) {
    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber(1, 10);

function getRandomFloat(min, max, numberOfDecimal) {
  if (min < 0 || max < 0 || min >= max) {
    return 'Ошибка! Введенное число меньше нуля, либо числа равны друг другу!';
  }
  const floatNumber =  Math.random() * (max - min + 1) + min;
  return floatNumber.toFixed(numberOfDecimal);
}
getRandomFloat(1, 10, 3);


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
    lat: Number(getRandomPositiveFloat(35.65000, 35.70000, 5)),
    lng: Number(getRandomPositiveFloat(139.70000, 139.80000, 5)),
  };
};

//Объект, описывающий автора

const createAuthor = () => {
  const randomAvatarIndex = getRandomPositiveInteger(0, AVATAR.length - 1);
  return {
    avatar: 'img/avatars/user' + AVATAR[randomAvatarIndex] + '.png',
  };
};

//Создание предложения

const createOffer = () => {
  const randomTitleIndex = randomInteger(0, TITLE.length - 1);
  const randomTypeIndex = getRandomPositiveInteger(0, TYPE.length -1);
  const randomCheckInIndex = getRandomPositiveInteger(0, CHECKINOUT.length -1);
  const randomCheckOutIndex = getRandomPositiveInteger(0, CHECKINOUT.length -1);
  const randomFeaturesIndex = getRandomPositiveInteger(0, FEATURES.length -1);
  const randomDescriptionIndex = getRandomPositiveInteger(0, DESCRIPTION.length -1);
  const randomPhotosIndex = getRandomPositiveInteger(0, PHOTOS.length -1);

  return {
    title: TITLE[randomTitleIndex],
    address: createLocation() + '',
    price: getRandomPositiveInteger(),
    type: TYPE[randomTypeIndex],
    rooms: getRandomPositiveInteger(),
    quests: getRandomPositiveInteger(),
    checkin: CHECKINOUT[randomCheckInIndex],
    checkout: CHECKINOUT[randomCheckOutIndex],
    features: Array.from({length: getRandomPositiveInteger(1, FEATURES.length)}, FEATURES[0, getRandomPositiveInteger(1, FEATURES.length - 1)]),
    desctiption: DESCRIPTION[randomDescriptionIndex],
    photos: Array.from({length: getRandomPositiveInteger(1, PHOTOS.length)}, PHOTOS[0, getRandomPositiveInteger(1, PHOTOS.length - 1)]),
  };
};

const post = () => {
  return {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  };
};

