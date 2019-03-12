// OBJECT.KEYS

// don't code cook the string, array and objects below; 
// type these up and let everyone build 

const fooString = 'foo';

const fooArray = ['f', 'o', 'o'];

const fooObject = {
    1: 'f',
    2: 'o',
    3: 'o'
};

const phrasebook = {
    greeting: "hello",
    farewell: "good bye",
    greetingTwo: "howdy"
};

// Now code cook!

fooString;

Object.keys(fooString);

// 

fooArray;

Object.keys(fooArray);

// 

fooObject;

Object.keys(fooObject);

//

phrasebook;

JSON.stringify(phrasebook);

Object.keys(phrasebook);

//

const fruit = { 
    a: 'apple',
    b: 'banana',
    c: 'cantaloupe'
 };


const newFruit = Object.keys(fruit).map(fruitId => {
    return { id: fruitId, name: fruit[fruitId]};
});

// expose new array of objects

