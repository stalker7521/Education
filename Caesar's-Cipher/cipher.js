let ENfreq = {};
let FF = {};
ENfreq['a'] = 8.17; ENfreq['b'] = 1.49; ENfreq['c'] = 2.78;
ENfreq['d'] = 4.25; ENfreq['e'] = 12.70; ENfreq['f'] = 2.29;
ENfreq['g'] = 2.02; ENfreq['h'] = 6.09; ENfreq['i'] = 6.97;
ENfreq['j'] = 0.15; ENfreq['k'] = 0.77; ENfreq['l'] = 4.03;
ENfreq['m'] = 2.49; ENfreq['n'] = 6.75; ENfreq['o'] = 7.51;
ENfreq['p'] = 1.93; ENfreq['q'] = 0.10; ENfreq['r'] = 5.99;
ENfreq['s'] = 6.33; ENfreq['t'] = 9.06; ENfreq['u'] = 2.76;
ENfreq['v'] = 0.98; ENfreq['w'] = 2.36; ENfreq['x'] = 0.15;
ENfreq['y'] = 1.97;  ENfreq['z'] = 0.07;
const readline = require('readline-sync');
let str = readline.question('Enter the encrypted string: ').toString().toLowerCase();
let shift = 1;
for (let i = 0; i < str.length;i++) {
    let ch = str.charAt(i);
    if (!(ch in ENfreq))
        continue;
    if (!(ch in FF)) {
        FF[ch] = 0;
    }
    FF[ch]++;
}
for (let i = 0; i < 26;i++) {
    let ch = String.fromCharCode(i + 97);
    if (ch in FF) {
        FF[ch] = (FF[ch] / str.length) * 100;
    }
}
let minDiff = 100500;
for (let b = 1; b < 26;b++)
{
    let sum = 0;
    for (let i = 0; i < 26;i++)
    {
        let ch = String.fromCharCode(i + 97);
        let chShifted = String.fromCharCode((i + b) % (26) + 97);
        if (chShifted in FF)
            sum += (FF[chShifted] - ENfreq[ch]) * (FF[chShifted] - ENfreq[ch]);
    }
    if (sum < minDiff)
    {
        minDiff = sum;
        shift = b;
    }
}
let alph = {};
let decoded = "";
for (let i = 0;i < 26;i++)
{
    let chShifted = String.fromCharCode((i + shift) % 26 + 97);
    alph[chShifted] = String.fromCharCode(i + 97);
}
for (let i = 0; i < str.length;i++)
{
    if (str[i] in ENfreq)
        decoded += alph[str[i]];
    else decoded += str[i];
}
console.log('The original format: ')
console.log(decoded);
console.log('Key of Cipher:' ,shift );