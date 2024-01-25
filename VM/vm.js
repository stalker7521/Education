console.log("Введите название файла: fib.spml или nok.spml");
const readline = require('readline-sync');
let file = readline.question('').toString();//выбираем название файла, то есть режим работы

let fs = require('fs');
let mem = [];
let inText = fs.readFileSync(file);
inText = inText.toString();
mem = inText.split(/ |\r\n/);
mem.push('exit');
let ip = 0;

while (mem [ip] !== 'exit') {

    switch (mem [ip]) {
        case 'set':
            mem[mem[ip + 1]] = parseFloat(mem[ip + 2]);
            ip += 3;
            break;
        case 'add':
            mem [mem [ip + 3]] = mem [mem [ip + 1]] + mem [mem [ip + 2]];
            ip += 4;
            break;
        case 'sqrt':
            mem [mem[ip + 2]] = Math.sqrt(mem [mem [ip + 1]]);
            ip += 3;
            break;
        case 'div':
            mem [mem [ip + 3]] = (mem [mem [ip + 1]]) / (mem [mem [ip + 2]]);
            ip += 4;
            break;
        case 'pow':
            mem [mem [ip + 3]] = Math.pow((mem [mem [ip + 1]]), mem [mem [ip + 2]]);
            ip += 4;
            break;
        case 'floor':
            mem [mem[ip + 2]] = Math.floor(mem [mem [ip + 1]]);
            ip += 3;
            break;
        case 'nok':
            let a = mem [mem[ip + 1]];
            let b = mem [mem[ip + 2]];
            let nok;
            let nod = 0;
            if (a > b) {
                temp = a;
                a = b;
                b = temp;
            }
            for (let i = 2; i <= a; i++) {
                if (a % i === 0 && b % i === 0) {
                    nod = i;
                }
            }
            nok = (a * b) / nod;
            mem [mem[ip + 3]] = nok;
            ip += 4;
            break;
        case 'output':
            console.log(mem [mem [ip + 1]])
            ip += 2;
            break;
    }
}
