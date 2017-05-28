/* Generate dummy transactions */

let faker = require( 'faker' );

let a = faker.name.findName();
let b = faker.internet.email();
let c = faker.helpers.createCard();

// console.log( a, b, c );

let t = {
    
    createdDate: faker.date.past(),
    type: faker.random.word().concat( ' Transaction' ),
    transactionDate: faker.date.future(),
    transactionId: faker.random.number(),
    dbId: faker.random.number()
}



console.log( t );