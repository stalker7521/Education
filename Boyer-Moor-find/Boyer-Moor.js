function badSymbolTable(subStr) { // таблица "плохого символа"
    let last = {};
    const subStrLen = subStr.length;
    for (let i = 0; i < subStrLen - 1; i++) {
        last[subStr[i]] = subStrLen - (1 + i);
    }
    if (!(last.hasOwnProperty(subStr[subStrLen - 1]))) { //Если символа нет в таблице
        last[subStr[subStrLen - 1]] = subStrLen;
    }
    return last;
}
function boyerMooreSearchAll(str, subStr) {
    const last = badSymbolTable(subStr);
    let matches = [];
    let i = subStr.length - 1;

    while (i < str.length) {
        let k = 0;
        while ((k < subStr.length) && (subStr[subStr.length - 1 - k] === str[i - k])) { //проверяем совпадения
            k++;
        }
        if (k === subStr.length) {
            matches.push(i - subStr.length + 2);
            i += Math.max(1, k - last[str[i]]);
        }
        else {
            i += Math.max(1, k - last[str[i]]);
        }
    }
    return matches;
}

const readline = require('readline-sync');
let string = readline.question("Enter the string: ").toString();
let subStr = readline.question("Enter the substring: ").toString();
let results = boyerMooreSearchAll(string, subStr);
if (results.length > 0) {
    console.log("Matches found: " + results.join(", "));
}
else {
    console.log("Matches not found.");
}