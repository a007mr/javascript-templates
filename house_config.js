// A configurator to calculate the price of the house

var materialPrice = {
  'wood': 1000,
  'stone': 1500,
  'brick': 2000
};


var house = {
  rooms: 10,
  floors: 5,
  material: 'wood',
  coefficient: 10.5,
  
  calculateSquare: function () {
    return this.rooms * this.coefficient * this.floors;
  },
  
  calculatePrice: function () {
   return this.calculateSquare() * materialPrice[this.material];
  }

};

console.log(house);
