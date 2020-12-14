const people = [
    { name: 'John Doe', age: 16 }, 
    { name: 'Thomas Calls', age: 19 }, 
    { name: 'Liam Smith', age: 20 }, 
    { name: 'Jessy Pinkman', age: 18 },
];

const coffeeLovers = [
    'John Doe',
    'Liam Smith', 
    'Jessy Pinkman'
];

const ageAbove18 = (person) => person.age >= 18;

const addCoffeeLoverProperty = (person) => 
{
    person.coffeeLover = coffeeLovers.includes(person.name);
    return person;
}

const ageReducer = ((sum, person) => 
{ 
    return sum + person.age;
}, 0);

const coffeeLoversAbove18 = people 
                            .filter(ageAbove18)
                            .map(addCoffeeLoverProperty);

const totalAgeOfCoffeeLoversAbove18 = coffeeLoversAbove18 
                            .reduce(ageReducer);

const totalAge = people .reduce(ageReducer);