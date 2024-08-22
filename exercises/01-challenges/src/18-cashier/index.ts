/**
 * Today you work at a store as the cashier, but 10 minutes before your lunch break, the cash register stops working.
 * Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
 * A grocery object has a product, a quantity and a price.
 */

function cashier(groceries: Grocery[]) {
    let totalPrice = 0;
    for (let i = 0; i < groceries.length; i++) {
        totalPrice += groceries[i].price * groceries[i].quantity;

    
    }
    return totalPrice;

 }

export { cashier };

interface Grocery {
    product: string;
    quantity: number;
    price: number;
}