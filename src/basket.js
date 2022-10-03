class Basket {
  basketItems = [];

  add = item => {
    this.basketItems.push(item);
  };

  removeItem = item => {
    let index = this.basketItems.indexOf(item);
    let removedItem = this.basketItems.splice(index, 1);
  };
}

module.exports = Basket;
