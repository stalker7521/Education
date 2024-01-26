function Node(freq, letter, used, code, lson, rson) {
    this.freq = freq;
    this.letter = letter;
    this.used = used;
    this.code = code;
    this.lson = lson;
    this.rson = rson;
}
function pair(freq, iter) {
    this.freq = freq;
    this.iter = iter;
}
const readline = require('readline-sync');
let str = readline.question('Write String: ').toString();
let result = '';
let alph = {}; //алфавит со всеми буквами
let tree = []; //дерево, которое строим

for(let i = 0;  i < str.length; i++){
    if (alph[str.charAt(i)]) {
        alph[str.charAt(i)] ++;
    }
    else {
        alph[str.charAt(i)] = 1;
    }
}

for ( let i in alph){ //создаём информацию о буквах
    let n = new Node(alph[i],i, 0, '0', -1, -1 );
    tree.push(n);
}

let size = tree.length;
let count = 0;
while (count < tree.length - 1) {
    let a = new pair(str.length + 1, -1); // инициализируем ячейки сравнения менее используемых.
    let b = new pair(str.length + 1, -1);
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].used === 0 && tree[i].freq < a.freq) {
            b.freq = a.freq;
            b.iter = a.iter;
            a.freq = tree[i].freq;
            a.iter = i;
        } else if (tree[i].used === 0 && tree[i].freq < b.freq && tree[i].freq >= a.freq) {
            b.freq = tree[i].freq;
            b.iter = i;
        }
    }
    count += 2;
    let n = new Node(tree[a.iter].freq + tree[b.iter].freq, tree[a.iter].letter + tree[b.iter].letter,
        0, '', a.iter, b.iter);
    tree.push(n);
    tree[a.iter].used = 1;
    tree[b.iter].used = 1;
    tree[a.iter].code = '0';
    tree[b.iter].code = '1';
}
tree[tree.length - 1].code = "";// присваиваем корню код пустого значения

//трясём дерево
for (let i = tree.length - 1; i >= size; i--) {
    if (tree[i].lson !== -1) {
        tree[tree[i].lson].code = tree[i].code + tree[tree[i].lson].code;
    }
    if (tree[i].rson !== -1) {
        tree[tree[i].rson].code = tree[i].code + tree[tree[i].rson].code;
    }

}
//кодируем сообщение

for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < size; j++) {
        if (tree[j].letter === str[i]) {
            result += tree[j].code;
            break;
        }
    }
}

console.log(result);


//декодировка сообщения
let OriginalString = "";                                     
let place = tree.length - 1;
for (let i=0;i < result.length;i++){                                   
    if (result[i] === "1"){
        place = tree[place].rson;
        if (tree[place].rson === -1){
            OriginalString += tree[place].letter;
            place = tree.length - 1;
        }
    }
    else {
        place = tree[place].lson;
        if (tree[place].lson === -1){
            OriginalString += tree[place].letter;
            place = tree.length - 1;
        }
    }
}
console.log(OriginalString);
