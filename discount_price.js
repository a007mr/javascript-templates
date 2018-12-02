var buy = 4000;
var discountedBuy;

if (buy >= 1000 && buy < 3000) {
  discountedBuy = buy * 0.95;
}

if (buy >= 3000 && buy < 5000) {
  discountedBuy = buy * 0.9;
}

if (buy >= 5000) {
  discountedBuy = buy * 0.85;
}

if (buy < 1000) {
  discountedBuy = buy;
}