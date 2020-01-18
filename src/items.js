class Item {
  constructor(name, quantity, pricePerUnit){
    this.name = name
    this.quantity = quantity
    this.pricePerUnit = pricePerUnit
  }
}

class Product extends Item {
  super()

}

module.exports = {Item, Product}