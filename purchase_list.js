var groceries = ['tea', 'fruits', 'cookies', 'sugar', 'juice'];
var shoppingList = ''; 

for (var i = 0; i < groceries.length - 1; i++) {
  shoppingList += groceries[i]+', ';
}

shoppingList += groceries[groceries.length - 1]

// A loop for showing the buyer's list