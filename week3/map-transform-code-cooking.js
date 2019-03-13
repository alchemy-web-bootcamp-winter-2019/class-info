// MAP

// don't code cook the arrays below; let everyone build 
// these things and keep them

const phrasebook = [
    {
        greeting: 'Grüss dich',
        language: 'German'
    },
    {
        greeting: 'Dia duit',
        language: 'Irish',
        response: 'Dia s\'mura dhit'
    },
    {
        greeting: 'Marhaba',
        language: 'Arabic',
        response: 'Marhabteen'
    },
    
];

var numbers = [1, 4, 9];

var words = ['french', 'fancy', 'fingerfood'];

// once we've made these now proceed to code cook:


numbers;

//

numbers.map(number => number * 3);

//

words;

//

words.map(word => `helloooo my ${word} friend!`);

//

words.map(word => word.slice(1, 4));

//

phrasebook;

//

phrasebook.map(phrase => { return { greeting: phrase.greeting; }});

//

phrasebook;

//

phrasebook.map(phrase => ({ greeting: phrase.greeting, response: phrase.response || 'no special response'}));

//

numbers;

//

numbers.map((number, index) => `${number} at the index of ${index}`);

//

words;

//

words.map((word, index) => `${word} at the index of ${index}`);




