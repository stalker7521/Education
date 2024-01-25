const readline = require('readline-sync');
let str = readline.question("Enter the string: ").toString();
let subStr = readline.question("Enter the substring: ").toString();
let entry = [];

let subStrLen = subStr.length;
let alphabet = [];

for (let i = 0; i < subStrLen; i++) { //Формирует алфавит подстроки
    alphabet[subStr.charAt(i)] = 0;
}

let transition = new Array(subStrLen + 1); //создаём двойную таблицу переходов
for (let j = 0; j <= subStrLen; j++)
    transition[j] = [];


for (let i in alphabet) { //заполняем таблицу переходов пустыми местами для наглядности
    transition [0][i] = 0;
}
for (let j = 0; j < subStrLen; j++) { //заполняем переходами
    let early = transition[j][subStr.charAt(j)];
    transition[j][subStr.charAt(j)] = j + 1;
    for (let i in alphabet) {
        transition[j + 1][i] = transition[early][i];
    }
}


let num = 0; //наконец, ищем совпадения
for (let i = 0; i < str.length; i++) {
    if (transition[num][str[i]] === undefined) {
        num = 0;
    }
    else {
        num = transition[num][str[i]];
    }
    if (num === subStrLen) {
        entry.push(i - subStrLen + 1);
    }
}
console.log('The original line: ', str);
console.log('The SubString: ', subStr);
console.log("Entry in " + entry);