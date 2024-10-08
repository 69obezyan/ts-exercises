/**
 * A family want's to go on a vacation, but don't know what is the total amount of money they can spend on the trip.
 * Create the function that takes an array with objects and returns the sum of people's budgets.
 */

function vacationBudget(family: Person[]) { 
    let totalBudget = 0;

    for (let i = 0; i < family.length; i++) {
        totalBudget += family[i].budget;
    }
    
    return totalBudget;
}


export { vacationBudget };

interface Person {
    name: string;
    age: number;
    budget: number;
}