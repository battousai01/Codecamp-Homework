// Base class Sale
class Sale {
    constructor(amount, price, discount) {
      this.amount = amount;
      this.price = price;
      this.discount = discount;
    }
  
    // Method to calculate the discounted price of the product
    calcPrice() {
      const totalPrice = this.amount * this.price;  // Calculate total price before discount
      const discountAmount = totalPrice * this.discount;  // Calculate discount amount
      const finalPrice = totalPrice - discountAmount;  // Calculate final price after discount
      return finalPrice;
    }
  
    // Method to get the name of the product (this can be overridden in subclass if necessary)
    name() {
      return this.productName;
    }
  }
  
  // Derived class Beverage that inherits from Sale
  class Beverage extends Sale {
    constructor(name, amount, price, discount) {
      super(amount, price, discount);  // Call the parent constructor to initialize amount, price, and discount
      this.productName = name;  // Set product name
    }
  }
  
  // Creating an object 'beverage' from the Beverage class
  const beverage = new Beverage("Pepsi", 3, 19, 0.1);
  
  // Calling calcPrice method to calculate the discounted price
  const discountedPrice = beverage.calcPrice();
  
  // Displaying the discounted price
  console.log(`Discounted price for ${beverage.name()} is: $${discountedPrice.toFixed(2)}`);
  