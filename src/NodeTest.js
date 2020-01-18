class ShoppingCart {
  constructor() {
    this.items = []
  }

  getItems() {
    const itemsInCart = this.items
    return itemsInCart
  }

  addItem(name, quantity, pricePerUnit) {
    const addProduct = {name, quantity, pricePerUnit} 
    //add product/item to cart
    addProduct.name=name
    addProduct.quantity = quantity
    addProduct.pricePerUnit = pricePerUnit
    this.items.push(addProduct) 
  }

  clear() {
    const clearCart = this.items.forEach(element => this.items.pop);
    
    return this.getItems() 
  }
}

// const cart = new ShoppingCart
// console.log("New ShoppingCart: ", cart)

// cart.addItem("Trash can", 1, 15.5)
// console.log("Items in the Cart :", cart.items)

// cart.clear()
// console.log("Check if cart is empty :", this.getItems)