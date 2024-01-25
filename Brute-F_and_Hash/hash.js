class SuperString {
    constructor(string, hash) {
        this.string = string;
        this.hash = hash;
    }
}
const readline = require('readline-sync');
let s = new SuperString();
s.string = readline.question('Enter the line:').toString();//?
console.log("Your line:    " + s.string);

s.hash = new Array(s.string.length + 1);
s.hash[0] = 0;
for (let i = 1; i < s.hash.length; i++) {
    s.hash[i] = (s.hash[i - 1] + s.string.charCodeAt(i - 1)) % 383;
}

let a = new SuperString();
a.string = readline.question("Enter the substring you want to find: ").toString();
console.log("Your substring: " + a.string);
a.hash = 0;

for (let i = 0; i < a.string.length; i++) {
    a.hash = (a.hash + a.string.charCodeAt(i)) % 383;
}

let mainFlag = 0;
const del = a.string.length;
for (let i = 0; i < s.hash.length - del; i++) {
    if (s.hash[i + del] - s.hash[i] === a.hash) {
        let flag = 1;
        for (let j = i; j < i + del; j++) {
            if (s.string[j] !== a.string[j - i]) {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            mainFlag = 1;
            console.log("The desired substring starts from the " + (i + 1) + " place.");
        }
    }
}

if (mainFlag === 0){
    console.log("This substring is not contained in this line.");
}