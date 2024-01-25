let arg = process.argv;
let string = arg[2];
let subString = arg[3];

let arr = [];
for (let i = 0; i < string.length; i++) {
    if (string[i] === subString[0]) {
        let flag = 1;
        for (let j = 0; j < subString.length; j++) {
            if (subString[j] !== string[i + j]) {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            arr.push(i);
        }
    }
}
if (arr.length === 0) {
    console.log("There are no matches");
}
else {
    console.log(arr);
}