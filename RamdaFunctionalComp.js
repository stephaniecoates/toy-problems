const R = require('ramda');
// Count how many digits there are in the following 
// sentence, using functional composition

// NOTE: If you get stuck, you can get some hints from 
// the following jsbin: 
// https://jsbin.com/jokefus/2/edit?js,console
// my solution is here: https://jsbin.com/duxewec/1/edit?js,console

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const numbersInString = R.compose(R.length, R.filter(char => !isNaN(parseInt(char))), R.split(''))

console.log(numbersInString(sentence))