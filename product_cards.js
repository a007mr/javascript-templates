// A second program checks the availability of the goods in a stock and changes the status of the goods on the site

var cardsData = [
  {
    inStock: true,
    imgUrl: 'gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: 'gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  }
];

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
   element.textContent = text; 
  }
  return element;
};


var renderCards = function (good) {
  var listItem = makeElement('li', 'good');
  
  var title = makeElement('h2', 'good__description', good.text);
  listItem.appendChild(title);
  
  var picture = makeElement('img', 'good__image');
  picture.src = good.imgUrl; 
  picture.alt = good.text; 
  listItem.appendChild(picture);

  var price = makeElement('p', 'good__price', (good.price + '₽/кг'));
  listItem.appendChild(price);
  
  var availabilityClass = 'good--available';
  if (!good.inStock) {
    availabilityClass = 'good--unavailable';
  }
  listItem.classList.add(availabilityClass);
  
  if (good.isHit) {
    listItem.classList.add('good--hit');
    var specialPrice = makeElement('p', 'good__special-offer');
    specialPrice.textContent = good.specialOffer;
    listItem.appendChild(specialPrice);
  }
  
  return listItem;
};

var cardList = document.querySelector('.goods');


for (i = 0; i < cardsData.length; i++) {
   var cardItem = renderCards(cardsData[i]);
   cardList.appendChild(cardItem);
}

