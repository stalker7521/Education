function Node(freq, letter, used, code, father) {
    this.freq = freq;
    this.letter = letter;
    this.used = used;
    this.father = father;
}
let alph = new Object();
let str = "abrakadabra";
let tree = new Array();

for(  let i = 0;  i < str.length; i++){

    if (alph[str.charAt(i)])
        alph[str.charAt(i)]++;

    else
        alph[str.charAt(i)] = 1;

}

for ( let i in alph){
    let n = new Node(alph[i], i, 0, undefined, null);
    tree.push(n);
}
// Раннее связывание  -и позднее
for ( let i = 0; i < (tree.length - 1); i++){
    // todo будем добавлять элементы в массив
    // todo add element to array

}
console.log(n1.freq);

