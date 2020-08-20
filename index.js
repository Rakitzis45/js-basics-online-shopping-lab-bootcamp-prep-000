var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemPrice =
    Math.floor((Math.random()*100) + 1);
    return itemPrice;
  }
  var itemName = `${item}`;
  var newItem = {
    itemName: `${item}`,
    price: itemPrice()
  };
  cart.push(newItem);
  return newItem.itemName + "has been added to your cart";
console.log(itemPrice())
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
