// REACT COMPLETE GUIDE
// Javascript Refresher Module
// RE introduction_to_JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript 
// OBJETOS: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects 
// Cloud Editor for JS/HTML https://jsbin.com/
// Code: https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code
// Arrow Functions
const  cubic = number => { 
    var result = number * number *number;    
    console.log('El número', number, 'al cubo es', result );     
    //console.log(result); 
} 
console.log('ARROW FUNCTIONS');
console.log('---------------');
cubic(8);
cubic(9);

// Arrow Functions
const square = number => number * number;
console.log('El numero 6 al cuadrado es',square(6));

console.log('---------------');


/// CLASSES
console.log('CLASSES');
console.log('---------------');

class  Monster {
    constructor () { 
    this.name = 'Majin Boo';
    } 
} 
 
const  boo = new Monster();
console.log(boo.name); // prints 'Majin Boo'

class  Saiyan {
    name = 'Vegeta';
    } 

    const  person = new Saiyan();
    console.log(person.name); // prints ' Vegeta'

// Método


class  Earthling {
    name = 'Goku';
    printMyName = () => { 
        console.log( this.name);
    } 
} 
console.log('---------------');
console.log('METHODS');
console.log('---------------');
const  human = new Earthling();
human.printMyName();
    



