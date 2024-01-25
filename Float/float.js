console.log('Enter the number you want to convert to machine representation');
const readline = require('readline-sync');
let num = readline.question('');
if (!isNaN(num)) {
    let floatBinary = numToFloatBinary(num);
    console.log(floatBinary);
} else console.log("Incorrect input");

function numToFloatBinary(num) {
    let sign;
    if (num < 0) {
        sign = '1';
    } else {
        sign = '0';
    }
    let absNum = Math.abs(num);
    let exponent = Math.floor(Math.log2(absNum));
    let mantissa = absNum / Math.pow(2, exponent) - 1;
    exponent += 127;
    let exp = exponent.toString(2).padStart(8, '0');
    let mantis = mantissa.toString(2).substring(2).padEnd(23, '0');
    return sign + exp + mantis;
}