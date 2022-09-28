class Basket {
  basketItems = [];

  add = (item) => {
    this.basketItems.push(item);
  };
}

class Item {
  constructor(id) {
    this.id = id;
  }
}

module.exports = Basket;
module.exports = Item;
